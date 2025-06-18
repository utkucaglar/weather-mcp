export default async function handle(input, tools) {
  const city = input || 'Istanbul';
  const apiKey = '8094d87dcbeeb7f03a59c6db2bc1c8ce';

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await res.json();

  if (!data.main || !data.weather) {
    return {
      error: 'Weather data not available. Check city name or API key.',
      response: data
    };
  }

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description
  };
}
