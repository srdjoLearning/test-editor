import "./Modal.css";
import { MdDeleteForever } from "react-icons/md";

function Modal({ modal, toggleModal, slot, disableItemOnSlot }) {
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>
              {slot.item.toUpperCase()} broj {slot.index}
            </h2>
            <p>Price: $534.33</p>
            <ul>
              <li>Voda 2x</li>
              <li>Jelen 0,5</li>
              <li>Niksicko 0,5</li>
              <li>Rakija 4x</li>
            </ul>
            <MdDeleteForever
              className="clean-table"
              onClick={() => disableItemOnSlot(slot.index)}
            />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
