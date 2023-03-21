import { Button } from "@mui/material";
import "../styles.css";

const Result=({name, score})=>{
  if(score ===10)
      return(
      <div className="result">
         <span className="ending">Hey {name},Excellent work you got {score} on 10!</span>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/"
          >
            Home
          </Button>
    </div>);
  else if(score >=7)
         return(
         <div className="result">
          <span className="ending">Hey {name}, good job on attempting the quiz!<br/>You got {score} on 10.</span>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/"
          >
            Home
          </Button>
    </div>);
   else
         return(
          <div className="result">
          <span className="ending">You got {score} out of 10 questions right.
            <br/>
            Better luck next time:)
          </span>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/"
            >Home</Button>
         </div>)
};

export default Result;