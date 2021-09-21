import React, { FormEvent } from "react";

interface CityInputProps {
  onGetWeather: () => void;
  onCityChange: (e: string) => void;
}

const CityInput = ({ onCityChange, onGetWeather }: CityInputProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGetWeather();
  };

  return (
    <div className="choose-country">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => onCityChange(e.target.value)}
          placeholder="Enter City"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CityInput;
