import ItemRow from "./ItemRow";

const CategoryContainer = (props) => {
  return (
    <li key={props.category} className="categoryContainer">
      <h3>{props.category}</h3>
      <ul>
        {props.itemGroupArray.map((item, i) => {
          return <ItemRow key={`item${i}`} item={item} />;
        })}
      </ul>
    </li>
  );
};

export default CategoryContainer;
