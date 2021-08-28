import './mobile-nav'
import './MobileNav.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function MobileNav() {
    const [navToggle, setNavToggle] = useState(false)
    return (
        <>
            <nav className="navbar" id="wrapper">
                <div className="container-fluid">
                    
                    <button onClick={() => setNavToggle(!navToggle)} className={`navbar-toggler ${navToggle && "text-danger"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className={`fas ${navToggle ? "fa-times text-danger" : "fa-bars"}`}> </i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">صفحه اصلی</Link>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="link1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            آشنایی با مجمع خیرین
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="link1">
                            <li><a className="dropdown-item" href="#">تاریخچه</a></li>
                            <li><a className="dropdown-item" href="#">اعضای مجمع عمومی</a></li>
                            <li><a className="dropdown-item" href="#">هیت مدیریه</a></li>
                            <li><a className="dropdown-item" href="#">دبیرکل مجمع</a></li>
                            <li><a className="dropdown-item" href="#">معاونان و مشاوران</a></li>  
                        </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                شوراها
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">شوارای زنان</a></li> 
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="link3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                رسانه
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="link3">
                                    <li><Link className="dropdown-item" to="/photos">تصاویر</Link></li> 
                                    <li><a className="dropdown-item" href="#">ویدیوها</a></li> 
                            </ul>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">اخبار</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="link4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                قوانین و مقررات
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="link4">
                                    <li><a className="dropdown-item" href="#">اسناد راهبردی ملی</a></li> 
                                    <li><a className="dropdown-item" href="#">اسناد راهبردی مجمع</a></li> 
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact">تماس با ما</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">استانها</a>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/contribution">اهدا کردن</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MobileNav

