import { useState } from "react";
import firebase from "../../firebase";

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
        <label htmlFor="newItemCategory" className="sr-only">
          Category:
        </label>
        <select
          name="newItemCategory"
          id="newItemCategory"
          className="newItemCategory"
          onChange={handleChange}
          value={itemCategory}
        >
          <option disabled value="placeholder">
            Select Category
          </option>
          <option value="Camping Gear">Camping Gear</option>
          <option value="Food">Food</option>
          <option value="Clothing">Clothing</option>
          <option value="Etc">Etc.</option>
        </select>
        <label className="sr-only" htmlFor="newItemName">
          Item Name
        </label>
        <input
          type="text"
          id="newItemName"
          className="newItemName"
          onChange={handleChange}
          value={itemName}
          placeholder="Item"
          maxLength="15"
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
          maxLength="3"
        />

        {/* <button className="iconButton addButton changeBlue" type="submit"> */}
        <button className="addButton changeBlue" type="submit">
          {/* <FontAwesomeIcon icon={faPlusSquare} /> */}
          ADD
        </button>
      </form>
    </div>
  );
};

export default InputForm;
