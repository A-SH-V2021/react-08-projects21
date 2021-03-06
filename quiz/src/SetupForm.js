import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { handleChange, handleSubmit, quiz, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-input"
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
            ></input>
          </div>
          {error && <p className="error">can't get data </p>}

          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category:</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
              <option value="Science_Computers">Science: Computers</option>
            </select>
          </div>

          {/* difficalty */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty:</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="meduim">meduim</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>start</button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
