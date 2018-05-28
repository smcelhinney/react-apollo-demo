import React from 'react';
import { MovieQuery, MovieQueryByYear, AddMovieForm } from '../queries/Movies';
import { CharacterQuery } from '../queries/Characters';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 1;
`;

const StyledLink = styled.a`
  padding: 5px 5px 5px 0;
`

const MovieInfo = ({ loading, error, data, refetch, networkStatus }) => {
  if (networkStatus === 4) return "Refetching!";
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    (data &&
      data.movies &&
      data.movies.length &&
      data.movies.map((movie, i) => {
        const key = `${movie.name}-${movie.year}-${i}`.replace(/\s/i, '-');
        return (
          <div key={key}>
            {movie.name} ({movie.year})
          </div>
        );
      })) || <div>No movies match this criteria</div>
  );
};

const MovieYears = ({ loading, error, data, clickHandler }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }
  console.log(data)

  let elem = <div>No years</div>;

  if (data && data.movies && data.movies.length) {
    let years = data.movies.map(movie => movie.year);
    console.log(years);
    // dedupe
    years = [...new Set(years)].map(year => (
      <StyledLink key={year} href="#" onClick={() => clickHandler(year)}>
        {year}
      </StyledLink>
    ));

    elem = <div>{years}</div>
  }

  return elem;
};

const Character = ({ loading, error, data }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    (data &&
      data.characters &&
      data.characters.length &&
      data.characters.map((character, i) => {
        const key = `${character.name}-${i}`.replace(/\s/i, '-');
        return (
          <div key={key}>
            {character.name} ({character.alterEgo})
          </div>
        );
      })) || <div>No characters</div>
  );
};

class App extends React.Component {
  state = {
    selectedYear: 2010
  };

  constructor(props) {
    super(props);
    this.changeYear = this.changeYear.bind(this);
  }

  changeYear(selectedYear) {
    this.setState({ selectedYear });
  }

  render() {
    return (
      <Row>
        <Column>
          <h2>Movies</h2>
          <MovieQuery>{result => <MovieInfo {...result} />}</MovieQuery>

          <h2>Movies in {this.state.selectedYear}</h2>
          <MovieQuery>
            {result => (
              <MovieYears {...result} clickHandler={this.changeYear} />
            )}
          </MovieQuery>
          <MovieQueryByYear year={this.state.selectedYear}>
            {result => <MovieInfo {...result} />}
          </MovieQueryByYear>
          <h2>Add new movie</h2>
          <AddMovieForm />

        </Column>
        <Column>
          <h2>Characters</h2>
          <CharacterQuery>{result => <Character {...result} />}</CharacterQuery>
        </Column>
      </Row>
    );
  }
}

export default App;
