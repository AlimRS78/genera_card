import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";
import CardForm from "./components/CardForm.jsx";
import { citiesList } from "../models/data.jsx";

function App() {
  const [cities, setCities] = useState(citiesList);
  const addCity = (city) => {
    setCities([...cities, city])
  }

  return (
    <>
      <div id="CardForm">
        <CardForm addCity={addCity}></CardForm>
      </div>
      <div className="cards">
        {cities.map((city)=> {
          return (
            <Card
              title={city.title}
              url={city.url}
              description={city.description}
              isVisited={city.isVisited}
            ></Card>
          )
        })}
      </div>
    </>
  );
}

export default App;
