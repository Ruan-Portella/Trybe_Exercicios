// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('Testa a Aplicação', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke1 = {
    id: 'xXsv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  render(<App />)
  const newJoke = screen.getByRole('button', {name: 'Nova Piada'});


  expect(await screen.findByText(joke.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke1),
  })

  userEvent.click(newJoke)

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);

})