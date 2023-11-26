import React from 'react'
import { QuizData } from "../Data/QuizData.js"
import { useState } from 'react'
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const changeQuestion =()=>{
        if(currentQuestion <QuizData.length-1){
        setCurrentQuestion (currentQuestion+1);
        }else{
            
        }
    }
  return (
    <div>
        <p className='heading-txt'>QUIZME APP</p>
        <div className="container">
            <div className="question">
                <span id="question-number">{currentQuestion+1}.</span>
                <span id="question-text">
                    {QuizData[currentQuestion].question}
                </span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button className="option-btn">
                            {option}
                        </button>
                    )
                })}
            </div>
            <input id="next-button" type="button" value="Next Ques" onClick={changeQuestion} />
        </div>
    </div>
  )
}

export default Quiz;