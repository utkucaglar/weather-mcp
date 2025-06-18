import http from 'http';
import fetch from 'node-fetch';

// MCP-benzeri handle fonksiyonu
async function handle(input) {
  const city = input || 'Istanbul';
  const apiKey = '8094d87dcbeeb7f03a59c6db2bc1c8ce';

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await res.json();

  if (!data.main || !data.weather) {
    return {
      error: 'Weather data not available',
      response: data
    };
  }

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description
  };
}

// HTTP sunucusu başlat
const server = http.createServer(async (req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      const input = JSON.parse(body).input;
      const output = await handle(input);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      r
