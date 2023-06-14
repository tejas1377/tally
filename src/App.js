import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

function App() {
  ReactDOM.render(<CounterApp />, document.getElementById('root'));

  return (
    <div className="App">
      {/* Your app content */}
    </div>
  );
}

export default App;
