import { BsDoorOpenFill } from "react-icons/bs";
import ToolItem from "../tool-item/ToolItem";
import { PiDeskFill, PiPicnicTableBold, PiWallFill } from "react-icons/pi";
import { GiStairs } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import "./styles.css";
import { FaPlus } from "react-icons/fa6";
import { SiCoderwall } from "react-icons/si";
import { TbWallOff } from "react-icons/tb";

function ToolKit({
  addRow,
  addColumn,
  setSelectedItem,
  selectedItem,
  handleOrientationChange,
  setOrientation,
  orientation,
}) {
  function handleToolChange(toolName) {
    setSelectedItem(toolName);
    setOrientation(1);
  }

  return (
    <div className="buttons-container">
      <div className="row-column-container">
        <button onClick={addRow}>
          <FaPlus className="icon" /> Row
        </button>
        <button onClick={addColumn}>
          <FaPlus className="icon" /> Column
        </button>
      </div>
      <div className="items-container">
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "wall" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("wall")}
        >
          <PiWallFill className="icon" />
        </button>
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "walltriple" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("walltriple")}
        >
          <TbWallOff className="icon" />
        </button>
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "wallL" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("wallL")}
        >
          <SiCoderwall className="icon" />
        </button>
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "table" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("table")}
        >
          <PiDeskFill className="icon" />
        </button>
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "desk" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("desk")}
        >
          <PiPicnicTableBold className="icon" />
        </button>
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "bar" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("bar")}
        >
          <MdOutlineFoodBank className="icon" />
        </button>
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "door" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("door")}
        >
          <BsDoorOpenFill className="icon" />
        </button>
        <button
          style={{
            background: `hsla(94, 24%, 46%, ${
              selectedItem === "stairs" ? "1" : "0.5"
            })`,
          }}
          onClick={() => handleToolChange("stairs")}
        >
          <GiStairs className="icon" />
        </button>
      </div>
      <ToolItem
        handleOrientationChange={handleOrientationChange}
        selectedItem={selectedItem}
        orientation={orientation}
      />
    </div>
  );
}

export default ToolKit;
