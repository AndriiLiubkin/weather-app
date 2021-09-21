import WeatherSummary from "./WeatherSummary";

import Enzyme, { shallow } from "enzyme";
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

describe("<WeatherSummary />", () => {
  it("test empty weather summary", () => {
    const wrapper = shallow(<WeatherSummary weatherData={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("test weather summary", () => {
    const wrapper = shallow(
      <WeatherSummary weatherData={mockWeatherListData} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
