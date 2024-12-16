import React, { useState } from 'react';
import '/Users/danielratnakarbejjam/Downloads/fitness-challenge 2/src/App.css';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBMI(bmiValue);
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="bmi-calculator">
      <div className="page-container">
        <div className="page-section">
          <h2>BMI Calculator</h2>
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Calculate BMI</button>
          {bmi && <p>Your BMI: {bmi}</p>}
          {category && <p>Category: {category}</p>}
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
