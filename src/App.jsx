import { useState } from "react";
import DynamicGrid from "./components/dynamic-grid/DynamicGrid";
import ToolKit from "./components/tool-kit/ToolKit";

function App() {
  const [row, setRow] = useState(8);
  const [column, setColumn] = useState(10);
  const [selectedItem, setSelectedItem] = useState("");
  const [orientation, setOrientation] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function addRow() {
    setRow((prevRows) => {
      return prevRows + 1;
    });
  }
  function addColumn() {
    setColumn((prevColumns) => {
      return prevColumns + 1;
    });
  }
  const handleOrientationChange = () => {
    setOrientation((prevOrientation) =>
      prevOrientation === 4 ? 1 : prevOrientation + 1
    );
  };

  return (
    <main className="main-container">
      <ToolKit
        addRow={addRow}
        addColumn={addColumn}
        handleOrientationChange={handleOrientationChange}
        orientation={orientation}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        setOrientation={setOrientation}
        setSelectedIndex={setSelectedIndex}
      />
      <DynamicGrid
        row={row}
        column={column}
        difference={row * column - (row - 1) * column}
        selectedItem={selectedItem}
        orientation={orientation}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setSelectedItem={setSelectedItem}
        setOrientation={setOrientation}
      />
    </main>
  );
}

export default App;
