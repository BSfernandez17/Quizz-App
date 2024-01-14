import React from 'react'
import  {imgs,categories} from '../data'
import {Link} from 'react-router-dom'
import { CategoryCard } from './CategoryCard'
const [imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia]=imgs
export const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
     <CategoryCard
     category={categories.ciencia}
     src={imgCiencia}
     alt={`Categoria ${categories.ciencia}`}
     gradientColor='from-purple-500 to-pink-500'
     />

     <CategoryCard
     category={categories.deportes}
     src={imgDeportes}
     alt={`Categoria ${categories.deportes}`}
     gradientColor={' from-red-500 to-orange-400'}
     />

    <CategoryCard
    category={categories.filosofia}
    src={imgFilosofia}
    alt={`Categoria ${categories.filosofia}`}
    gradientColor={' from-lime-400 to-teal-700'}
    />

    <CategoryCard
     category={categories.geografia}
     src={imgGeografia}
     alt={`Categoria ${categories.geografia}`}
    gradientColor={'from-blue-500 to-sky-200'}
    />

     <CategoryCard
     category={categories.historia}
     src={imgHistoria}
     alt={`Categoria ${categories.historia}`}
     gradientColor={'from-yellow-500 to-yellow-100'}
     />

    <CategoryCard
    category={categories.literatura}
    src={imgLiteratura}
    alt={`Categoria ${categories.literatura}`}
    gradientColor={'from-green-500 to-emerald-300'}
    />

    <CategoryCard
    category={categories.tecnologia}
    src={imgTecnologia}
    alt={`Categoria ${categories.literatura}`}
    gradientColor={'from-cyan-300 to-slate-500'}
    />
    </div>
  )
}
