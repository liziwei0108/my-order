import React, { Component } from 'react';
import OrderItem from '../OrderItem';

const data = [
  {
    id: 1,
    shop: '随缘居',
    picture: '../../../public/pics/baixiangguo.jpg',
    product: '百香果（冷饮）1扎',
    price: 19.9,
    ifCommented: true,
  },
  {
    id: 2,
    shop: '王一博',
    picture: '../../../public/pics/baixiangguo.jpg',
    product: '摩托姐姐一个',
    price: 80,
    ifCommented: false,
  },
  {
    id: 3,
    shop: '肖战',
    picture: '../../../public/pics/baixiangguo.jpg',
    product: '小飞侠一个',
    price: 40,
    ifCommented: false,

  },
  {
    id: 4,
    shop: '朱一龙',
    picture: '../../../public/pics/baixiangguo.jpg',
    product: '小笼包一只',
    price: 100,
    ifCommented: true,
  },
];

class OrderList extends Component {
  render() {
    return (
      <div>
        {
          data.map((item) => {
            return <OrderItem key={item.id} data={item} />;
          })
        }
      </div>
    );
  }
}

export default OrderList;
