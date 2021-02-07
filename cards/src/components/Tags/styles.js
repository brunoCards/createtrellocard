import styled from 'styled-components';

export const TagsContainer = styled.div`
  width: 100%;
  height: 100%;

  grid-column-start: 9;
  grid-column-end: 13;
  grid-row-start: 8;
  grid-row-end: 12;
`;
export const TagsLabel = styled.p`
  margin-top: 4vh;

  color: var(--fontcolor);
  font-weight: 900;
  font-size: 14px;
`;
export const TagsList = styled.ul`
  width: 100%;
  margin-top: 1vh;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const TagsListItem = styled.li`
  padding: 4px;
  border: 3px solid var(--grey);
  border-radius: 4px;

  list-style: none;

  font-size: 12px;
`;
