export const Meat = ({ name, inStock, price }) => (
  <div className="card-body">
    <p className="card-text">
      <b>Meat type</b>: {name}
    </p>
    <p className="card-text">
      <b>In stock</b>: {inStock}
    </p>
    <p className="card-text">
      <b>Price</b>: £{price} per kg
    </p>
  </div>
);
