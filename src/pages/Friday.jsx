/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import Wednesday from "./Wednesday";


// eslint-disable-next-line react/prop-types
const Friday = ({ myStyle }) => {

  const food = [
    {
      id: 1,
      name: "Amala",
      price: 300,
    },
    {
      id: 2,
      name: "Fufu",
      price: 340,
    },
    {
      id: 3,
      name: "Garri",
      price: 200,
     },
    {
      id: 4,
      name: "Wheat",
      price: 100,
    },
  ];

  const carColor = {
    name: "Ford",
    color: "Red"
  }

  const filterFoodPrice= food.filter((price)=> price.price >= 300)
  console.log(filterFoodPrice);

  return (
    <>
      <div style={myStyle}>Friday</div>
      <Wednesday titi={myStyle} carColor={carColor} />
      <div className="flex">
        {food.map((item) => (
          <p key={item.id}>(item.name)</p>
        ))}
      </div>
      <div>
        <h1>Food price above 300</h1>
        {filterFoodPrice.map((item)=> (<h1 key= {item.id}>
          {`Food: ${item.name}, Price: ${item.price}`}
        </h1>))}
      </div>
    </>
  );
};

export default Friday;
