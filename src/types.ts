export interface IWeatherResponseDTO {
  weather: Array<{
    main: string;
    description: string;
    id: number;
    icon: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  dt: number;
  dt_txt: string;
  pop: number;
}
