export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Cellphone",
      price: 999,
    },
    {
      id: 2,
      name: "Mouse",
      price: 299,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 599,
    },
    { id: 4, name: "Mousepad", price: 299 },
    { id: 5, name: "Monitor", price: 870 },
  ];

  const productElements = products.map((product) => {
    return (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>Our Product</h2>
      {productElements}
    </div>
  );
};
