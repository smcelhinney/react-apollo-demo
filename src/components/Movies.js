import React from 'react';
import { StyledLink } from './ui/elements';


export const MovieInfo = ({ loading, error, data, refetch, networkStatus }) => {
  if (networkStatus === 4) return 'Refetching!';
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

export const ClickableMovieYears = ({ loading, error, data, clickHandler }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }
  console.log(data);

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

    elem = <div>{years}</div>;
  }

  return elem;
};
