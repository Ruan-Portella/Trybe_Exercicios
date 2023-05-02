import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

function clear() {
    setValue('');
  }

  return {
    value: value,
    onChange: handleChange,
    clear,
  };
}

export default useFormInput;
