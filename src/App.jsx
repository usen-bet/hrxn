import Pic1 from './assets//Pics/Pic1.png'
import Pic2 from './assets//Pics/Pic2.png'
import Pic3 from './assets//Pics/Pic3.png'
import logo from './assets//Pics/no-bgLogo.png'
import Navbar from './Components/Navbar/Navbar'
import Car from './Components/Car'
import FB from './assets//Pics/Icons/FB.png' 
import IG from './assets//Pics/Icons/IG.png' 
import WA from './assets//Pics/Icons/WA.png' 
import x from './assets//Pics/Icons/x.png' 
import Phone from './assets//Pics/Icons/Phone.png'
import './App.css'
import './global.scss'

function App() {

  return (
    <div className="Homepage">
      <div className="third dashboard">
        <Navbar />
        <div className="title">
        <h1 className="header">BEAUTY, GRACE & ELEGANCE</h1>
        <p className="title-p">Traverse the MAVERICK collection</p>
        <button className='btn'>Explore the Catalogue</button>
        </div>
          <div className='title-reel'>
          <div className='card'>
            <p>
             Discover the latest trends, timeless pieces, and exclusive collections tailored to elevate your wardrobe.  
            </p>  
          </div>  
          <img src={Pic1} alt='pic1' className='img ing3'/>
          <img src={Pic2} alt='pic2' className='img ing2'/>
          <img src={Pic3} alt='pic3' className='img ing'/>
          </div>
      </div>
      <div className="third half thirds">
        <div className='write-up pat'>
          <p className='para'>
            Embrace your unique style and let <br/> your personality shine through <br/> every outfit.
          </p>
          </div>
        <div className='write-up'>
        <div className='carousel'>
        <Car />
        </div>
        </div>
      </div>
      <div className='footer'>
       <div className='foot-container'>
       <div className='foot-details'>
        <img src={logo} className='logo1'/>
        <div className='foot-icons'>
         <div className='bigCircle'>
          <div className='smallCircle'>
           <img src={x} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <img src={IG} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <img src={FB} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <img src={WA} />
          </div>
         </div>
         <div className='bigCircle'>
          <div className='smallCircle'>
          <img src={Phone} />
          </div>
         </div>
        </div></div>
      <div className="foot-links">
        <ul>
          <li>
           <a>New-in</a>
          </li>
          <li>
           <a>Shirts</a>
          </li>
          <li>
           <a>Hoodies</a>
          </li>
          <li>
           <a>About</a>
          </li>
        </ul>
        <ul>
        <li>
         <a>Customer Care</a>
        </li>
        <li>
         <a>Order Tracking</a>
        </li>
        <li>
        <a>Shopping Cart</a>
        </li>
        <li>
        <a>Wishlist</a>
        </li>
        <li>
        <a>Login</a>
        </li>
        </ul>
      </div>
      </div> 
      </div>
    </div>
  )
}

export default App
