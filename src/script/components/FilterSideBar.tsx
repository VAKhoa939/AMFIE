import { Table } from "@tanstack/react-table";
import { BsFilterLeft, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import "../../css/FilterSidebar.css";

interface FilterSidebarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: Table<any>;
}

export const FilterSidebar = ({ table }: FilterSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAllColumns = (value: boolean) => {
    table.toggleAllColumnsVisible(value);
  };

  return (
    <>
      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)} />}

      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="sidebar-toggle">
          {isOpen ? <BsChevronRight /> : <BsChevronLeft />}
        </button>

        <div className="sidebar-content">
          <div className="sidebar-header">
            <BsFilterLeft className="text-xl" />
            <h2 className="sidebar-title">Toggle Columns</h2>
          </div>

          <div className="sidebar-actions">
            <button
              onClick={() => toggleAllColumns(true)}
              className="sidebar-button sidebar-button-primary"
            >
              Select All
            </button>
            <button
              onClick={() => toggleAllColumns(false)}
              className="sidebar-button sidebar-button-secondary"
            >
              Deselect All
            </button>
          </div>

          <div className="space-y-3">
            {table.getAllLeafColumns().map((column) => (
              <div key={column.id} className="column-item">
                <label className="column-label">
                  <input
                    type="checkbox"
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                  />
                  <span>
                    {column.id.charAt(0).toUpperCase() + column.id.slice(1)}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
