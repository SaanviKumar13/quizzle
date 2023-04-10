import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" 
                 element={<Home
                            name={name}
                            setName={setName}
                            fetchQuestions={fetchQuestions}
                          />}>
          </Route>
          <Route path="/quiz"    
                 element={<Quiz
                            name={name}
                            questions={questions}
                            score={score}
                            setScore={setScore}
                            setQuestions={setQuestions}
                          />}>
          </Route>
          <Route path="/result"
                 element={<Result 
                              name={name} 
                              score={score}
                         />}>
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;