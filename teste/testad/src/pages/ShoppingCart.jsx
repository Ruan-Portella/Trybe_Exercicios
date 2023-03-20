import React from 'react';
import { getSavedCart, removeCartID,
  removeCartIDButton, SaveCart } from '../services/SaveCartApi';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      productsList: [],
    };
  }

  componentDidMount() {
    const novaIguacu = getSavedCart();
    this.setState({ productsList: novaIguacu });
  }

  RemoveCart = (product) => {
    if (product.QuantityCart === 1) {
      return;
    }
    removeCartID(product.ProductCart);
    this.componentDidMount();
  };

  RemoveCartButtom = (product) => {
    removeCartIDButton(product.ProductCart.id);
    this.componentDidMount();
  };

  SaveCarts = (product) => {
    SaveCart(product);
    this.componentDidMount();
  };

  render() {
    const { productsList } = this.state;
    return (
      <section>
        <ul data-testid="product-add-to-cart">
          {
            productsList.length <= 0 ? (
              <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
              : (
                productsList.map((product) => (
                  <li key={ product.ProductCart.id }>
                    <h2 data-testid="shopping-cart-product-name">
                      { product.ProductCart.title }
                    </h2>
                    <img
                      src={ product.ProductCart.thumbnail }
                      alt={ product.ProductCart.title }
                    />
                    <p>{ product.ProductCart.price }</p>
                    <button
                      data-testid="product-decrease-quantity"
                      onClick={ () => this.RemoveCart(product) }
                    >
                      -
                    </button>
                    <p data-testid="shopping-cart-product-quantity">
                      { product.QuantityCart }
                    </p>
                    <button
                      data-testid="product-increase-quantity"
                      id={ product.ProductCart.id }
                      onClick={ () => this.SaveCarts(product.ProductCart) }
                    >
                      +
                    </button>
                    <button
                      onClick={ () => this.RemoveCartButtom(product) }
                      data-testid="remove-product"
                    >
                      Remover

                    </button>
                  </li>
                )))
          }
        </ul>
      </section>
    );
  }
}

export default ShoppingCart;
