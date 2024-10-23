import React, { useState } from "react";

const useCustomSelect = (initialOptions, isOpenByDefault = false, defaultValue = null) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  const [selectedOption, setSelectedOption] = useState(defaultValue); // Set initial selected option from defaultValue
  const options = initialOptions;

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  return {
    isOpen,
    selectedOption,
    options,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  };
};

export default useCustomSelect;
