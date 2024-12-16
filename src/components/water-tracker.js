import React, { useState } from 'react';
import '/Users/danielratnakarbejjam/Downloads/fitness-challenge 2/src/App.css';

function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8); // Default goal set to 8 glasses

  const handleGoalChange = (e) => {
    setGoal(Number(e.target.value));
  };

  return (
    <div className="page-container">
      <div className="page-section">
        <h2>Water Tracker</h2>
        <p>Glasses of water: <strong>{count}</strong></p>
        
        <div className="goal-setting">
        <label htmlFor="goal">Set your daily goal:</label>
        <input
            type="number"
            id="goal"
            min="1"
            value={goal}
            onChange={handleGoalChange}
            placeholder="Enter goal"
          />
</div>

        <div className="progress">
          <p>
            Progress: {count}/{goal} glasses
          </p>
          <progress value={count} max={goal}></progress>
        </div>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Drink Water</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>

        {count >= goal && <p className="success-message">🎉 Great job! You've met your goal for today! 🎉</p>}
      </div>
    </div>
  );
}

export default WaterTracker;
