import './Navbar2.css'
import brand from './brand.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

function Navbar2() {
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <>
             <nav className="navbar navbar-expand-md" id="navbar2">
                    <Link to="/" className="navbar-brand d-none d-lg-block"><img src={brand} alt="logo" /></Link>
                    <button onClick={handleToggle} className={`navbar-toggler ${isActive ? "text-danger" : "text-light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className={isActive ? "fas fa-times text-danger" : "fas fa-bars"}></i></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto p-2 p-md-1 container" dir="rtl">
                        <li className="nav-item">
                            <Link  className="nav-link" to="/">صفحه اصلی</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" dir="ltr" role="button" data-bs-toggle="dropdown">
                                آشنایی با مجمع خیرین
                            </a>
                            <ul className="dropdown-menu nav-hover">
                                <li><a className="dropdown-item" href="#">تاریخچه</a></li>
                                <hr  className="d-block d-md-none" />
                                <li><a className="dropdown-item" href="#">اعضای مجمع عمومی</a></li>
                                <hr  className="d-block d-md-none" />
                                <li><a className="dropdown-item" href="#">هیت مدیریه</a></li>
                                <hr  className="d-block d-md-none" />
                                <li><a className="dropdown-item" href="#">دبیرکل مجمع</a></li>
                                <hr  className="d-block d-md-none" />
                                <li><a className="dropdown-item" href="#">معاونان و مشاوران</a></li>  
                            </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" dir="ltr" role="button" data-bs-toggle="dropdown">
                                    شوراها
                                </a>
                                <ul className="dropdown-menu nav-hover">
                                        <li><a className="dropdown-item" href="#">شوارای زنان</a></li> 
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="link3" dir="ltr" role="button" data-bs-toggle="dropdown">
                                    رسانه
                                </a>
                                <ul className="dropdown-menu nav-hover">
                                        <li> <NavLink className="dropdown-item"  activeClassName="active" to='/photos' >تصاویر</NavLink></li> 
                                            <hr  className="d-block d-md-none" />
                                        <li><a className="dropdown-item" href="#">ویدیوها</a></li> 
                                </ul>
                            </li>

                        <li className="nav-item">
                            <a className="nav-link " href="#">اخبار</a>
                        </li>

                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="link4" dir="ltr" role="button" data-bs-toggle="dropdown">
                                    قوانین و مقررات
                                </a>
                                <ul className="dropdown-menu nav-hover">
                                        <li><a className="dropdown-item" href="#">اسناد راهبردی ملی</a></li> 
                                            <hr  className="d-block d-md-none" />
                                        <li><a className="dropdown-item" href="#">اسناد راهبردی مجمع</a></li> 
                                </ul>
                            </li>

                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active" to='/contact'>تماس با ما</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">شهرها</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/contribution">اهدا کردن</NavLink>
                        </li>              
                    </ul>
                </div>
          </nav>
        </>
    )
}

export default Navbar2
