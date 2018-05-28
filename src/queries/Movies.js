import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledInput = styled.div`
  input {
    font-family: 'Cinzel', serif;
    padding: 5px;
    margin-right: 10px;
  }
`;


const MOVIE_QUERY = gql`
  query getMovies {
    movies {
      id
      year
      name
    }
  }
`;

const MOVIE_QUERY_BY_YEAR = gql`
  query getMoviesbyYear($year: Int!) {
    movies(where: { year: $year }) {
      id
      year
      name
    }
  }
`;

const ADD_MOVIE = gql`
  mutation createMovie($movieInput: MovieCreateInput!) {
    createMovie(data: $movieInput) {
      id
    }
  }
`;

export const MovieQuery = ({ children }) => (
  <Query poll={500} notifyOnNetworkStatusChange query={MOVIE_QUERY}>{result => children(result)}</Query>
);

export const MovieQueryByYear = ({ children, year }) => (
  <Query poll={500} notifyOnNetworkStatusChange query={MOVIE_QUERY_BY_YEAR} variables={{ year }}>
    {result => children(result)}
  </Query>
);

export const AddMovieForm = () => {
  return (
    <Mutation mutation={ADD_MOVIE}>
      {(createMovie, { data }) => {
        let nameInput;
        let yearInput;

        return (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                const name = nameInput.value;
                const year = parseInt(yearInput.value, 10);
                console.log(name);
                console.log(year);

                createMovie({ variables: { movieInput: { name, year } } });
                nameInput.value = '';
                yearInput.value = '';
              }}
            >
              <StyledInput>
                <input
                  placeholder="Enter movie name"
                  ref={node => {
                    nameInput = node;
                  }}
                />

                <input
                  placeholder="Enter year"
                  ref={node => {
                    yearInput = node;
                  }}
                />
              </StyledInput>
              <button type="submit">Add Movie</button>
            </form>
          </div>
        );
      }}
    </Mutation>
  );
};
