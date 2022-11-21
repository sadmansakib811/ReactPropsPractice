import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgUrl}
        alt={contacts[0].alt}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgUrl}
        alt={contacts[0].alt}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <p>
        dui style ei likhe dekhano hoise. uppore array use kore card theke data
        ansi r nicher tai props theke kono array use na korei data ansi
      </p>
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        alt="sadman image"
        tel="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </div>
  );
}

export default App;
