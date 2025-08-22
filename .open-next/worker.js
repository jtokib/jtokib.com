//@ts-expect-error: Will be resolved by wrangler build
import { fetchImage } from "./cloudflare/images.js";
//@ts-expect-error: Will be resolved by wrangler build
import { runWithCloudflareRequestContext } from "./cloudflare/init.js";
//@ts-expect-error: Will be resolved by wrangler build
import { maybeGetSkewProtectionResponse } from "./cloudflare/skew-protection.js";
// @ts-expect-error: Will be resolved by wrangler build
import { handler as middlewareHandler } from "./middleware/handler.mjs";
//@ts-expect-error: Will be resolved by wrangler build
export { DOQueueHandler } from "./.build/durable-objects/queue.js";
//@ts-expect-error: Will be resolved by wrangler build
export { DOShardedTagCache } from "./.build/durable-objects/sharded-tag-cache.js";
//@ts-expect-error: Will be resolved by wrangler build
export { BucketCachePurge } from "./.build/durable-objects/bucket-cache-purge.js";
// Mock guestbook data for testing
let mockGuestbookEntries = [
    {
        id: 1,
        name: "Test User",
        message: "Welcome to the guestbook! This is a test entry.",
        created_at: new Date().toISOString()
    },
    {
        id: 2,
        name: "Cyber Visitor",
        message: "Loving the 90s vibes! Great site design! 🌟",
        created_at: new Date(Date.now() - 86400000).toISOString() // 1 day ago
    }
];

// Helper function to handle guestbook API
async function handleGuestbookAPI(request, env) {
    const url = new URL(request.url);
    
    // Set CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight OPTIONS request
    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        if (request.method === 'GET') {
            // Return mock guestbook entries
            return new Response(JSON.stringify(mockGuestbookEntries), {
                headers: {
                    'Content-Type': 'application/json',
                    ...corsHeaders
                }
            });
        } 
        
        if (request.method === 'POST') {
            // Handle new guestbook entry
            const formData = await request.formData();
            const name = formData.get('name');
            const message = formData.get('message');

            // Basic validation
            if (!name || !message) {
                return new Response(JSON.stringify({ 
                    error: 'Name and message are required' 
                }), {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                });
            }

            // Create new entry
            const newEntry = {
                id: mockGuestbookEntries.length + 1,
                name: String(name).slice(0, 50), // Limit name length
                message: String(message).slice(0, 1000), // Limit message length
                created_at: new Date().toISOString()
            };

            // Add to mock data (prepend to show newest first)
            mockGuestbookEntries.unshift(newEntry);
            
            // Keep only 10 most recent entries
            if (mockGuestbookEntries.length > 10) {
                mockGuestbookEntries = mockGuestbookEntries.slice(0, 10);
            }

            return new Response(JSON.stringify(newEntry), {
                headers: {
                    'Content-Type': 'application/json',
                    ...corsHeaders
                }
            });
        }

        // Method not allowed
        return new Response(JSON.stringify({ 
            error: 'Method not allowed' 
        }), {
            status: 405,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });

    } catch (error) {
        return new Response(JSON.stringify({ 
            error: 'Internal server error' 
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });
    }
}

export default {
    async fetch(request, env, ctx) {
        return runWithCloudflareRequestContext(request, env, ctx, async () => {
            const response = maybeGetSkewProtectionResponse(request);
            if (response) {
                return response;
            }
            const url = new URL(request.url);
            
            // Handle guestbook API requests
            if (url.pathname === '/api/guestbook') {
                return handleGuestbookAPI(request, env);
            }
            
            // Serve images in development.
            // Note: "/cdn-cgi/image/..." requests do not reach production workers.
            if (url.pathname.startsWith("/cdn-cgi/image/")) {
                const m = url.pathname.match(/\/cdn-cgi\/image\/.+?\/(?<url>.+)$/);
                if (m === null) {
                    return new Response("Not Found!", { status: 404 });
                }
                const imageUrl = m.groups.url;
                return imageUrl.match(/^https?:\/\//)
                    ? fetch(imageUrl, { cf: { cacheEverything: true } })
                    : env.ASSETS?.fetch(new URL(`/${imageUrl}`, url));
            }
            // Fallback for the Next default image loader.
            if (url.pathname === `${globalThis.__NEXT_BASE_PATH__}/_next/image`) {
                const imageUrl = url.searchParams.get("url") ?? "";
                return await fetchImage(env.ASSETS, imageUrl, ctx);
            }
            // - `Request`s are handled by the Next server
            const reqOrResp = await middlewareHandler(request, env, ctx);
            if (reqOrResp instanceof Response) {
                return reqOrResp;
            }
            // @ts-expect-error: resolved by wrangler build
            const { handler } = await import("./server-functions/default/handler.mjs");
            return handler(reqOrResp, env, ctx);
        });
    },
};
