import ItemRow from "../ItemRow/ItemRow";

const CategoryContainer = (props) => {
  return (
    <li key={props.category} className="categoryContainer">
      <h2>{props.category}</h2>
      <ul>
        {props.itemGroupArray.map((item, i) => {
          return <ItemRow key={`item${i}`} item={item} />;
        })}
      </ul>
    </li>
  );
};

export default CategoryContainer;
