import styled from 'styled-components';

export const Form = styled.form`
  min-width: 60vw;
  max-width: 60vw;
  width: 100%;
  min-height: 70vh;
  max-height: 70vh;
  height: 100%;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;
export const LabelForm = styled.label`
  width: 5vw;
  height: 4vh;
  margin-top: 5vh;

  font-weight: 700;

  &#name {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &#email {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;

    background-color: #fff;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 90%;
  padding: 15px;
  border: 3px solid var(--grey);
  border-radius: 6px;

  color: var(--fontcolor);
  font-weight: bold;

  &#name {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  &#email {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  &:focus {
    background-color: var(--inputbackground);
    transition: ease-in-out 400ms;
  }
`;
export const TextArea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  min-height: 29vh;
  max-height: 29vh;
  height: 100%;
  padding: 15px;
  border: 3px solid var(--grey);
  border-radius: 6px;

  color: var(--fontcolor);
  font-weight: bold;

  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 7;
  grid-row-end: 12;

  &::placeholder {
    color: var(--grey);
  }
  &:focus {
    background-color: var(--inputbackground);
    transition: ease-in-out 1s;
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  height: 60%;
  outline: none;
  border: none;
  background-color: var(--primary);

  grid-column-start: 13;
  grid-column-end: 15;
  grid-row-start: 11;
  grid-row-end: 13;

  text-transform: uppercase;
  font-size: 8px;
  font-weight: 900;
  color: var(--inputbackground);

  cursor: pointer;
`;
