import React, { useState } from 'react';
import badWords from 'bad-words';

const filter = new badWords();

const BadWordDetector = () => {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
    setError(filter.clean(value) !== value ? 'Bad words detected!' : null);
  };

  return (
    <div>
      <label htmlFor="textInput">Type something here:</label>
      <input type="text" id="textInput" value={inputText} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BadWordDetector;
