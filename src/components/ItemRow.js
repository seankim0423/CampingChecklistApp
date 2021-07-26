import firebase from "../firebase";
// import CheckBox from "./CheckBox";

const ItemRow = (props) => {
  const handleDelete = (keyOfItemToDelete) => {
    const dbRef = firebase.database().ref();
    dbRef.child(keyOfItemToDelete).remove();
  };

  const handleCheck = (keyOfItemToCheck) => {
    const dbRef = firebase.database().ref();
    dbRef.child(keyOfItemToCheck).update({
      checked: !props.item.checked,
    });
  };

  return (
    <li className="rowItem">
      <label>
        Checked:
        <input
          type="checkbox"
          checked={props.item.checked}
          onChange={() => handleCheck(props.item.key)}
        />
      </label>

      <p>Name: {props.item.name}</p>
      <p>Quantity: {props.item.quantity}</p>
      <button onClick={() => handleDelete(props.item.key)}>Delete</button>
    </li>
  );
};
export default ItemRow;
