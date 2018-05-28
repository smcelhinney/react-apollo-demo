import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CHARACTER_QUERY = gql`
  query getCharacters {
    characters {
      id
      name
      alterEgo
    }
  }
`;

export const CharacterQuery = ({ children }) => (
  <Query query={CHARACTER_QUERY}>{result => children(result)}</Query>
);
