import { FaRotate } from "react-icons/fa6";

function ToolItem({ handleOrientationChange, selectedItem, orientation }) {
  console.log("TOOL ITEM SELECTED ITEM : ", selectedItem);
  return (
    <button onClick={handleOrientationChange} disabled={!selectedItem}>
      <FaRotate />
      {orientation}
    </button>
  );
}

export default ToolItem;
