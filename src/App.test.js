import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const GenerationHeader = screen.getByText(/Kanto Pokedex/i);
  expect(GenerationHeader).toBeInTheDocument();
  const menuButton = screen.getByLabelText("Toggle navigation");
  expect(menuButton).toBeInTheDocument();
});
