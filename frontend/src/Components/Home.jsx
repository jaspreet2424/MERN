import React from "react";

function Home({ Add }) {
  let age = 35;

  if (age > 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  //(condition) ?(if) :(else) = terniary operator

  const array = ["Mohan", "Rohan", "Abdul", "Sachin"];

  return (
    <div>
      <h1>This is the Home component</h1>
      <button onClick={() => Add(50, 40)}>Click here</button>

      <h1>{age > 18 ? "Adult" : "Not adult"}</h1>

      <div>
        {array.map((a) => {
          return <p className="mx-5 fs-2">{a}</p>;
        })}
      </div>
    </div>
  );
}

export default Home;
