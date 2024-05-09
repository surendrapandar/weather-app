import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const WeatherCard = ({weatherData}: any) => {
  return (
    <div className="mt-4">
      <Card>
      <CardHeader>
  {weatherData["message"] === "city not found" ? (
    <CardTitle>City Not Found, Please check your city name and come back.</CardTitle>
  ) : (
    <CardTitle>Weather In {weatherData["name"]}</CardTitle>
  )}
</CardHeader>

        <CardContent>
          {weatherData["main"] && <p>Temperature: {weatherData["main"]["temp"]}°C</p>}
          {weatherData["main"] && <p>Humidity: {weatherData["main"]["humidity"]}%</p>}
          {weatherData["wind"] && <p>Wind Speed: {weatherData["wind"]["speed"]} m/s</p>}

        </CardContent>
      </Card>
    </div>
  );
}

export default WeatherCard;