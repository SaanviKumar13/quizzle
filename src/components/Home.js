import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../data/Categories";
import "../styles.css";

const Home = ({ name, setName, fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const navigate = useNavigate();

  const handleSubmit= () => {
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    };

  return (
    <div className="content">
      <div className="settings">
        <span>Lets get Quizzing!</span>
        <div className="inputs">
          <TextField
            style={{ marginBottom:30 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}

          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.id}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Difficulty"
            variant="outlined"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <div>
        <img src="/qmark1.svg" className="qlogo"></img>
        </div>
    </div>
  );
};

export default Home;