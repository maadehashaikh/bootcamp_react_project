import logo from './logo.svg';
import './App.css';
import News from './commponent/news';
import { useState } from 'react';
function App() {
  const [count , setCount] = useState(0);
  return (
   <>
   <div><h1>Hello this is my First React App</h1></div>
    <News></News>
   </>
    
  );
}

export default App;
// jsx javascript xml means ap js mai html ko or html mai js ko run kar skty ho  