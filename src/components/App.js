import React from 'react';
import { MovieQuery, MovieQueryByYear, AddMovieForm } from '../queries/Movies';
import { CharacterQuery } from '../queries/Characters';
import { MovieInfo, ClickableMovieYears } from './Movies';
import { CharacterInfo } from './Characters';
import { Row, Column } from './ui/elements';

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
              <ClickableMovieYears {...result} clickHandler={this.changeYear} />
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
          <CharacterQuery>
            {result => <CharacterInfo {...result} />}
          </CharacterQuery>
        </Column>
      </Row>
    );
  }
}

export default App;
