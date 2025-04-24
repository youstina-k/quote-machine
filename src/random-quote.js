import React,{ useState , useEffect } from 'react';
import "./random-quote.css"


const QuoteMachine =()=>{
 const [quote,setQuote]= useState("loading..");
 const [author,setAuthor]=useState("");

 const quoteFetch =async()=>{
  try{
   const response = await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json");
   const data =await response.json();
   const random = data[Math.floor(Math.random() * data.length)];
    
   setQuote(random.text);
   setAuthor(random.author);
  }
  catch (error) {
  console.error("Error fetching quote:", error);
  }
 };
 useEffect(()=>{quoteFetch();}, []);
 return(
  <div className='wrapper'>
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">-{author}</p>
      <button id="new-quote" onClick={quoteFetch}>new Quote</button>
    </div>
  </div>
 );
};
export default QuoteMachine;