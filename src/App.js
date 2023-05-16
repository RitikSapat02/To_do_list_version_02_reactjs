import React, { useState } from "react";

import CourseInput from "./CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./CourseGoals/CourseGoalList/CourseGoalList";
import "./App.css";

const App = () => {
  const [CourseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalID) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goalID !== goal.id);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (CourseGoals.length > 0) {
    content = (
      <CourseGoalList items={CourseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">{content}</section>
    </div>
  );
};
export default App;
