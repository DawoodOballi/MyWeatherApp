import { render, screen } from '@testing-library/react';
import MyWeatherApp from './MyWeatherApp';

test('renders learn react link', () => {
  render(<MyWeatherApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
