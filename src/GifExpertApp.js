
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ["one puch", "samurai x", "Dragon ball"];

  const [categories, setCategories] = useState(["Dragon ball"]);

  //const handleAdd = (e)=>{
  //   //setCategories([...categories, "HunterXHunter"]);agrega al final
  //   //setCategories(["HunterXHunter",...categories]);
    //setCategories (cats=>[...cats,""]);
  return (
    <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={ setCategories }/>
        <hr />
       <ol>
         {
         categories.map( category =>(
          <GifGrid
          key={category} 
          category={category}
          />
          
         ))
          }
       </ol>
    </>
  )
        }

