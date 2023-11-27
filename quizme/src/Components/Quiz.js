import React from 'react'
import { QuizData } from "../Data/QuizData.js"
import { useState } from 'react'
import QuizResult from '../QuizResult.js'
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult,setShowResult] = useState(false);
    const ResultAll =()=>{
        setCurrentQuestion(0);
        setScore(0);
        setClickedOption(0);
        setShowResult(0);
    }
    const changeQuestion =()=>{
        updateScore(); 
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion (currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore =()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
  return (
    <div>
        <p className='heading-txt'>QUIZME APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score ={score} totalScore={QuizData.length} tryAgain={ResultAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}.</span>
                <span id="question-text">
                    {QuizData[currentQuestion].question}
                </span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption === i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input id="next-button" type="button" value="Next Ques" onClick={changeQuestion}  />
            </>)}
        </div>
    </div>
  )
}

export default Quiz;