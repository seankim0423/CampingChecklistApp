import ItemRow from "./ItemRow";

const CategoryContainer = (props) => {
  return (
    <li className="categoryContainer">
      <ul>
        <h3>{props.category}</h3>
        {props.itemGroupArray.map((item) => {
          return <ItemRow key={item.key} item={item} />;
        })}
      </ul>
    </li>
  );
};

export default CategoryContainer;
