import { useState } from "react";
import firebase from "../../firebase";

const InputForm = () => {
  // set states for the 3 user input fields: itemName, itemQty, itemCategory
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  // Function to handle change. Runs the setState methods depending on which userinput field it is.
  const handleChange = (e) => {
    if (e.target.id === "newItemName") {
      setItemName(e.target.value);
    } else if (e.target.id === "newItemCategory") {
      setItemCategory(e.target.value);
    } else if (e.target.id === "newItemQuantity") {
      setItemQty(e.target.value);
    }
  };

  // Function to handle userinput submit. Check if all three fields have been populated.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName !== "" && itemQty !== "" && itemCategory !== "placeholder") {
      // a refernce to our Firebase database:
      const dbRef = firebase.database().ref();

      const userInputItem = {
        name: itemName,
        quantity: itemQty,
        category: itemCategory,
        checked: false,
      };

      // push the new item object to the Firebase.
      dbRef.push(userInputItem);

      // Return the user input fields to blank.
      setItemName("");
      setItemQty("");
      setItemCategory("placeholder");
    } else {
      // Alert if not all fields are filled in.
      alert("Missing input");
    }
  };

  return (
    // Display the form
    <section className="formContainer">
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
          required
        >
          <option disabled value="">
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
          required
        />

        <label className="sr-only" htmlFor="newItemQuantity">
          Quantity
        </label>
        <input
          type="number"
          id="newItemQuantity"
          className="newItemQuantity"
          onChange={handleChange}
          value={itemQty}
          placeholder="Quantity"
          maxLength="3"
          required
        />

        <button className="addButton changeBlue" type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default InputForm;
