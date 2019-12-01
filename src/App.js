import React from "react";
import "./App.css";
import { Restaurant } from "components/pages/Restaurant";
export const BasketContext = React.createContext([]);

const App = () => {
  const [basketItems, getBasketItems] = React.useState([]);
  const handleUpdate = (items) => {
    basketItems.push(items)
    getBasketItems(basketItems);
  }
  return (
    <div className="App">
      <BasketContext.Provider value={{items:basketItems, handleUpdate}}>
        <Restaurant />
      </BasketContext.Provider>
    </div>
  );
};

export default App;
