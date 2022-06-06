import React, {useState} from "react";
import "./EightBall.css";

let countR = 0;
let countY = 0;
let countG = 0;

function counter(color){
    if (color === "red"){
        countR += 1;
        console.log(countR);
    } else if (color === "green"){
        countG += 1;
        console.log(countG);
    } else {
        countY += 1;
        console.log(countY);
    }
}

const EightBall = (props) => {
    const [msg, setMsg] = useState("Think of a Question.");
    const [color, setColor] = useState("black");

    function handleClick() {
        let answerInd = Math.floor(Math.random() * props.answers.length);
        const {msg, color} = props.answers[answerInd];
        counter(color);
        setMsg(msg);
        setColor(color);
    };
   
    function reset(){
        setColor("black");
        setMsg("Think of a Question");
        countG = 0;
        countR = 0;
        countY = 0;
    }

    return (
        <>
            <div className="EightBall-container" 
            onClick={handleClick} 
            style={{backgroundColor: color}}>
                <p><b>{msg}</b></p>
            </div>

            <div className="EightBall-counter">
                <p className="EightBall-counter"> <b>Red: </b> {countR} </p>
                <p className="EightBall-counter"> <b>Yellow: </b> {countY} </p>
                <p className="EightBall-counter"> <b>Green: </b> {countG} </p>
            </div>

            <button className="EightBall-btn" onClick={reset}>
                Reset
            </button>
        </>
    );
};

EightBall.defaultProps = { answers : [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]};

export default EightBall;