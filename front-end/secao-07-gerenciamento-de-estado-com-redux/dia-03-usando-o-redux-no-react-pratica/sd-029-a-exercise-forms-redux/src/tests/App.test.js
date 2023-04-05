import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux, {
  renderWithRouterAndReduxWithoutInitialState,
} from './utils/renderWithRouterAndRedux';

describe('01 - Implementando as rotas e estrutura das páginas', () => {
  it('Possui o botão "preencher formulário" na home', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', {
      name: /preencher formulário/i,
    });
    expect(button).toBeInTheDocument();
  });

  it('Renderiza formulário pessoal na rota "personal-form"', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    act(() => {
      history.push('/personal-form');
    });
    const title = await screen.findByRole('heading', {
      name: /informações pessoais/i,
    });
    expect(title).toBeInTheDocument();

    // encontra o input de nome
    const nameInput = screen.getByLabelText(/nome/i);
    expect(nameInput).toBeInTheDocument();

    // encontra o input de email
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();

    // encontra o input de cpf
    const cpfInput = screen.getByLabelText(/cpf/i);
    expect(cpfInput).toBeInTheDocument();

    // encontra o input de endereço
    const addressInput = screen.getByLabelText(/endereço/i);
    expect(addressInput).toBeInTheDocument();

    // encontra o input de cidade
    const cityInput = screen.getByLabelText(/cidade/i);
    expect(cityInput).toBeInTheDocument();

    // encontra o input de estado
    const stateInput = screen.getByLabelText(/estado/i);
    expect(stateInput).toBeInTheDocument();
  });

  it('Renderiza formulário profissional na rota "professional-form"', () => {
    const { history } = renderWithRouterAndReduxWithoutInitialState(<App />);

    act(() => {
      history.push('/professional-form');
    });
    const title = screen.getByRole('heading', {
      name: /informações profissionais/i,
    });
    expect(title).toBeInTheDocument();

    // encontra o input de resumo do currículo
    const resumeInput = screen.getByLabelText(/resumo do currículo/i);
    expect(resumeInput).toBeInTheDocument();

    // encontra o input de cargo
    const roleInput = screen.getByRole('textbox', { name: 'Cargo:' });
    expect(roleInput).toBeInTheDocument();

    // encontra o input de descrição do cargo
    const roleDescriptionInput = screen.getByRole('textbox', {
      name: 'Descrição do cargo:',
    });
    expect(roleDescriptionInput).toBeInTheDocument();
  });

  it('Botão redireciona corretamente para primeiro formulário', async () => {
    renderWithRouterAndReduxWithoutInitialState(<App />);

    const button = screen.getByRole('button', {
      name: /preencher formulário/i,
    });
    act(() => {
      button.click();
    });
    const title = await screen.findByRole('heading', {
      name: /informações pessoais/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('Botão redireciona corretamente para o segundo formulário', async () => {
    const { history } = renderWithRouterAndReduxWithoutInitialState(<App />);

    act(() => {
      history.push('/personal-form');
    });
    const button = screen.getByRole('button', { name: /próximo/i });
    act(() => {
      button.click();
    });
    const title = await screen.findByRole('heading', {
      name: /informações profissionais/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('Botão redireciona corretamente para o resumo das informações', () => {
    const { history } = renderWithRouterAndReduxWithoutInitialState(<App />);

    act(() => {
      history.push('/professional-form');
    });
    const button = screen.getByRole('button', { name: /enviar/i });
    act(() => {
      button.click();
    });
    const title = screen.getByRole('heading', { name: /Dados Enviados/i });
    expect(title).toBeInTheDocument();
  });
});

describe('02 - Implementando o Redux', () => {
  it('Possui a estrutura correta do estado global', () => {
    const { store } = renderWithRouterAndReduxWithoutInitialState(<App />);
    expect(store.getState()).toEqual({
      personalData: {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        uf: '',
      },
      professionalData: {
        resume: '',
        role: '',
        description: '',
      },
    });
  });
});

describe('03 - Salvando as informações', () => {
  it('O primeiro formulário salva no estado global', async () => {
    const { store, history } = renderWithRouterAndReduxWithoutInitialState(
      <App />
    );
    jest.spyOn(store, 'dispatch');
    act(() => {
      history.push('/personal-form');
    });
    const nameInput = await screen.findByLabelText(/nome/i);
    const emailInput = await screen.findByLabelText(/email/i);
    const cpfInput = await screen.findByLabelText(/cpf/i);
    const addressInput = await screen.findByLabelText(/endereço/i);
    const cityInput = await screen.findByLabelText(/cidade/i);
    const stateInput = await screen.findByLabelText(/estado/i);
    const button = await screen.findByRole('button', { name: /próximo/i });

    userEvent.type(nameInput, 'Nome Teste');
    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(cpfInput, '123456789-10');
    userEvent.type(addressInput, 'Rua Teste');
    userEvent.type(cityInput, 'Cidade Teste');
    userEvent.selectOptions(stateInput, 'Amapá');

    act(() => {
      button.click();
    });

    const title = await screen.findByRole('heading', {
      name: /informações profissionais/i,
    });
    expect(title).toBeInTheDocument();

    expect(store.getState().personalData.name).toBe('Nome Teste');
    expect(store.getState().personalData.email).toBe('teste@email.com');
    expect(store.getState().personalData.cpf).toBe('123456789-10');
    expect(store.getState().personalData.address).toBe('Rua Teste');
    expect(store.getState().personalData.city).toBe('Cidade Teste');
    expect(store.getState().personalData.uf).toBe('Amapá');
    expect(store.getState().professionalData).toEqual({
      resume: '',
      role: '',
      description: '',
    });

    // Checando se o dispatch foi chamado
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('O segundo formulário salva no estado global', async () => {
    const { store, history } = renderWithRouterAndReduxWithoutInitialState(
      <App />
    );
    jest.spyOn(store, 'dispatch');

    act(() => {
      history.push('/professional-form');
    });
    const resumeInput = await screen.findByLabelText(/currículo/i);
    const roleInput = await screen.findByLabelText('Cargo:');
    const descriptionInput = await screen.findByLabelText(
      /descrição do cargo/i
    );
    const button = await screen.findByRole('button', { name: /enviar/i });

    userEvent.type(resumeInput, 'Currículo Teste');
    userEvent.type(roleInput, 'Cargo Teste');
    userEvent.type(descriptionInput, 'Descrição Teste');

    act(() => {
      button.click();
    });

    const title = await screen.findByRole('heading', {
      name: /Dados Enviados/i,
    });
    expect(title).toBeInTheDocument();

    expect(store.getState().professionalData).toStrictEqual({
      resume: 'Currículo Teste',
      role: 'Cargo Teste',
      description: 'Descrição Teste',
    });
    expect(store.getState().personalData).toStrictEqual({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    });

    // Checando se o dispatch foi chamado
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});

describe('04 - Renderizando as informações', () => {
  it('Renderiza as informações na tela', async () => {
    const initialState = {
      personalData: {
        name: 'Nome Teste',
        email: 'email@teste.com',
        cpf: '123.456.789-00',
        address: 'Rua Teste',
        city: 'Cidade Teste',
        uf: 'Amapá',
      },
      professionalData: {
        resume: 'Currículo Teste',
        role: 'Cargo Teste',
        description: 'Descrição Teste',
      },
    };

    const { history } = renderWithRouterAndRedux(<App />, {
      initialState,
    });

    act(() => {
      history.push('/form-display');
    });

    const name = await screen.findByText(/nome: nome teste/i);
    const email = await screen.findByText(/email: email@teste.com/i);
    const cpf = await screen.findByText(/cpf: 123.456.789-00/i);
    const address = await screen.findByText(/endereço: rua teste/i);
    const city = await screen.findByText(/cidade: cidade teste/i);
    const uf = await screen.findByText(/estado: amapá/i);
    const resume = await screen.findByText(/currículo: currículo teste/i);
    const role = await screen.findByText(/cargo: cargo teste/i);
    const description = await screen.findByText(
      /descrição do cargo: descrição teste/i
    );

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(cpf).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(uf).toBeInTheDocument();
    expect(resume).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
