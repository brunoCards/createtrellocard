import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  & {
    width: 100%;
    height: 35px;

    cursor: pointer;

    display: flex;
    align-items: center;

    gap: 10px;
  }

  &#opcao1 {
    grid-column-start: 9;
    grid-column-end: 11;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  &#opcao2 {
    grid-column-start: 11;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  &#opcao3 {
    grid-column-start: 13;
    grid-column-end: 15;
    grid-row-start: 2;
    grid-row-end: 2;
  }
`;
export const CheckboxBorder = styled.div`
  width: 45px;
  height: 90%;
  border: 2px solid var(--grey);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckboxIcon = styled(CheckIcon)`
  && {
    font-weight: 900;
    font-size: 1.5em;
  }
`;
export const CheckboxLabel = styled.div`
  width: 100%;
  font-size: 0.8em;
`;
