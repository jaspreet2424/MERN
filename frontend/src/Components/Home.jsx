import React from "react";
import Navbar from "./Navbar";

function Home({ title }) {
  const name = "Mohal Lal";
  const age = 65;

  const product = {
    name: "Kissan Jam",
    price: 450,
    category: "Grocery",
  };

  const array = [10, 20, 30, 40, 50];

  const add = (a , b) => {
    console.log("The sum of a and b is " , (a + b));
  }

  //To use JavaScript in jsx use {} to write javascript
  //To apply conditional statement in jsx we use Ternary Operator (? = if , : = else)

  return (
    <>
      <Navbar title={title}></Navbar>
      <h1 className="my-5 text-danger">This is the Home Page title {title}</h1>
      <h1>Name of person is : {name}</h1>
      <h1>Age of person is : {age > 18 ? "Adult" : "Not a adult"}</h1>

      <button onClick={()=> add(40 , 50)}>Click Here</button>

      <table className="table  table-danger table-striped mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
          </tr>
        </thead>
      </table>

      <div>
        {array.map((a) => {
          return <h1 key={a}>{a}</h1>;
        })}
      </div>
    </>
  );
}

export default Home;
