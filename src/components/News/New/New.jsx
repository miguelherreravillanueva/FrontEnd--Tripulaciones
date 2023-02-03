import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../../../features/news/newSlice';
import "./New.css";


const New = () => {

  const {news, isLoading} = useSelector(state => state.news)

  console.log(news)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAll())
  }, []); 
  
  const newN = news.map((a) => {

    const name = ((a || {}).image).name;
     
    if (isLoading){
      return <h1>cargando...</h1>
    }

    const imageUrl = "http://localhost:8000/images/news/"

    console.log(imageUrl)
    
    return (
      <div className="newN">
        {a.title}
        <br />
        {a.body}
        <img src={imageUrl + a.image} className="newimg" alt="newimg"></img>
      </div>
    );
  });

  return <div>{newN}</div>;
};

export default New;