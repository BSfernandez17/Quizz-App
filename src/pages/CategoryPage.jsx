import { CategoryList } from '../components/CategoryList'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { questions,imgs } from '../data'
import { Question } from '../components/Question'
const shuffleArray=(array)=>{
  const newArray=array.sort(()=>Math.random -0.5);
  return newArray.slice(0,5);
}

export const CategoryPage = () => {
  const {category}= useParams()
  const[questionsFiltered,SetquestionsFiltered]=useState(
    questions.filter(
    questions=>questions.category===category)
    )
    const [imgCategory] = imgs.filter(
      img => img === `/src/assets/${category.toLowerCase()}.png`
    );
    const [indexQuestion,setIndexQuestion]=useState(0);
    const [activeQuiz,setActiveQuiz]=useState(false);
    useEffect(()=>{
      const newQuestions=shuffleArray(questionsFiltered);
      SetquestionsFiltered(newQuestions);
    },[])
  return (
    <div className='container flex flex-col items-center justify-center gap-10' style={{
      height: 'calc(100vh-5rem)'
    }}>
    {
      activeQuiz? (    <Question 
        filteredQuestion={questionsFiltered[indexQuestion]} 
        setIndexQuestion={setIndexQuestion}
        indexQuestion={indexQuestion}
        questionsFiltered={questionsFiltered}
        setActiveQuiz={setActiveQuiz}
        />) : (
          <>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl tex-teal-900 text-center font-bold">{category}</h1>
            <div className='flex justify-center'>
              <img src={imgCategory} alt={category} className='w-72' />
            </div>
          </div>
          <button className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-500"
          onClick={()=>setActiveQuiz(true)}
          >
            Iniciar Quizz
          </button>
          </>

        )
    }
      

    </div>
  )
}
