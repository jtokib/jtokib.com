export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const { tide, wind, pt_reyes, sf_bar } = req.body;
        
        // Log the API URL for debugging
        console.log('Calling prediction API at:', process.env.NEXT_PUBLIC_PREDICT_API_URL);
        console.log('Request body:', { tide, wind, pt_reyes, sf_bar });

        const response = await fetch(process.env.NEXT_PUBLIC_PREDICT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tide: tide,
                wind: wind,
                pt_reyes: pt_reyes,
                sf_bar: sf_bar,
            }),
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error from Cloud Function:", errorText);
            throw new Error(`Failed to get prediction from the prediction service. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Prediction response:', data);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error in API route:", error.message);
        res.status(500).json({ error: error.message });
    }
}