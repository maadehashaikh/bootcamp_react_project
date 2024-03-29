
import logo from './logo.svg';
import './App.css';
import News from './commponent/news';
import { useState } from 'react';
function App() {
  const [count , setCount] = useState(0);
  return (
   <>
   {/* Nav bar here  */}
   <div className='navbar'>
    <div className='logo'>
    <img src='https://s.yimg.com/zb/imgv1/04eb2405-7ccf-3059-96e6-83c3cc778823/t_500x300'></img>
    </div>
    <div className='navs'>
      <ul>
        <a>SALE</a>
        <a>NEW IN</a>
        <a className='special'>#INSTAKHAADI</a>
        <a>FABRICS</a>
        <a>READY TO WEAR</a>
      </ul>
      </div>
      <div className='icons'>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-regular fa-address-book"></i>
      <i class="fa-solid fa-bag-shopping"></i>
      </div>
   </div>
   {/* -------------------------------- */} 

   <div className='main_page'>
    <img className='first_img' src='https://pk.khaadi.com/on/demandware.static/-/Sites-khaadi-master-catalog/default/dweda1df0a/images/hi-res/eet24369_d-purple_2.jpg'></img>
    <img className='second_img' src='https://pk.khaadi.com/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw11fcc61c/images/hi-res/eeb24324_black_2.jpg'></img>
   </div>
   <div className='main_div_content'><h1>Chunari</h1> <br/><h2> edits</h2><br/> <span> Ready To Wear Eid Collection</span> </div>






















   {/* <div className='main_heading'>
    <h1>Welcome to The Best News Website !</h1>
    <h4>Where you'll explore the see of information all around the world !!! </h4>
    </div>
    <News title={"News One"} image={"https://media.istockphoto.com/id/1089195648/photo/3d-rendering-of-human-in-vr-headset-on-futuristic-technology.jpg?s=1024x1024&w=is&k=20&c=X_8RBFtYeiIlygTrU9OyTUEyRuyi0_Tcqo4h0fUdtGw="}></News>

    <News title={"News Two"} image={"https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3BhcGVyfGVufDB8fDB8fHww"} ></News>

    <News title={"News Three"} image={"https://images.unsplash.com/photo-1493972741200-51d407e0ee33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3BhcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"}></News>

    <News title={"News Four"} image={"https://media.istockphoto.com/id/1138515876/photo/block-chain-network-concept-on-technology-background.jpg?s=1024x1024&w=is&k=20&c=KgMiu9_t7qt7mQNxgXLDddMV8oCCMpH_R_JjmL-kQkY="}></News>
  
    <News title={"News Five"} image={"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3NwYXBlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"}></News>

    <News title={"News Six"} image={"https://media.istockphoto.com/id/1192070239/photo/abstract-digital-news-concept.jpg?s=1024x1024&w=is&k=20&c=hf3O9HZpnn5RoomntLIxFT7uwBqFwTXulr-Z3pPTZGA="}></News> */}
</>
    
  );
}

export default App;
// jsx javascript xml means ap js mai html ko or html mai js ko run kar skty ho  
// jahn bh layout same ho but data jo pass ho rha h woh different ho it is just because of props 
// simply hooks react kay features ko apny components ko render ya use karny kay liyay hoty hain 