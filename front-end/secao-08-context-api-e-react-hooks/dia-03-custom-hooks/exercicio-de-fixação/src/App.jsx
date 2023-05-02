import Swal from 'sweetalert2';
import useFormInput from './hooks/useFormInput';
import './style.css';

function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire(
      'Formulário enviado',
      JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      }),
      'success'
    );
firstName.clear();
lastName.clear();
email.clear();
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input value={firstName.value} onChange={firstName.onChange} />
        </label>
        <label>
          Last name:
          <input value={lastName.value} onChange={lastName.onChange} />
        </label>
        <label>
          E-mail:
          <input value={email.value} onChange={email.onChange} />
        </label>
        <button type="submit">Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;
