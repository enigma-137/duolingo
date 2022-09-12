import HeaderImage from '../images/mainheader-image.png'
import './Header.css'
import '../index.css'
const Header = () => {
  return (
    

      <div className="main__header">
        <div className="header__left">
          <img src={HeaderImage} className ="header__img" alt="" srcset="" />
        </div>
        <div className="header__right">
          <h1> The free, fun, and effective way to learn a language!</h1>

          <button className="header-btn"> Get started</button> 
          <button className="header-btn2"> I ALREADY HAVE AN ACCOUNT</button> 

          </div>


      </div>
    
  )
}

export default Header