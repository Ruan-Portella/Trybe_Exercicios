import React from 'react';
import { Link } from 'react-router-dom';
import FilterCategories from '../Components/FilterCategories';
import { getProductByQuery, getProductByCategory,
  getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../Components/ProductCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productsList: [],
      CategoryId: '',
      Category: false,
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      search: target.value,
    });
  };

  searchProducts = async () => {
    const { search, CategoryId, Category } = this.state;
    if (Category) {
      const
        productsListSearched = await getProductsFromCategoryAndQuery(CategoryId, search);
      this.setState({ productsList: productsListSearched });
    } else {
      const products = await getProductByQuery(search);
      this.setState({
        productsList: products,
      });
    }
    this.setState({ Category: false });
  };

  FetchCategory = async ({ target }) => {
    const categoriesProduct = await getProductByCategory(target.id);
    this.setState({ productsList: categoriesProduct,
      CategoryId: target.id,
      Category: true });
  };

  render() {
    const { search, productsList } = this.state;
    return (
      <>
        <label>
          <input
            data-testid="query-input"
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleInputChange }
          />
          <button
            data-testid="query-button"
            onClick={ this.searchProducts }
          >
            Buscar
          </button>
        </label>
        {!search && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        <aside><FilterCategories FetchCategory={ this.FetchCategory } /></aside>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button" />
        {productsList.length > 0
          ? <ProductCard productsList={ productsList } />
          : <p>Nenhum produto foi encontrado</p>}
      </>
    );
  }
}
export default Home;
