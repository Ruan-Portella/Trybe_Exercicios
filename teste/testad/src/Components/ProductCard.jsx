import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SaveCart } from '../services/SaveCartApi';

export default class ProductCard extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <ul>
        {
          productsList.map((product) => (
            <li key={ product.id } data-testid="product">
              <h2>{product.title}</h2>
              <Link
                to={ `/detailsProduct/${product.id}` }
                data-testid="product-detail-link"
              >
                <img src={ product.thumbnail } alt={ product.title } />

              </Link>
              <p>{`Preço: R$ ${product.price}`}</p>
              <button
                onClick={ () => SaveCart(product) }
                id={ product.id }
                data-testid="product-add-to-cart"
              >
                Adicionar Ao Carrinho
              </button>
            </li>
          ))
        }
      </ul>

    );
  }
}

ProductCard.propTypes = {
  productList: PropTypes.shape,
}.isRequired;
