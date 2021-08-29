import './Footer.css'
import trust from './trust.png'

function Footer() {
    return (
        <>
            <footer className="p-5">
                <div className="container-fluid">
                <div className="row row-cols-1 row-cols-lg-4 gy-5">
                    {/* actions */}
                    <div className="col-12 col-lg-3 directory order-last" >
                            <h5>فعالیتها</h5>
                            <hr className="footer-hr" />
                                <ul className="list-group">
                                    <a target="_blank" href="#" className="list-group-item">همایش ها</a>
                                    <a target="_blank" href="#" className="list-group-item">ویژه نامه</a>
                                    <a target="_blank" href="#" className="list-group-item">گزارشات آماری</a>
                                    <a target="_blank" href="#" className="list-group-item">گاهنامه</a>
                                </ul>
                    </div>

                    {/* dirctory */}
                    <div className="col-12 col-lg-3 directory order-last">
                            <h5>پیوندها</h5>
                            <hr className="footer-hr" />
                                <ul className="list-group">
                                    <a target="_blank" href="https://www.leader.ir/fa" className="list-group-item">دفتر مقام معظم رهبری</a>
                                    <a target="_blank" href="http://www.imam-khomeini.ir/" className="list-group-item">پرتال پژوهشی و اطلاع رسانی موسسه تنظیم</a>
                                    <a target="_blank" href="http://www.imam-khomeini.ir/" className="list-group-item">ونشر آثار امام خمینی(ره)</a>
                                    <a target="_blank" href="https://www.president.ir/fa/" className="list-group-item">ریاست جمهوری اسلامی ایران</a>
                                    <a target="_blank" href="http://www.parliran.ir/" className="list-group-item">مجلس شورای اسلامی ایران</a>
                                    <a target="_blank" href="https://www.irib.ir/" className="list-group-item">سازمان صدا و سیما</a>
                                    <a target="_blank" href="https://www.tehran.ir/default.aspx" className="list-group-item">شهرداری تهران</a>
                                    <a target="_blank" href="https://www.icro.ir" className="list-group-item">سازمان فرهنگ و ارتباطات اسلامی</a>
                                </ul>
                    </div>
                    
                    {/* contact */}
                    <div className="col-12 col-md-12 col-lg-3 order-lg-last" id="contact">
                         <h5>اطلاعات تماس</h5>
                         <hr className="footer-hr" />
                         
                        <ul className="list-group" id="contact">
                            <li className="list-group-item" id="address" dir="rtl"><i className="fas fa-home"></i>  تهران - میدان نوبنیاد - خیابان لنگری  خیابان صنایع - پلاک 43 </li>
                            <hr />
                            <li className="list-group-item contact" dir="rtl"><i className="fas fa-phone"></i> <a href="tel:02171149000" dir="ltr">+9871149000</a></li>
                            <hr />
                            <li className="list-group-item contact" dir="rtl"><i className="fas fa-envelope"></i> <a href="mailto:info@salamat-charity.ir">info@salamat-charity.ir</a></li>
                        </ul>
                     </div>

                     {/* logo */}
                    <div className="col-12 col-md-12 col-lg-3 order-first order-lg-last">

                        <h5>نماد الکترونیکی</h5>
                        <hr className="footer-hr" />
                        <a target="_blank" href="#">
                            <img src={trust} alt="trust" />
                        </a>
                    </div>

                 

                  
                 
                 


                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
