import React, { useState } from 'react';
import '/Users/danielratnakarbejjam/Downloads/fitness-challenge 2/src/App.css';

const workoutPlans = [
  'Day 1: Cardio + Core - 20 min jog/walk + 3 sets: 15 crunches, 10 leg raises, 30-sec plank.',
  'Day 2: Strength (Full Body) - 3 sets: 12 squats, 10 push-ups, 15 lunges (each leg), 20-sec plank.',
  'Day 3: Cardio (HIIT) + Stretching - 15 min HIIT: 30 sec work/30 sec rest (jumping jacks, burpees, high knees, mountain climbers) + 15 min stretch.',
  'Day 4: Strength (Upper Body) - 3 sets: 12 bicep curls, 10 tricep dips, 15 shoulder presses, 20-sec side plank (each side).',
  'Day 5: Cardio + Core - 25 min brisk walk/jog + 3 sets: 15 Russian twists, 10 bicycle crunches, 30-sec plank.',
  'Day 6: Active Rest - Light yoga or 30 min walking.',
  'Day 7: Rest - Full recovery day.',
  'Day 8: Cardio + Core - 30 min jog + 4 sets: 15 crunches, 12 leg raises, 45-sec plank.',
  'Day 9: Strength (Lower Body) - 4 sets: 15 squats, 12 lunges (each leg), 10 deadlifts (use weights), 30-sec wall sit.',
  'Day 10: Cardio (HIIT) - 20 min HIIT: 45 sec work/15 sec rest (jump squats, burpees, mountain climbers, jump lunges).',
  'Day 11: Strength (Upper Body) - 4 sets: 15 push-ups, 12 tricep dips, 12 bicep curls, 20-sec side plank (each side).',
  'Day 12: Cardio + Core - 30 min cycling + 4 sets: 20 Russian twists, 15 bicycle crunches, 1-min plank.',
  'Day 13: Active Rest - Yoga or 20 min light walk.',
  'Day 14: Rest - Full recovery day.',
  'Day 15: Cardio + Core - 35 min jog/walk + 4 sets: 20 crunches, 15 leg raises, 1-min plank.',
  'Day 16: Strength (Full Body) - 4 sets: 15 squats, 15 push-ups, 12 lunges (each leg), 20-sec plank.',
  'Day 17: Cardio (HIIT) + Stretching - 20 min HIIT: 45 sec work/15 sec rest + 15 min full-body stretch.',
  'Day 18: Strength (Upper Body) - 4 sets: 15 shoulder presses, 15 tricep dips, 15 bicep curls, 1-min side plank (each side).',
  'Day 19: Cardio + Core - 30 min brisk walk/jog + 4 sets: 20 Russian twists, 20 bicycle crunches, 1-min plank.',
  'Day 20: Active Rest - Light yoga or 30 min walking.',
  'Day 21: Rest - Full recovery day.',
  'Day 22: Cardio + Core - 40 min jog + 4 sets: 20 crunches, 15 leg raises, 1-min plank.',
  'Day 23: Strength (Lower Body) - 4 sets: 20 squats, 15 lunges (each leg), 12 deadlifts, 1-min wall sit.',
  'Day 24: Cardio (HIIT) - 25 min HIIT: 45 sec work/15 sec rest (burpees, high knees, mountain climbers, jump squats).',
  'Day 25: Strength (Upper Body) - 4 sets: 15 push-ups, 15 tricep dips, 12 shoulder presses, 1-min side plank (each side).',
  'Day 26: Cardio + Core - 35 min cycling + 4 sets: 20 Russian twists, 20 bicycle crunches, 1-min plank.',
  'Day 27: Active Rest - Yoga or light walk (30 min).',
  'Day 28: Rest - Full recovery day.',
  'Day 29: Cardio + Full Body Strength - 45 min jog + 4 sets: 15 squats, 15 push-ups, 15 lunges, 1-min plank.',
  'Day 30: Cardio (HIIT) + Stretching - 30 min HIIT + 15 min full-body stretch.'
];


function Workouts() {
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);

  const handleWorkoutClick = (dayIndex) => {
    setSelectedDay(dayIndex + 1);
    setSelectedWorkout(workoutPlans[dayIndex]);
  };

  return (
    <div className="workouts">
      <h2>Daily Workouts</h2>
      <div className="workout-buttons">
        {workoutPlans.map((_, index) => (
          <button key={index} className="workout-day-btn" onClick={() => handleWorkoutClick(index)}>
            Day {index + 1}
          </button>
        ))}
      </div>
      {selectedWorkout && (
        <div className="workout-details">
          <h3>Workout Plan for Day {selectedDay}</h3>
          <p>{selectedWorkout}</p>
        </div>
      )}
    </div>
  );
}

export default Workouts;
