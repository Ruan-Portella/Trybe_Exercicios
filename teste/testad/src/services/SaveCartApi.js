export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

export const getSavedCart = () => {
  const cartProducts = localStorage.getItem('ProductsQuantity');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

export const QuantityCart = () => {
  const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  const Quantity = cartProducts.reduce((acc, product) => {
    const Product = cartProducts.filter((produto) => (produto.id === product.id));
    acc = [...acc, {
      ProductCart: Product[0],
      QuantityCart: Product.length,
    }];
    return acc;
  }, []);
  const ArrayToString = Quantity.map((value) => JSON.stringify(value));
  const RemoveDuplicate = ArrayToString.filter((value, index) => (
    ArrayToString.indexOf(value) === index)).map((value) => JSON.parse(value));
  localStorage.setItem('ProductsQuantity', JSON.stringify(RemoveDuplicate));
};

export const SaveCart = (product) => {
  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, product];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  QuantityCart();
};

export const removeCartID = (products) => {
  const car = JSON.parse(localStorage.getItem('cartProducts'));
  const filter = car.map(({ id }) => id);
  const removedItem = filter.lastIndexOf(products.id);
  const newArrCarr = car.filter((_arr, index) => index !== removedItem);
  localStorage.setItem('cartProducts', JSON.stringify(newArrCarr));
  QuantityCart();
};

export const removeCartIDButton = (id) => {
  const cartProducts = [...getSavedCartIDs()];
  const novo = cartProducts.filter((product) => product.id !== id);
  localStorage.setItem('cartProducts', JSON.stringify(novo));
  QuantityCart();
};
