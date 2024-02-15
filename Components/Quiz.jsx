import React from 'react'
import "./quiz.css"
import arr from '../data'
import "./responsive.css"
export default function Quiz() {
  let [index, setIndex] = React.useState(0);
  let [question, setQuestion] = React.useState(arr[index]);
  let [lock, setLock] = React.useState(true);
  let [score, Setscore] = React.useState(0);
  let length = arr.length + 1;

  function nextq() {
    if(!lock){
      setIndex(++index);
      setQuestion(arr[index])
      setLock(true);
      const selectedListItem = document.querySelector(".quizapp ul li.ans");
      if (selectedListItem) {
        selectedListItem.classList.remove("ans");
      }
    }
    }
   
  function checkans(e) {
    setLock(false)
    if (lock) {
      e.target.classList.add("ans")

      console.log(e.target.innerText);
      if (e.target.innerText === arr[index].ans) {
        Setscore(prev => prev + 1);
        console.log(score);
      }

    }

  }
  return (
    <>

      <div className="container">
      
        {index == 4 ?
        <div className="quizapp"><h1>Quiz App</h1>
        <h2>Score : {score}</h2></div> : <></>
        }
        {
          index == 4? <></> :
            <div className="quizapp">
              <h1>Quiz App</h1>
              <h2>
                {index + 1}. {question.question}
                <ul>
                  <li onClick={checkans}>{arr[index].option1}</li>
                  <li onClick={checkans}>{arr[index].option2}</li>
                  <li onClick={checkans}>{arr[index].option3}</li>
                  <li onClick={checkans}>{arr[index].option4}</li>
                </ul>
              </h2>
              <button className="nextbtn" onClick={nextq}>
                NEXT
              </button>
            </div>}
      </div>
    </>
  )
}
