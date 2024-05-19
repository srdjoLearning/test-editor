import { useState, useEffect, useRef } from "react";
import GridItem from "../grid-item/GridItem";

function DynamicGrid({
  column,
  row,
  selectedItem,
  orientation,
  selectedIndex,
  setSelectedIndex,
  setSelectedItem,
  setOrientation,
}) {
  const [allSlots, setAllSlots] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      console.log("KLIK BILO GDJE");
      if (gridRef.current && !gridRef.current.contains(event.target)) {
        console.log("KLIK IZVAN");
        // Get all elements at the click point
        const elementsAtPoint = document.elementsFromPoint(
          event.clientX,
          event.clientY
        );

        // Check if there are no other elements at the click point
        const isOnlyBodyAtPoint = elementsAtPoint.length === 4;
        console.log("ELEMENTI ISPOD:", elementsAtPoint);

        // If no other elements are present at the click point
        if (isOnlyBodyAtPoint) {
          setSelectedIndex(null);
          setSelectedItem("");
          setOrientation(1);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [gridRef]);

  useEffect(() => {
    setAllSlots(
      [...Array(column * row)].map((_, index) => {
        return {
          index: index,
          activeTable: false,
          item: "",
          orientation: 1,
          numberOfSlots: 1,
          reonColor: selectedIndex === index ? "yellow" : "",
        };
      })
    );
  }, [column, row]);

  useEffect(() => {
    setAllSlots((prevAllSlots) =>
      prevAllSlots.map((slot) =>
        selectedIndex === slot.index
          ? { ...slot, orientation: orientation, item: selectedItem }
          : slot
      )
    );
  }, [orientation, selectedItem]);

  // function disableItemOnSlot(index) {
  //   setAllSlots((prevAllSlots) =>
  //     prevAllSlots.map((slot) =>
  //       index === slot.index ? { ...slot, activeTable: false } : slot
  //     )
  //   );
  // }

  function activateSingleSlot(index) {
    setSelectedIndex(index);
    setAllSlots((prevSlotsArray) =>
      prevSlotsArray.map((slot, i) => {
        return i === index
          ? {
              ...slot,
              activeTable: !slot.activeTable,
              item: selectedItem,
              numberOfSlots: selectedItem === "bar" ? 1 : 1,
              orientation: orientation,
            }
          : slot;
      })
    );
  }

  const gridItemsArray = allSlots.map((slot, index) => {
    return (
      <GridItem
        key={index}
        active={slot.activeTable}
        activateTableSlot={() => activateSingleSlot(index)}
        item={slot.item}
        index={index}
        orientation={slot.orientation}
        numberOfSlots={slot.numberOfSlots}
        reonColor={slot.reonColor}
        selectedIndex={selectedIndex}
        setSelectedIndex={() => setSelectedIndex(index)}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setOrientation={setOrientation}
      />
    );
  });

  return (
    <>
      <div
        className="dynamic-grid"
        ref={gridRef}
        style={{
          gridTemplateColumns: `repeat(${column}, 1fr)`,
          gridTemplateRows: `repeat(${row}, 1fr)`,
          columnGap: "none",
          rowGap: "none",
        }}
      >
        {gridItemsArray}
      </div>
    </>
  );
}

export default DynamicGrid;
