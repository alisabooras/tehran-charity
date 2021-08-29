import './Navbar.css'
import helphand from './helphand.png'
import address from './address.png'
import contactus from './contactus.png'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {

    return (
        <>
            {/* side menu */}
            <ul className="list-group" id="side-menu">
                <li className="list-group-item" title="کمک کردن"><Link to="/contribution"><img src={helphand} alt="icon" /></Link></li>
                <li className="list-group-item" title="آدرس ما"><Link to="./contact"><img src={address} alt="icon" /></Link></li>
                <li className="list-group-item" title="ارتباط با ما"><a href="#"><img src={contactus} alt="icon" /></a></li>
            </ul>

            <nav className="navi navbar">
                <ul className="nav ms-auto p-2" dir="rtl">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" >صفحه اصلی</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#" disabled>
                            آشنایی با مجمع خیرین
                        </a>
                        <ul className="dropdown-menu nav-hover">
                            <li><a className="dropdown-item" href="#">تاریخچه</a></li>
                            <li><a className="dropdown-item" href="#">اعضای مجمع عمومی</a></li>
                            <li><a className="dropdown-item" href="#">هیت مدیریه</a></li>
                            <li><a className="dropdown-item" href="#">دبیرکل مجمع</a></li>
                            <li><a className="dropdown-item" href="#">معاونان و مشاوران</a></li>  
                        </ul>
                        </li>

                        <li className="nav-item" >
                            <a className="nav-link" href="#">
                                شوراها
                            </a>
                            <ul className="dropdown-menu nav-hover">
                                    <li><a className="dropdown-item" href="#">شوارای زنان</a></li> 
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" id="link3">
                                رسانه
                            </a>
                            <ul className="dropdown-menu nav-hover">
                                    <li><Link className="dropdown-item" to="/photos">تصاویر</Link></li> 
                                    <li><a className="dropdown-item" href="#">ویدیوها</a></li> 
                            </ul>
                        </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">اخبار</a>
                    </li>

                    <li className="nav-item">
                            <a className="nav-link" href="#" id="link4">
                                قوانین و مقررات
                            </a>
                            <ul className="dropdown-menu nav-hover">
                                    <li><a className="dropdown-item" href="#">اسناد راهبردی ملی</a></li> 
                                    <li><a className="dropdown-item" href="#">اسناد راهبردی مجمع</a></li> 
                            </ul>
                        </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">تماس با ما</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">شهرها</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/contribution">اهدا کردن</NavLink>
                    </li>              
                </ul>
                <form className="searchbar">
                  <i className="fas fa-search block-icon"></i>
                  <input type="text" placeholder="جستجو.." dir="rtl"  />  
               </form>
          </nav>
        </>
    )
}

export default Navbar
