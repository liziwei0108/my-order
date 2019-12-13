import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {
  render() {
    const { product, picture, shop, price, ifCommented } = this.props.data;
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer">
          <img className="orderItem__pic" src={picture} alt="没加载" />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{product}</div>
          <div className="orderItem__shop">{shop}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">{price}</div>
            {
              ifCommented ? (
                <div><button className="orderItem__btn orderItem__btn--grey">已评价</button></div>
              ) : (
                <div><button className="orderItem__btn orderItem__btn--red">评价</button></div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
