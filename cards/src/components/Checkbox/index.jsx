import React, { useState } from 'react';
import {
  CheckboxBorder,
  CheckboxContainer,
  CheckboxIcon,
  CheckboxLabel,
} from './styled';

const Checkbox = ({ label, id }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => setIsSelected(!isSelected);
  return (
    <>
      <CheckboxContainer onClick={() => handleToggle()} id={id}>
        <CheckboxBorder
          style={{
            backgroundColor: isSelected ? 'var(--inputbackground)' : '',
          }}
        >
          {isSelected && <CheckboxIcon />}
        </CheckboxBorder>
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxContainer>
    </>
  );
};

export default Checkbox;
