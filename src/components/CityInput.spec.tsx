import React from "react";
import CityInput from "./CityInput";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const onGetWeather = () => console.log("getWeather");

const onCityChange = () => console.log("City Change");

describe("<CityInput />", () => {
  it("should test CityInput component", () => {
    const wrapper = shallow(
      <CityInput onCityChange={onCityChange} onGetWeather={onGetWeather} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle onSubmit handler", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
      <CityInput onGetWeather={onSubmitSpy} onCityChange={onCityChange} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
      preventDefault: () => jest.fn(),
    });
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
