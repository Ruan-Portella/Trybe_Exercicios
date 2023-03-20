import PropTypes from 'prop-types';
import React from 'react';
import { getCategories } from '../services/api';

export default class FilterCategories extends React.Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { FetchCategory } = this.props;
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <li key={ category.id }>
              <label>
                <input
                  type="radio"
                  id={ category.id }
                  name="category"
                  data-testid="category"
                  onClick={ FetchCategory }
                />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

FilterCategories.propTypes = {
  FetchCategory: PropTypes.func.isRequired,
};
