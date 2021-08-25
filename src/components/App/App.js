import { useState, useEffect } from "react";
import firebase from "../../firebase";
import InputForm from "../InputForm/InputForm";
import ListContainer from "../ListContainer/ListContainer";
import FilterContainer from "../FilterContainer/FilterContainer";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const App = () => {
  // States for the checklist array, filteredlist array, and a boolean state for when the data is loaded.
  const [checkList, setCheckList] = useState([{}]);
  const [filteredList, setFilteredList] = useState([{}]);
  const [loadedData, setLoadedData] = useState(false);

  // useEffect for the Firebase value listener
  useEffect(() => {
    // Firebase ref.
    const dbRef = firebase.database().ref();

    // Set the new state from the imported data on the page load, and when the values change. (subscription to the data source)
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
      // copy the checklist to the filtered list initially for the initial display
      setFilteredList(newArray);
      // set loadedData true.
      setLoadedData(true);
    });
  }, []);
  // End of userEffect

  // function to filter the checklist based on the parameter received from FilterContainer.
  // If checked==true, filter the list to show only the items with the property checked==true
  // If checked==false, return the filteredList to show every item.
  const filterList = (checked) => {
    if (checked === true) {
      const copyOfCheckList = [...checkList];
      const filteredList = copyOfCheckList.filter((checkListObj) => {
        return checkListObj.checked === false;
      });
      setFilteredList(filteredList);
    } else {
      setFilteredList(checkList);
    }
  };

  return loadedData ? (
    // If loadedData == true, then display the components.
    <div className="App wrapper">
      <header>
        <h1>Camping Checklist</h1>
      </header>

      <main>
        <InputForm />
        <FilterContainer filterList={filterList} />
        <ListContainer listArray={filteredList} />
      </main>

      <footer>
        <p>©2021 Sean Kim</p>
      </footer>
    </div>
  ) : (
    // If loadedData == false, display the loading animation instead.
    <LoadingAnimation />
  );
};

export default App;
