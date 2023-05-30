const ProductItem = ({ food }) => {
  return (
    <div className="card">
      <div>
        {food.name} it cost {food.price}K.D
      </div>
      <div>
        <img
          src={food.image}
          className="menu"
          style={{ borderRadius: "30%" }}
        />
      </div>
    </div>
  );
};

export default ProductItem;
