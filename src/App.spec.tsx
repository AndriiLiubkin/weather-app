import App from "./App";
import { render, screen } from '@testing-library/react';

describe("App", () => {
  render(
    <App />
  )
  it("Render header", () => {
    expect(screen.getByTestId("weather-header")).toBeTruthy();
  })
})