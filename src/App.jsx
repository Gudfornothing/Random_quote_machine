import React, { useState } from 'react';
import './App.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  // Add more quotes here...
];

function App() {
  const [quote, setQuote] = useState(quotes[0]); // Set initial quote to the first one in the list

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <div className="quote-container">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">- {quote.author}</p>
        <button onClick={getRandomQuote} className="new-quote-button">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
