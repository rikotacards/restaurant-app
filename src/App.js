import React from "react";
import "./App.css";
import { Restaurant } from "components/pages/Restaurant";
export const BasketContext = React.createContext(null);

const App = () => {
  
  return (
    <div className="App">
      <BasketContext.Provider value={[]}>
        <Restaurant />
      </BasketContext.Provider>
    </div>
  );
};

export default App;
