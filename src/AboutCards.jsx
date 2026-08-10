function AboutCards() {
  const carts = [
    {
      id: 1,
      name: "Rolex",
      price: 200,
      discription: "the last Rolex available",
    },
    {
      id: 2,
      name: "Hublot",
      price: 300,
      discription: "the last Hublot available",
    },
    {
      id: 3,
      name: "Rolex",
      price: 600,
      discription: "the last Rolex available",
    },
  ];

  return (
    <>
      <h1>This is our cart</h1>

      {carts.map((cart) => {
        return(
            <div key={cart.id}>
            <h1 className="text-white">Name: {cart.name}</h1>
            <p>Pice: {cart.price}</p>
            <p>Discription: {cart.discription}</p>

        </div>
        )
      })}
    </>
  );
}

export default AboutCards;
