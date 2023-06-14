import React, { useState } from 'react';
import Counter from './Counter';

const CounterApp = () => {
  const [counters, setCounters] = useState([]);
  const [label, setLabel] = useState('');

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleCreateCounter = () => {
    setCounters([...counters, label]);
    setLabel('');
  };

  return (
    <div>
      <h2>   Tally Counter   </h2>
      <input type="text" value={label} onChange={handleLabelChange} />
      <button onClick={handleCreateCounter}>Create Counter</button>

      {counters.map((label, index) => (
        <Counter key={index} label={label} />
      ))}
    </div>
  );
};

export default CounterApp;
