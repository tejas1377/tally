import React, { useState } from 'react';

const Counter = ({ label }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardBody}>
        <h2 style={styles.cardTitle}>{label}</h2>
        <p style={styles.countText}>Count: {count}</p>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '18rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#fff',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  countText: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '5px',
  },
};

export default Counter;
