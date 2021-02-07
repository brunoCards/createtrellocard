import React from 'react';
import { TagsContainer, TagsLabel, TagsList } from './styles';

const TagsComponent = ({ children }) => {
  return (
    <>
      <TagsContainer>
        <TagsLabel>Tags</TagsLabel>
        <TagsList>{children}</TagsList>
      </TagsContainer>
    </>
  );
};

export default TagsComponent;
