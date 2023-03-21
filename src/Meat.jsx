export const Meat = ({name, quantity, price}) => (
    <div className="card-body">
        <p className="card-text"><b>Meat type</b>: {name}</p>
        <p className="card-text"><b>Qty</b>: {quantity}</p>
        <p className="card-text"><b>Price</b>: £{price} per kg</p>
    </div>
);