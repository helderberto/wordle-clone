import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('Please enter a 5 letter word');
      return;
    }

    console.log({ guess });
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        type="text"
        id="guess-input"
      />
    </form>
  );
}

export default GuessInput;
