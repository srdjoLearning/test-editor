import { FaBell } from "react-icons/fa6";
import "./styles.css";

function GridItem({
  active,
  activateTableSlot,
  item,
  index,
  orientation,
  selectedIndex,
  setSelectedIndex,
  selectedItem,
  setSelectedItem,
  setOrientation,
  numberOfSlots,
}) {
  return (
    <>
      <div
        className="grid-item"
        onClick={
          active
            ? () => {
                //activeSlotClick();
                setOrientation(orientation);
                setSelectedIndex();
                setSelectedItem(item);
                console.log(
                  "PATH: ",
                  `src/assets/${item}${
                    item !== "table" && item !== "desk" ? orientation : "1"
                  }-transparent.png`
                );
              }
            : () => {
                if (selectedItem) {
                  activateTableSlot();
                }
                setSelectedIndex();
              }
        }
        style={
          selectedIndex === index
            ? {
                border: "2px solid hsla(71, 73%, 31%, 0.9)",
                gridColumn: `span ${numberOfSlots}`,
                minWidth:
                  numberOfSlots > 1 ? `${numberOfSlots * 60 + 5}px` : "",
              }
            : {}
        }
      >
        {active && item === "table" && <FaBell className="bell-icon" />}
        {active && (
          <img
            src={`src/assets/${item}${
              item !== "table" && item !== "desk" ? orientation : "1"
            }-transparent.png`}
            alt="table"
          />
        )}

        <p style={{ fontSize: "10px" }}>{active || index}</p>
      </div>
    </>
  );
}

export default GridItem;
