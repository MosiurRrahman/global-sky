import React, { useEffect, useRef } from "react";
import useCustomSelect from "@/customHooks/useCustomSelect";

const SelectComponent = ({ options, placeholder, open, customClass, onSelect, defaultValue }) => {
  // Initialize the custom select hook
  const {
    isOpen,
    selectedOption,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  } = useCustomSelect(options, open, defaultValue); // Pass defaultValue to the hook

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionSelect = (option) => {
    selectOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  const dropdownClassName = `nice-select ${customClass || ""} ${isOpen ? "open" : ""}`;

  return (
    <div className={dropdownClassName} tabIndex="0" onClick={toggleDropdown} ref={dropdownRef}>
      <span className="current">{selectedOption || placeholder}</span> {/* Show placeholder if no selectedOption */}
      <ul className="list">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option${selectedOption === option ? " selected focus" : ""}`}
            data-value={index}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectComponent;
