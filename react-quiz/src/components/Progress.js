import React from 'react'

export default function Progress({index , noQuestions ,points ,maxPossiblePoints ,answer}) {
  return (
    <div>
        <header className='progress'>
            <progress max={noQuestions} value={index + Number(answer !== null)}></progress>
            <p>
                Question  <strong>{index +1}</strong> / {noQuestions}
            </p>
            <p>
                Question  <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </header>
    </div>
  )
}
