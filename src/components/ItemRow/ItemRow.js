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

  return (
    <li className="rowItem">
      {props.item.checked ? (
        <button
          className="iconButton checkButton"
          onClick={() => handleCheck(props.item.key)}
        >
          <FontAwesomeIcon icon={faCheckSquare} />
        </button>
      ) : (
        <button
          className="iconButton checkButton"
          onClick={() => handleCheck(props.item.key)}
        >
          <FontAwesomeIcon icon={faSquare} />
        </button>
      )}

      <p>{props.item.name}</p>
      <p>Qty.: {props.item.quantity}</p>
      <button
        className="iconButton deleteButton"
        onClick={() => handleDelete(props.item.key)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};
export default ItemRow;
