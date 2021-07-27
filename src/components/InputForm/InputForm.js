import { useState } from "react";
import firebase from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const InputForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemCategory, setItemCategory] = useState("placeholder");

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
      setItemCategory("placeholder");
    } else {
      alert("Missing input");
    }
  };

  return (
    <div className="formContainer">
      <form className="newItemForm" action="submit" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="newItemName">
          Item Name
        </label>
        <input
          type="text"
          id="newItemName"
          className="newItemName"
          onChange={handleChange}
          value={itemName}
          placeholder="Item Name"
          maxlength="20"
        />
        <label className="sr-only" htmlFor="newItemQuantity">
          Quantity
        </label>
        <input
          type="text"
          id="newItemQuantity"
          className="newItemQuantity"
          onChange={handleChange}
          value={itemQty}
          placeholder="Quantity"
        />
        <label htmlFor="newItemCategory" className="sr-only">
          Category:
        </label>
        <select
          name="newItemCategory"
          id="newItemCategory"
          onChange={handleChange}
          value={itemCategory}
        >
          <option disabled value="placeholder">
            Select Category
          </option>
          <option value="Camping Gear">Camping Gear</option>
          <option value="Food">Food</option>
          <option value="Clothing">Clothing</option>
        </select>

        <button className="iconButton changeBlue" type="submit">
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </form>
    </div>
  );
};

export default InputForm;
