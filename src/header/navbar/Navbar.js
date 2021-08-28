import './Navbar.css'
import helphand from './helphand.png'
import address from './address.png'
import contactus from './contactus.png'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {

    return (
        <>
            {/* side menu */}
            <ul class="list-group" id="side-menu">
                <li class="list-group-item" title="کمک کردن"><Link to="/contribution"><img src={helphand} alt="icon" /></Link></li>
                <li class="list-group-item" title="آدرس ما"><Link to="./contact"><img src={address} alt="icon" /></Link></li>
                <li class="list-group-item" title="ارتباط با ما"><a href="#"><img src={contactus} alt="icon" /></a></li>
            </ul>

            <nav className="navi navbar">
                <ul class="nav ms-auto p-2" dir="rtl">
                    <li class="nav-item">
                        <a className="nav-link" href="#" >صفحه اصلی</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" disabled>
                            آشنایی با مجمع خیرین
                        </a>
                        <ul class="dropdown-menu nav-hover">
                            <li><a class="dropdown-item" href="#">تاریخچه</a></li>
                            <li><a class="dropdown-item" href="#">اعضای مجمع عمومی</a></li>
                            <li><a class="dropdown-item" href="#">هیت مدیریه</a></li>
                            <li><a class="dropdown-item" href="#">دبیرکل مجمع</a></li>
                            <li><a class="dropdown-item" href="#">معاونان و مشاوران</a></li>  
                        </ul>
                        </li>

                        <li class="nav-item" >
                            <a class="nav-link" href="#">
                                شوراها
                            </a>
                            <ul class="dropdown-menu nav-hover">
                                    <li><a class="dropdown-item" href="#">شوارای زنان</a></li> 
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" id="link3">
                                رسانه
                            </a>
                            <ul class="dropdown-menu nav-hover">
                                    <li><Link class="dropdown-item" to="/photos">تصاویر</Link></li> 
                                    <li><Link class="dropdown-item" to="/videos">ویدیوها</Link></li> 
                            </ul>
                        </li>

                    <li class="nav-item">
                        <a class="nav-link " href="#">اخبار</a>
                    </li>

                    <li class="nav-item">
                            <a class="nav-link" href="#" id="link4">
                                قوانین و مقررات
                            </a>
                            <ul class="dropdown-menu nav-hover">
                                    <li><a class="dropdown-item" href="#">اسناد راهبردی ملی</a></li> 
                                    <li><a class="dropdown-item" href="#">اسناد راهبردی مجمع</a></li> 
                            </ul>
                        </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">تماس با ما</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">شهرها</a>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link " to="/contribution">اهدا کردن</NavLink>
                    </li>              
                </ul>
                <form className="searchbar">
                  <i class="fas fa-search block-icon"></i>
                  <input type="text" placeholder="جستجو.." dir="rtl"  />  
               </form>
          </nav>
        </>
    )
}

export default Navbar
