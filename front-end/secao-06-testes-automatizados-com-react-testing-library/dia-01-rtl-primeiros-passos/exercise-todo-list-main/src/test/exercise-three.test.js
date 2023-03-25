import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a funcionalidade de desabilitar o botão `Adicionar`', () => {
  test('O botão `Adicionar` deve estar desabilitado na primeira renderização', () => {
    render(<App />);

    const btnAdd = screen.getByText('Adicionar');

    expect(btnAdd).toBeDisabled();
  });

  test('O botão `Adicionar` deve estar habilitado quando um valor é digitado', () => {
    render(<App />);

    const btnAdd = screen.getByText('Adicionar');
    const inputTask = screen.getByLabelText('Tarefa:');

    userEvent.type(inputTask, 'Estudar RTL');

    expect(btnAdd).not.toBeDisabled();
  });

  test('O botão `Adicionar` deve estar desabilitado após adicionar uma tarefa', () => {
    render(<App />);

    const btnAdd = screen.getByText('Adicionar');
    const inputTask = screen.getByLabelText('Tarefa:');

    userEvent.type(inputTask, 'Estudar RTL');
    userEvent.click(btnAdd);

    expect(btnAdd).toBeDisabled();
  });
});

describe('Testando funcionalidade de apagar uma tarefa adicionada', () => {
  test('Não deve haver botões de remover após a primeira renderização da página', () => {
    render(<App />);
    const allRemoveButtons = screen.queryAllByRole('button', { name: 'Remover' });

    expect(allRemoveButtons.length).toBe(0);
  });

  test('Testando a seleção e remoção de uma task', async () => {
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    userEvent.type(inputTask, 'Exercitar');
    userEvent.click(btnAdd);
    userEvent.type(inputTask, 'Estudar');
    userEvent.click(btnAdd);

    expect(screen.queryByText('Estudar')).toBeInTheDocument();

    const allRemoveButtons = screen.queryAllByRole('button', { name: 'Remover' });
    userEvent.click(allRemoveButtons[1]);
    expect(screen.queryByText('Estudar')).not.toBeInTheDocument();
  });
});
