import { useState } from "react";
import UserSearchInput from "./components/UserSearchInput"
import WeatherCard from "./components/WeatherCard"

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>();

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>, city: string) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/getweather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: city,
        }),
      });
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
    
    
  };
  return (
    <div className="flex flex-col max-w-xl m-auto gap-2">
      <UserSearchInput handleSubmit={handleSubmit} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  )
}
