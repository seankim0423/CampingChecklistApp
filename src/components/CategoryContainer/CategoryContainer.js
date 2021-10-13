import ItemRow from "../ItemRow/ItemRow";
import {useState, useEffect} from "react";

// display items per category

const CategoryContainer = (props) => {

  const {itemGroupArray, category} = props;

  const [sortedItems, setSortedItems] = useState([])

  // sort the array of items by name alphabetically
  useEffect(() => {
    const sortedList = [...itemGroupArray].sort((a,b) => {
      let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();

      if (fa <fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
    setSortedItems(sortedList)
  },[itemGroupArray])

  return (
    <li key={category} className="categoryContainer">
      <h2>{category}</h2>
      <ul>
        {sortedItems.map((item, i) => {
          return <ItemRow key={`item${i}`} item={item} />;
        })}
      </ul>
    </li>
  );
};

export default CategoryContainer;
