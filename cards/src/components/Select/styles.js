import styled from 'styled-components';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const SelectContainer = styled.div`
  width: 100%;
  height: 100%;

  grid-column-start: 9;
  grid-column-end: 15;
  grid-row-start: 3;
  grid-row-end: 6;
`;
export const SelectLabel = styled.p`
  margin-top: 5vh;

  color: var(--fontcolor);
  font-weight: 900;
`;
export const SelectInputHeader = styled.div`
  width: 100%;
  max-height: 52px;
  padding: 10px;
  border: 3px solid var(--grey);
  border-radius: 6px;
  margin-top: 1.3vh;

  cursor: pointer;
`;
export const SelectListContainer = styled.div`
  width: 100%;
`;
export const SelectInput = styled.ul`
  width: 100%;
  margin-top: 2vh;
`;
export const SelectOption = styled.li`
  width: 100%;
  padding: 10px;
  border: 3px solid var(--grey);
  border-radius: 0 0 6px 6px;

  display: flex;

  cursor: pointer;

  &:first-child {
    border-bottom: none;
    border-radius: 6px 6px 0 0;
  }
`;
