import React, { Component } from 'react';
import api from '../../Services/api';
import './product.css';

export default class Product extends Component {
  state = {
    product: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="container">
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>

          <p>
            URL: <a href={product.url} target="_blank" rel="noopener noreferrer">{product.url}</a>
          </p>
        </div>
      </div>
    );
  }
}
