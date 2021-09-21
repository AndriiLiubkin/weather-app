import React from "react";
import { shallow } from "enzyme";
import WeatherList from "./WeatherList";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

const mockWeatherListData = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

Enzyme.configure({ adapter: new Adapter() });

describe("<WeatherList />", () => {
  it("test empty array", () => {
    const wrapper = shallow(<WeatherList weatherData={[]} currentCity="" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("test weather list with data", () => {
    const wrapper = shallow(
      <WeatherList weatherData={mockWeatherListData} currentCity="London" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
