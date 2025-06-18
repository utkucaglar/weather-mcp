import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/weather', async (req, res) => {
  const city = req.body.city || 'Istanbul';
  const apiKey = '8094d87dcbeeb7f03a59c6db2bc1c8ce';

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (!data.main || !data.weather) {
      return res.status(400).json({ error: 'Weather data not found', raw: data });
    }

    return res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description
    });
  } catch (error) {
    res.status(500).json({ error: 'API error', details: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Weather API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
