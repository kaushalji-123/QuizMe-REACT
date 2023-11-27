import React from 'react'

const QuizResult = (props) => {
  return (

    <>
    <div className='show-score'>
        Your Score :
        <p>{props.score}</p><br/>
        Total Score :
        <p>{props.totalScore}</p>
    </div>
        <button id='next-button' onClick={props.tryAgain}>Play Again</button>
</>
  )
}

export default QuizResult