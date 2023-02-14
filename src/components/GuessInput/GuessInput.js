import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Please enter a 5 letter word');
      return;
    }

    console.log({ tentativeGuess });
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="tentativeGuess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextTentativeGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextTentativeGuess);
        }}
        type="text"
        id="tentativeGuess-input"
      />
    </form>
  );
}

export default GuessInput;
