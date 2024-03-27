import React from 'react'
import './style.css'
const News = (props) => {
  return (
    <>
    <div className='news-div'>
    <img src={props.image}/>
    <h1>{props.title}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae quibusdam soluta in quas eveniet. Libero saepe ullam suscipit fuga adipisci unde dolores, doloremque non reprehenderit molestias perferendis quasi necessitatibus.</p>
    <button className='btn'>READ MORE</button>
    </div>
    </>
  )
}

export default News
