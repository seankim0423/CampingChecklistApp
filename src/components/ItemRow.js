import firebase from "../firebase";

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
    <li key={props.item.key} className="rowItem">
      <label htmlFor="checkbox">Checked:</label>
      <input
        id="checkbox"
        type="checkbox"
        checked={props.item.checked}
        onChange={() => handleCheck(props.item.key)}
      />

      <p>Name: {props.item.name}</p>
      <p>Quantity: {props.item.quantity}</p>
      <button onClick={() => handleDelete(props.item.key)}>Delete</button>
    </li>
  );
};
export default ItemRow;
