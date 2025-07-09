const express = require("express");
const fetch = require("node-fetch"); // Make sure to install node-fetch: npm install node-fetch
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Accept": "application/json",
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: `Failed to fetch data from Swiggy. Status: ${response.status}` });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
