import { useState } from "react";
import "./quiz.css";

const questionsData = [
  {
    id: 1,
    question: "Out of these options who all are sports persons?",
    options: [
      "Narendra Modi",
      "Virat Kohli",
      "Sachin Tendulkar",
      "Mamta Banerjee",
    ],
    correctAnswers: ["Virat Kohli", "Sachin Tendulkar"],
  },
  {
    id: 2,
    question: "Select the Indian states that are in the southern region.",
    options: ["Karnataka", "Haryana", "Tamil Nadu", "Punjab"],
    correctAnswers: ["Karnataka", "Tamil Nadu"],
  },
  {
    id: 3,
    question: "India Capital?",
    options: ["Delhi", "Bangalore", "Sammed Shikarji", "Madras"],
    correctAnswers: ["Delhi"],
  },
  {
    id: 4,
    question: "Who is the captian of Indian Football Team ?",
    options: [
      "Sunil Chetri",
      "Baichung Butia",
      "Joginder Sharama",
      "Mohan Das",
    ],
    correctAnswers: ["Sunil Chetri"],
  },
  {
    id: 5,
    question: "Select the Indian states that are in the northen region.",
    options: ["Karnataka", "Haryana", "Tamil Nadu", "Punjab"],
    correctAnswers: ["Haryana", "Punjab"],
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questionsData.length).fill([])
  );
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...selectedAnswers];
    const currentSelections = updatedAnswers[currentQuestion];

    // Toggle the selected option
    if (currentSelections.includes(option)) {
      updatedAnswers[currentQuestion] = currentSelections.filter(
        (selectedOption) => selectedOption !== option
      );
    } else {
      updatedAnswers[currentQuestion] = [...currentSelections, option];
    }

    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  return (
    <div className="app-container">
      {!showResults ? (
        <div>
          <h2 className="question">
            Q{currentQuestion + 1}: {questionsData[currentQuestion].question}
          </h2>
          <ul>
            {questionsData[currentQuestion].options.map((option) => (
              <li
                key={option}
                className={
                  selectedAnswers[currentQuestion].includes(option)
                    ? "selected"
                    : ""
                }
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div>
            <button onClick={handlePrev} disabled={currentQuestion === 0}>
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={
                currentQuestion === questionsData.length - 1 ||
                selectedAnswers[currentQuestion] == ""
              }
            >
              Next
            </button>
            {currentQuestion === questionsData.length - 1 && (
              <button onClick={handleShowResults}>Show Results</button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz Results</h2>
          <ul>
            {questionsData.map((question, index) => (
              <div key={index}>
                <li
                  style={
                    question?.correctAnswers?.every((ans) =>
                      selectedAnswers[index].includes(ans)
                    )
                      ? { background: "#7aae7a" }
                      : { background: "#eda4a4" }
                  }
                >
                  <b>{index + 1}: </b>
                  {question.question} <i>- Ans:</i>
                  <b> {selectedAnswers[index].join(", ")}</b>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
