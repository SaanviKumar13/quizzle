import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../styles.css";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) 
         return "select";
    else if (selected === i && selected !== correct) 
          return "wrong";
    else if (i === correct) 
         return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if( i=== correct)
       setScore(score+1);
  };

  const goNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    }
  };

  const quit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <span className="qno">Question {currQues + 1} :</span>

      <div className="singleQuestion">
        <span className="qname">{questions[currQues].question}</span>
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            style={{ width: 185 }}
            href="/"
            onClick={() => quit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ width: 185 }}
            onClick={goNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;