import React from 'react'
import Action from './Options'

function Questions({question ,dispatch ,answer}) {
  return (
    <div>
        <h4>{question.question}</h4>
        <Action question={question} dispatch={dispatch} answer={answer}/>
    </div>
  )
}

export default Questions