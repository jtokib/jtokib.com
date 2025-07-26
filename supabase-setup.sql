-- =====================================================
-- GUESTBOOK SETUP FOR JTOKIB.COM
-- Run these commands in your Supabase SQL Editor
-- =====================================================

-- 1. Create the guestbook table
CREATE TABLE guestbook (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL CHECK (char_length(name) <= 50),
    message TEXT NOT NULL CHECK (char_length(message) <= 1000),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create function to keep only 10 most recent entries
CREATE OR REPLACE FUNCTION cleanup_guestbook()
RETURNS TRIGGER AS $$
BEGIN
    -- Delete entries beyond the 10 most recent
    DELETE FROM guestbook
    WHERE id NOT IN (
        SELECT id FROM guestbook
        ORDER BY created_at DESC
        LIMIT 10
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Create trigger to auto-cleanup after insertions
CREATE TRIGGER guestbook_cleanup_trigger
    AFTER INSERT ON guestbook
    FOR EACH ROW
    EXECUTE FUNCTION cleanup_guestbook();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS policies
-- Allow anonymous users to read all entries
CREATE POLICY "Allow anonymous reads" ON guestbook
    FOR SELECT TO anon
    USING (true);

-- Allow anonymous users to insert entries
CREATE POLICY "Allow anonymous inserts" ON guestbook
    FOR INSERT TO anon
    WITH CHECK (true);

-- 6. Insert mock data (10 entries in chronological order)
INSERT INTO guestbook (name, message, created_at) VALUES
-- 2003-2004 Cluster
('Sarah M.', 'Just discovered your site! Love the creativity. Keep it up! 🌟', '2003-12-15 14:30:00+00'),
('Mike_2003', 'Cool', '2004-01-20 16:45:00+00'),
('Jennifer', 'Your projects remind me why I love the internet. Thanks for sharing your passion!', '2004-02-28 12:15:00+00'),

-- 2008-2009 Cluster  
('TechGuru88', 'Stumbled here from StumbleUpon. Great work!', '2008-09-10 19:20:00+00'),
('Amanda', 'Been following your updates. Your dedication is inspiring!', '2008-11-22 10:30:00+00'),
('CodeNewbie', 'As someone just starting to learn web dev, your site gives me hope. Thank you!', '2009-03-15 15:45:00+00'),

-- 2015-2016 Cluster
('RandomVisitor', 'Still here after all these years. Classic!', '2015-08-07 20:10:00+00'),
('Emma Thompson', 'Your site has been bookmarked since college. Glad to see it''s still going strong!', '2015-12-18 11:25:00+00'),

-- 2022-2024 Cluster
('Max (your dog)', 'WOOF! My human spends way too much time clicking on the clicky thing instead of throwing my ball, but I have to admit this website smells pretty good for something made of ones and zeros. I especially like the part where he puts pictures of me - though he never captures my best angle, which is obviously when I''m stealing socks from the laundry basket. Sometimes I walk across his keyboard and accidentally make the website better. He calls it ''debugging'' but I call it ''adding character.'' Anyway, gotta go - I hear the treat jar opening and my services are required for quality control. Remember: life''s too short for bad code and empty food bowls! *tail wag* P.S. - If anyone reading this has bacon, I''m available for consulting.', '2022-06-12 08:00:00+00'),
('Alex Chen', 'Found this through a random GitHub deep dive at 2 AM. No regrets. Solid work!', '2024-10-25 06:00:00+00');

-- 7. Grant necessary permissions to anon role
GRANT SELECT, INSERT ON guestbook TO anon;
GRANT USAGE ON SCHEMA public TO anon;

-- =====================================================
-- VERIFICATION QUERIES (Optional - run to test)
-- =====================================================

-- Check if table was created correctly
-- SELECT * FROM guestbook ORDER BY created_at DESC;

-- Test the cleanup function by inserting a test entry
-- INSERT INTO guestbook (name, message) VALUES ('Test User', 'This should trigger cleanup!');

-- Verify only 10 entries remain
-- SELECT COUNT(*) FROM guestbook; -- Should return exactly 10

-- Check RLS policies are active
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
-- FROM pg_policies WHERE tablename = 'guestbook';

-- =====================================================
-- ENVIRONMENT VARIABLES FOR VERCEL
-- =====================================================
/*
Set this environment variable in your Vercel dashboard:

SUPABASE_KEY=your_supabase_anon_key

Your Supabase project URL is already hardcoded: https://uqtbhutphcsfuhglpndt.supabase.co

You can find the anon key in your Supabase project settings:
1. Go to Settings > API in your Supabase dashboard
2. Copy the anon public key
*/