"use client";
import useCustomSelect from "@/customHooks/useCustomSelect";
import React, { useEffect, useRef } from "react";

const SelectComponent = ({ options, placeholder, open, customClass, onSelect }) => {
  const {
    isOpen,
    selectedOption,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  } = useCustomSelect(options, open);

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
    closeDropdown(); // Close the dropdown after selection

    if (onSelect) {
      onSelect(option); // Trigger onSelect when an option is selected
    }
  };

  const dropdownClassName = `nice-select ${customClass || ""} ${isOpen ? "open" : ""}`;

  return (
    <div className={dropdownClassName} tabIndex="0" onClick={toggleDropdown} ref={dropdownRef}>
      <span className="current">{selectedOption || placeholder}</span>
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
