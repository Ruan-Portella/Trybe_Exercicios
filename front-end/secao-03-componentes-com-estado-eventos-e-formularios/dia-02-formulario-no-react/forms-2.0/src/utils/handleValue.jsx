// src/utils/handleValue.js
export default function handleValue(name, value) {
    switch (name) {
    case 'name':
      return value.toUpperCase();
    case 'address':
      return value.replace(/[^\w\s]/g, '');
    default:
      return value;
    }
  }