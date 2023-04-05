const INITIAL_STATE = {
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
};

const globalState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'professionalData':
    return {
      ...state,
      professionalData: {
        resume: action.payload.value.resume,
        role: action.payload.value.role,
        description: action.payload.value.description,
      },
    };
  case 'personalData':
    return {
      ...state,
      personalData: {
        name: action.payload.value.name,
        email: action.payload.value.email,
        cpf: action.payload.value.cpf,
        address: action.payload.value.address,
        city: action.payload.value.city,
        uf: action.payload.value.uf,
      },
    };
  default:
    return state;
  }
};

export default globalState;
