

export default async function handler(req, res) {
        // Assuming the request body is parsed by the platform's runtime environment
        const { searchTerm } = req.body;
    
        if (!searchTerm) {
            return res.status(400).json({ error: "Search term is required." });
        }
    
        try {
            const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchTerm)}&per_page=1`;
            const response = await fetch(url, {
            headers: {
                Authorization: "DCa7C4DwgEKaghFLDPuog1MoheSBI2VL6Y1ADLaKw8RPbxMB8l0On2qF",
            }
            });
    
            if (!response.ok) {
            throw new Error(`Failed to fetch images: ${response.statusText}`);
            }
    
            const data = await response.json();
            // Assuming you want to directly return the photos array to the client
            res.status(200).json(data);
        } catch (error) {
            console.error("Error fetching images:", error);
            res.status(500).json({ error: "Error fetching images." });
        }
    }
    