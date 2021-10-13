import CategoryContainer from "../CategoryContainer/CategoryContainer";
import {useState, useEffect} from "react";

// import "./ListContainer.css";

const ListContainer = (props) => {

  const [groupedItems, setGroupedItems] = useState({});

  // Generate a new object of the list items sorted based on categories

  useEffect(() => {
    const groupList = props.listArray.reduce((objByCategory, obj) => {
      objByCategory[obj["category"]] = (objByCategory[obj["category"]] || []).concat(obj)
      return objByCategory
    }, {});
    setGroupedItems(groupList);

  },[props.listArray])

  return (
    <section>
      <ul className="listContainer">
        {/* display Category containers to store list of items per category*/}
        {Object.keys(groupedItems).map((obj, i) => {
          return (
            <CategoryContainer
              key={`category${i}`}
              category={obj}
              itemGroupArray={groupedItems[obj]}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default ListContainer;
