/* eslint-disable no-debugger */
/* eslint-disable max-len */
import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.data.comment || '',
      editing: false,
      stars: props.data.stars || 0,
      ifCommented: props.data.ifCommented,
    };
  }

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  }

  handleOpenEditArea = () => {
    this.setState({
      editing: true,
    });
  }

  handleClickStar = (item) => {
    // debugger;
    this.setState({
      stars: item,
    });
    this.renderStars();
  }

  handleCancelComment = () => {
    this.setState({
      editing: false,
      comment: this.props.data.comment || '',
      stars: this.props.data.stars || 0,
    });
  }

  handleSubmitComment = () => {
    const { id } = this.props.data;
    const { comment, stars } = this.state;

    this.setState({
      editing: false,
      ifCommented: true,
    });

    this.props.onSubmit(id, comment, stars);
  }

  renderEditArea() {
    const { ifCommented } = this.state;
    return (
      <div className="orderItem__commentContainer">
        <textarea onChange={this.handleCommentChange} value={this.state.comment} className="orderItem__comment" />
        {this.renderStars()}
        {
          ifCommented ? (
            <button className="orderItem__btn orderItem__btn--red" onClick={this.handleSubmitComment}>修改</button>
          ) : (
            <button className="orderItem__btn orderItem__btn--red" onClick={this.handleSubmitComment}>提交</button>
          )
        }
        <button className="orderItem__btn orderItem__btn--grey" onClick={this.handleCancelComment}>取消</button>
      </div>
    );
  }

  renderStars() {
    const { stars } = this.state;
    return (
      <div>
        {
          [1, 2, 3, 4, 5].map((item) => {
            const light = stars >= item ? 'orderItem__star--light' : 'orderItem__star--grey';
            return (
              <span key={item} className={light} onClick={this.handleClickStar.bind(this, item)}>★</span>
            );
          })
        }
      </div>

    );
  }

  render() {
    const { product, picture, shop, price } = this.props.data;
    const { ifCommented } = this.state;
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
                <div><button className="orderItem__btn orderItem__btn--grey" onClick={this.handleOpenEditArea}>查看评价</button></div>
              ) : (
                <div><button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenEditArea}>评价</button></div>
              )
            }
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    );
  }
}

export default OrderItem;
