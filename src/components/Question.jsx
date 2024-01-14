import React, { useEffect, useState } from 'react'
import { Results } from './Results';

export const Question = ({
    filteredQuestion,
    questionsFiltered,
    indexQuestion,
    setIndexQuestion,
    setActiveQuiz
}) => {
    const [score,SetScore]=useState(0);
    const[selectAnswerIndex,setSelectAnswerIndex]=useState(null);
    const [answered,SetAnswered]=useState(false)
    const [activeResults,setActiveResults]=useState(false)
    const onNexQuestion=()=>{
        setIndexQuestion(indexQuestion+1);
        setSelectAnswerIndex(null)
        SetAnswered(false)
    }
    const[answersRandom,setAnswerRandom]=useState([])
    useEffect(()=>{
        const answers=[
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer
        ];
        setAnswerRandom(answers.sort(()=>Math.random(-0.5)))
    },[filteredQuestion])
    const checkAnswer=(answerText,index)=>{
        if(answerText==filteredQuestion.correct_answer){
            SetScore(score+1);
        }
        setSelectAnswerIndex(index)
        SetAnswered(true)
    }

    const onReset=()=>{
        setActiveQuiz(false);
        SetScore(0);
        setIndexQuestion(0);
    }


  return (
    <>
    {
        activeResults?(
            <Results questionsFiltered={questionsFiltered}  score={score} onReset={onReset} />
        ):(
            <>
                        <div className="flex flex-col justify-between shadow-md shadow-slate-300 max-w-[600px] max-h-[600px] p-10 rounded-lg py-2">
            <div className='flex justify-between'>
                <span className="text-xl font-bold">
                    {indexQuestion+1}/{questionsFiltered.length}
                </span>
                <div>
                    <span className="font-semibold">
                        Dificultad:
                    </span>
                    <span className="font-bold">
                        {filteredQuestion.difficulty}
                    </span>
                </div>
            </div>
            <button className="px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={()=>setActiveQuiz(false)}
            >
                Reiniciar
            </button>
            <div>
                <h1 className='font-bold'>{filteredQuestion.question}</h1>
            </div>
    
        <div className="grid grid-cols-2 gap-5">
    
        {
            answersRandom.map((answer,index)=>(
                <button className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                    selectAnswerIndex!=null && index==selectAnswerIndex ? 
                    answer==filteredQuestion.correct_answer ? 'bg-green-500':'bg-red-500'
                    :
                    ''
                }`}
                key={index}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex!=index}
                >
                <p className='font-mediudm text-center text-sm'>
                    {answer}
                </p>
            </button>
            ))
        }
    
        </div>    
        </div>
        <div>
        {
            indexQuestion+1==questionsFiltered.length? (
                <button className='borer-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium' onClick={()=>{
                    SetAnswered(false)
                    setActiveResults(true)
                }}>
                Finalizar 
            </button>
            ): (
                <button className='border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium 'style={{ marginTop: '10px' }} onClick={onNexQuestion}>
                Siguiente pregunta
            </button>
            )
        }</div>    
        </>
        )
    }
    </>
  )
}
