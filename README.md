# weather-mcp

A simple Express.js server that provides current weather data for any city using the OpenWeatherMap API.

## Table of Contents

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Prerequisites](#prerequisites)  
4. [Installation](#installation)  
5. [Configuration](#configuration)  
6. [Usage](#usage)  
7. [API Endpoints](#api-endpoints)  
8. [Examples](#examples)  
9. [Troubleshooting](#troubleshooting)  
10. [Contributing](#contributing)  
11. [License](#license)  

## Introduction

This project is a lightweight Node.js/Express server that exposes a REST API to fetch current weather information for a given city by querying the OpenWeatherMap API.

## Features

- **Current Weather**: Returns city name, temperature (°C), and a brief description.  
- **Default City**: If no city is specified, defaults to “Istanbul”.  
- **Health Check**: A root endpoint to verify the server is running.  

## Prerequisites

- Node.js v14 or higher  
- npm (comes bundled with Node.js)  

## Installation

```bash
git clone https://github.com/utkucaglar/weather-mcp.git
cd weather-mcp
npm install
This will install the dependencies listed in package.json:

express for the HTTP server

node-fetch for making API requests

Configuration
Port: The server listens on the port defined by the PORT environment variable, defaulting to 3000.

API Key: By default, the OpenWeatherMap API key is hardcoded in index.js. For better security, create a .env file (listed in .gitignore) and replace the apiKey constant in index.js with process.env.OPENWEATHER_API_KEY.

Example .env:

bash
Kopyala
Düzenle
OPENWEATHER_API_KEY=your_openweathermap_api_key_here
Then update index.js accordingly.

Usage
Start the server with:

bash
Kopyala
Düzenle
npm start
You should see:

arduino
Kopyala
Düzenle
Server running on port 3000
API Endpoints
GET /
Health check endpoint.

Request:

http
Kopyala
Düzenle
GET /
Response:

arduino
Kopyala
Düzenle
Weather API is running!
POST /weather
Fetch current weather for a city.

Request:

http
Kopyala
Düzenle
POST /weather
Content-Type: application/json

{
  "city": "London"
}
Response (200 OK):

json
Kopyala
Düzenle
{
  "city": "London",
  "temperature": 15.32,
  "description": "light rain"
}
Errors:

400 Bad Request if the API returns no weather data.

500 Internal Server Error if there’s an error calling the external API.

Examples
bash
Kopyala
Düzenle
# Health check
curl http://localhost:3000/

# Get weather for Paris
curl -X POST http://localhost:3000/weather \
     -H "Content-Type: application/json" \
     -d '{"city":"Paris"}'
Troubleshooting
“Weather data not found” (400): Verify the city name is spelled correctly.

“API error” (500): Check your network connection and ensure your API key is valid.

Port in use: Change the PORT environment variable or stop the other process.

Contributing
Contributions are welcome! To contribute:

Fork the repository

Create your feature branch (git checkout -b feature/foo)

Commit your changes (git commit -am 'Add foo feature')

Push to the branch (git push origin feature/foo)

Open a Pull Request

License
This repository does not include a LICENSE file. Please add a license (e.g., MIT, Apache-2.0) to specify usage terms.
