# weather-mcp

A lightweight Node.js/Express REST API that fetches current weather data for any city using the OpenWeatherMap API.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Health Check](#health-check)
  - [Get Weather](#get-weather)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Current Weather**: Returns city name, temperature (°C), and a brief description.
- **Default City**: If no city is specified in the request, defaults to Istanbul.
- **Health Check**: A root endpoint (`/`) to verify the server is running.

## Prerequisites
- **Node.js** v14 or higher
- **npm** (comes bundled with Node.js)
- An **OpenWeatherMap API Key** (free tier available):
  - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your key.

## Installation
```bash
git clone https://github.com/utkucaglar/weather-mcp.git
cd weather-mcp
npm install
```
This will install the dependencies listed in `package.json`:
- `express` – HTTP server framework
- `node-fetch` – to make requests to the OpenWeatherMap API

## Configuration
Create a `.env` file in the root of your project:
```bash
PORT=3000
OPENWEATHER_API_KEY=your_api_key_here
```
Install `dotenv` (if not already):
```bash
npm install dotenv
```
Update `index.js` to load environment variables at the top:
```javascript
require('dotenv').config();
const apiKey = process.env.OPENWEATHER_API_KEY;
const port   = process.env.PORT || 3000;
```
**Tip**: You can also set these variables directly in your shell instead of using a `.env` file:
```bash
export PORT=3000
export OPENWEATHER_API_KEY=your_api_key_here
```

## Usage
Start the server:
```bash
npm start
```
By default, it listens on port 3000 (or the `PORT` you specified).

## API Endpoints

### Health Check
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  - **Status**: `200 OK`
  - **Body**: `Weather API is running!`

### Get Weather
- **URL**: `/weather`
- **Method**: `POST`
- **Headers**:
  ```plaintext
  Content-Type: application/json
  ```
- **Request Body**:
  ```json
  {
    "city": "London"
  }
  ```
  If you omit `"city"` or send an empty string, it defaults to `"Istanbul"`.

- **Success Response**:
  - **Status**: `200 OK`
  - **Body**:
    ```json
    {
      "city": "London",
      "temperature": 15.32,
      "description": "light rain"
    }
    ```

- **Error Responses**:
  - **400 Bad Request**:
    ```json
    { "error": "Weather data not found for city: CITY" }
    ```
  - **500 Internal Server Error**:
    ```json
    { "error": "Internal server error" }
    ```

## Examples
Fetch weather for Paris using `curl`:
```bash
curl -X POST http://localhost:3000/weather \
  -H "Content-Type: application/json" \
  -d '{"city":"Paris"}'
```
Check health:
```bash
curl http://localhost:3000/
```

## Troubleshooting
- **Invalid or Missing API Key**:
  - Make sure `OPENWEATHER_API_KEY` is set and valid.
- **Port Already in Use**:
  - Change the `PORT` in your `.env` or shell, or stop the other process.
- **Network Issues**:
  - Verify your internet connection and that the OpenWeatherMap service is reachable.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2.創造一個功能分支：
   ```bash
   git checkout -b feature/awesome-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add awesome feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/awesome-feature
   ```
5. Open a Pull Request!

