import React, { useState } from 'react';
import {
  SelectContainer,
  SelectInputHeader,
  SelectInput,
  SelectListContainer,
  SelectLabel,
} from './styles';

const Select = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <SelectContainer>
        <SelectLabel>Dropdown</SelectLabel>
        <SelectInputHeader onClick={() => handleToggle()}>
          {title}
        </SelectInputHeader>
        {isOpen && (
          <SelectListContainer>
            <SelectInput>{children}</SelectInput>
          </SelectListContainer>
        )}
      </SelectContainer>
    </>
  );
};

export default Select;
