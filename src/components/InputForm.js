import { useState } from "react";
import firebase from "../firebase";

const InputForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemCategory, setItemCategory] = useState("Select");

  const handleChange = (e) => {
    // setUserInput(e.target.value);
    if (e.target.id === "newItemName") {
      setItemName(e.target.value);
    } else if (e.target.id === "newItemCategory") {
      setItemCategory(e.target.value);
    } else if (e.target.id === "newItemQuantity") {
      setItemQty(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName !== "" && itemQty !== "" && itemCategory !== "Select") {
      // We create a refernce to our Firebase database:
      const dbRef = firebase.database().ref();

      const userInputItem = {
        name: itemName,
        quantity: itemQty,
        category: itemCategory,
        checked: false,
      };

      dbRef.push(userInputItem);

      setItemName("");
      setItemQty("");
      setItemCategory("Select");
    } else {
      alert("Missing input");
    }
  };

  return (
    <div className="formContainer">
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Camping Checklist</h1>
        <label htmlFor="newItemName">Item Name: </label>
        <input
          type="text"
          id="newItemName"
          onChange={handleChange}
          value={itemName}
        />
        <label htmlFor="newItemQuantity">Quantity: </label>
        <input
          type="text"
          id="newItemQuantity"
          onChange={handleChange}
          value={itemQty}
        />
        <label htmlFor="newItemCategory">Category: </label>

        <select
          name="newItemCategory"
          id="newItemCategory"
          onChange={handleChange}
          value={itemCategory}
        >
          <option disabled>Select</option>
          <option value="Camping Gear">Camping Gear</option>
          <option value="Food">Food</option>
          <option value="Clothing">Clothing</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputForm;
