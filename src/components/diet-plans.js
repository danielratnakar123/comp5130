import React, { useState } from 'react';
import '/Users/danielratnakarbejjam/Downloads/fitness-challenge 2/src/App.css';

const dietPlans = [
  {
    breakfast: 'Greek yogurt with strawberries and low-sugar granola.',
    lunch: 'Grilled chicken salad with avocado and cherry tomatoes.',
    dinner: 'Baked salmon with steamed broccoli and quinoa.',
  },
  {
    breakfast: 'Chia pudding with Greek yogurt and fruit.',
    lunch: 'Turkey wrap with spinach, tomato, and hummus.',
    dinner: 'Stir-fried tofu with mixed vegetables and brown rice.',
  },
  {
    breakfast: 'Mashed avocado and ricotta cheese on whole grain toast with berries.',
    lunch: 'Quinoa bowl with black beans, corn, and bell peppers.',
    dinner: 'Grilled shrimp with asparagus and sweet potatoes.',
  },
];

function DietPlans() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="diet-plans">
      <h2>30 Days of Diet Plans</h2>
      <p>Select a day to view the specific diet plan.</p>
      <div className="diet-days">
        {Array.from({ length: 30 }, (_, index) => (
          <button
            key={index}
            className="diet-day-btn"
            onClick={() => setSelectedDay(index + 1)}
          >
            Day {index + 1}
          </button>
        ))}
      </div>
      {selectedDay && (
        <div className="diet-details">
          <h3>Day {selectedDay}</h3>
          <p><strong>Breakfast:</strong> {dietPlans[(selectedDay - 1) % dietPlans.length].breakfast}</p>
          <p><strong>Lunch:</strong> {dietPlans[(selectedDay - 1) % dietPlans.length].lunch}</p>
          <p><strong>Dinner:</strong> {dietPlans[(selectedDay - 1) % dietPlans.length].dinner}</p>
        </div>
      )}
    </div>
  );
}

export default DietPlans;
