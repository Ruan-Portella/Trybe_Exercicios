import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { SaveCart } from '../services/SaveCartApi';

export default class DetailsProduct extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
    attributes: [],
    id: '',
    data: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({ ...data, data });
    console.log(data);
  }

  render() {
    const { title, thumbnail, price, attributes, id, data } = this.state;
    return (
      <section>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-price">{price}</p>
        <ul>
          {
            attributes.map((information) => (
              <li key={ information.value_name }>
                <p>{ information.name }</p>
                <p>{ information.value_name }</p>
              </li>
            ))
          }
          <button
            onClick={ () => SaveCart(data) }
            id={ id }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar Ao Carrinho
          </button>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
        </ul>
      </section>
    );
  }
}

DetailsProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
