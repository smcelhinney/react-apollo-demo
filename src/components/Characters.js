import React from 'react';

export const CharacterInfo = ({ loading, error, data }) => {
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
            {character.name}{character.alterEgo && ` (${character.alterEgo})`}
          </div>
        );
      })) || <div>No characters</div>
  );
};
