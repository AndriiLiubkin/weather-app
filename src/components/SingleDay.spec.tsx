import { render, screen } from "@testing-library/react";
import SingleDay from "./SingleDay";

const mockWeatherData = {
  dt: 1632495600,
  dt_txt: "2021-09-24 15:00:00",
  main: {
    feels_like: 22.17,
    humidity: 50,
    pressure: 1012,
    temp: 22.55,
  },
  weather: [
    {
      description: "clear sky",
      icon: "01d",
      id: 800,
      main: "Rain",
    },
  ],
  pop: 53,
  visibility: 21,
  wind: {
    deg: 279,
    gust: 7.07,
    speed: 3.92,
  },
};

describe("<SingleDay>", () => {
  it("if weather rendered", () => {
    render(<SingleDay data={mockWeatherData} />);
    expect(screen.getByTestId("weather-day")).toBeTruthy();
    expect(screen.getByTestId("weather-temp")).toBeTruthy();
    expect(screen.getByTestId("weather-status")).toBeTruthy();
  });
});
