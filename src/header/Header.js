import './Header.css'
import logo from '../pics/logo.png'
import aparat from '../pics/aparat.png'
import instagram from '../pics/instagram.png'
import Login from './form/login/Login'
import Signup from './form/sign up/Signup'
import MobileNav from './mobile-nav/MobileNav'
import Navbar from './navbar/Navbar'



function Header() {
    return (
        <div className="background">
      
            <section className="board">
                <h3>مجمع خیرین سلامت استان تهران</h3>
                <img src={logo} alt="logo" className="d-none d-lg-block" />
            </section>
            
            <section className="call my-lg-4 mx-lg-3">
                <a href="tel:0217149000" className="btn btn-light"><i className="fas fa-phone-alt"></i> 17149000</a>
                <div className="btn-group mx-3" role="group">
                    <a href="#" className="btn btn-light" title="aparat"><img className="aparat" src={aparat} alt="aparat"/></a>
                    <a href="https://www.instagram.com/majma_khayerin_salamat" target="_blank" className="btn btn-light" title="instagram"><img className="instagram" src={instagram} alt="instagram"/></a>
                </div>
            </section>
            
            <section className="log">
                <Signup />
                <Login />
            </section>
            {/* navbar */}
            {/* mobile */}
            <MobileNav />
            {/* dekstop */}
            <Navbar />

        </div>
    )
}

export default Header
