import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Testa o InputTodo...', () => {
    test('Verifica que o botão com o texto "Adicionar" está sendo renderizado.', () => {
        render(<App />)

        //Acessar
        const buttonAdd = screen.getByText('Adicionar');
        //Interagir

        //Aferir
        expect(buttonAdd).toBeInTheDocument();
        expect(buttonAdd.type).toBe('button');
    })
    test('Ao clicar no botão "Adicionar" a task deve ser adicionada na tela', () => {
        render(<App />);

        //Acessar
        const InputTask = screen.getByLabelText(/tarefa:/i  )
        const buttonAdd = screen.getByText('Adicionar')

        //Interagir

        userEvent.type(InputTask, 'beber')

        //Aferir

        expect(screen.queryByText('beber')).not.toBeInTheDocument();

        // Interagir

        userEvent.click(buttonAdd);

        //Aferir

        expect(screen.queryByText('beber')).toBeInTheDocument();
        expect(InputTask).toHaveValue('')
    })
})