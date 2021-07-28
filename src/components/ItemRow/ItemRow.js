import firebase from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";

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
  const { name, quantity, key, checked } = props.item;

  return (
    <li className="rowItem">
      {props.item.checked ? (
        <button
          className="iconButton checkButton changeBlue"
          onClick={() => handleCheck(key)}
        >
          <FontAwesomeIcon icon={faCheckSquare} />
        </button>
      ) : (
        <button
          className="iconButton checkButton changeBlue"
          onClick={() => handleCheck(key)}
        >
          <FontAwesomeIcon icon={faSquare} />
        </button>
      )}

      <p className={`itemNameTextBox ${checked ? "checkedItem" : ""}`}>
        {name}
      </p>
      <p className={`itemQuantityTextBox ${checked ? "checkedItem" : ""}`}>
        {quantity}
      </p>
      <button
        className="iconButton deleteButton changeRed"
        onClick={() => handleDelete(key)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};
export default ItemRow;
