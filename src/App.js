import { useState, useEffect } from "react";
import firebase from "./firebase";
import InputForm from "./components/InputForm";
import ListContainer from "./components/ListContainer";

import "./styles/styles.scss";

const App = () => {
  const [checkList, setCheckList] = useState([{}]);
  const [loadedData, setLoadedData] = useState(false);

  // This is the useEffect for my Firebase value listener
  useEffect(() => {
    // We go get an object that REFERENCES our configured database:
    const dbRef = firebase.database().ref();

    // We set up a listener for data in our firebase, which will fire when that data appears (ie. the page loads) or those VALUES change (this is often referred to as a SUBSCRIPTION to a third-party data source):
    dbRef.on("value", (snapshot) => {
      const myData = snapshot.val();
      const newArray = [];

      for (let propertyName in myData) {
        const itemObject = {
          key: propertyName,
          name: myData[propertyName]["name"],
          quantity: myData[propertyName]["quantity"],
          category: myData[propertyName]["category"],
          checked: myData[propertyName]["checked"],
        };
        newArray.push(itemObject);
      }
      setCheckList(newArray);
      setLoadedData(true);
    });
  }, []);
  // End of userEffect

  return loadedData ? (
    <div className="App wrapper">
      <header></header>
      <main>
        <h1>Camping Checklist</h1>
        <InputForm />
        <ListContainer listArray={checkList} />
      </main>
      <footer>Made at Juno</footer>
    </div>
  ) : (
    <h2>Loading</h2>
  );
};

export default App;

// MVP: Create a checklist for camping items, allowing users to add and delete items onto the list along with quantities and categories, to be stored in Firebase

// Stretch goals:
// 1. Allow editing the items on the list
// 2. Using categories. Food, camping gear, etc., sort and display items in separate groups.
// 3. Add a dropdown menu to filter the items based on their categories
// 4. Add a datalist to show list of items in a dropdown as the user types in the item field.
// 5. Import FontAwesome to replace the delete button with an icon.

// Display Firebase checklist items and their quantities and cateogories on the page
// Set up an empty state to hold the list of items
// Get the item array from Firebase
// Connect to Firebase only once when our component mounts using useEffect.
// Store the retrieved data in a state
// Display the list of items on the page

// Let the user add items to the database along with quantity and category
// Add a form with a text input for: item name, quantity, and category (dropdown?)
// Set up 3 empty states, 1 for item name, 1 for qty, and 1 for category.
// Store the 3 input fields into the states as the user types them in.
// On submit, verify that all 3 states are filled in, and then push them into Firebase

// Add a button that lets the user delete items from the database
// Add a delete icon next to each item in our JSX
// onClick calls a function that will remove the item from the firebase.
