import React from 'react'

export function ShopItemFunc(props) {
  const data = props.item;
  return (
    <div className="main-content">
      <h2>{data.brand}</h2>
      <h1>{data.title}</h1>
      <h3>{data.description}</h3>
      <div className="description">{data.descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{data.currence}{(data.price).toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}