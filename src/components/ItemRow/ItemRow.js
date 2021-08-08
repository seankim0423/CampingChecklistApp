import firebase from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";

const ItemRow = (props) => {
  // destructure props
  const { name, quantity, key, checked } = props.item;

  // function to remove item from the Firebase
  const handleDelete = (keyOfItemToDelete) => {
    const dbRef = firebase.database().ref();
    dbRef.child(keyOfItemToDelete).remove();
  };

  // function to update the checked value from the Firebase
  const handleCheck = (keyOfItemToCheck) => {
    const dbRef = firebase.database().ref();
    dbRef.child(keyOfItemToCheck).update({
      checked: !props.item.checked,
    });
  };

  return (
    <li className="rowItem">
      {/* add checkbox icons for checked */}
      <button
        className="iconButton checkButton changeBlue"
        onClick={() => handleCheck(key)}
      >
        {props.item.checked ? (
          <div>
            <span className="sr-only">Checked checkbox</span>
            <FontAwesomeIcon icon={faCheckSquare} aria-hidden={true} />{" "}
          </div>
        ) : (
          <div>
            <span className="sr-only">Unchecked checkbox</span>
            <FontAwesomeIcon icon={faSquare} aria-hidden={true} />{" "}
          </div>
        )}
      </button>

      {/* add checkedItem class to add strike through the name and quantity if checked==true */}
      <p className={`itemNameTextBox ${checked ? "checkedItem" : ""}`}>
        {name}
      </p>
      <p className={`itemQuantityTextBox ${checked ? "checkedItem" : ""}`}>
        {quantity}
      </p>

      {/* add delete icon button to call handleDelete function onClick */}
      <button
        className="iconButton deleteButton changeRed"
        onClick={() => handleDelete(key)}
      >
        <div>
          <span className="sr-only">Delete</span>
          <FontAwesomeIcon icon={faTrashAlt} aria-hidden={true} />
        </div>
      </button>
    </li>
  );
};
export default ItemRow;
