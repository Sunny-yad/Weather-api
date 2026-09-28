# 🌤️ Weather API

A simple RESTful Weather API built with **Node.js** and **Express.js** that fetches current weather information for a given city using the **Open-Meteo API**.

## 🚀 Features

* Get current weather by city name
* Automatic city geocoding
* Temperature information
* Humidity information
* Wind speed
* Weather code
* Input validation
* City-not-found error handling
* No API key required

## 🛠️ Tech Stack

* Node.js
* Express.js
* Open-Meteo API
* JavaScript
* REST API

## 📁 Project Structure

```text
weather-api/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Sunny-yad/Weather-api.git
```

Move into the project directory:

```bash
cd Weather-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server will run on:

```text
http://localhost:5000
```

## 🔗 API Endpoints

### Health Check

**GET**

```text
/api/health
```

Example:

```text
http://localhost:5000/api/health
```

Response:

```json
{
  "message": "Weather API is running"
}
```

### Get Weather

**GET**

```text
/api/weather?city=Delhi
```

Example:

```text
http://localhost:5000/api/weather?city=Delhi
```

Example response:

```json
{
  "city": "Delhi",
  "country": "India",
  "temperature": 30.5,
  "humidity": 45,
  "windSpeed": 12.3,
  "weatherCode": 2
}
```

## ❌ Error Handling

If the city parameter is missing:

```json
{
  "message": "City is required"
}
```

If the city cannot be found:

```json
{
  "message": "City not found"
}
```

## 🌍 Weather Data

Weather data is provided by **Open-Meteo**.

The API first converts the city name into latitude and longitude coordinates and then uses those coordinates to fetch the current weather.

## 📌 Example

Request:

```text
GET /api/weather?city=Mumbai
```

The API returns the current weather information for Mumbai in JSON format.

## 👨‍💻 Author

**Sunny Yadav**

GitHub: [Sunny-yad](https://github.com/Sunny-yad)
