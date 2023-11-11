
import React, { useState } from "react";
import './../styles/App.css';

const shoppingItems = {
  male: ["Shirts", "Facial-grooming kits", "Hair styling", "Jeans", "Shoes"],
  female: ["Tops", "Skirts", "Makeup items", "Jewellery", "Sandals"]
};

const App = () => {
  const [items, setItems] = useState(shoppingItems.male)
  return (
    <div>
        {/* Do not remove the main div */}
        <select name="" id="" onChange={e=>setItems(shoppingItems[e.target.value])}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <ul>
          {
            items.map(item=><li>{item}</li>)
          }
        </ul>
    </div>
  )
}

export default App
