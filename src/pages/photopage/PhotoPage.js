import Footer from "../../components/footer/Footer"
import Navbar2 from "../2-Navbar/Navbar2"
import './PhotoPage.css'
import photopage1 from './photopage1.jpg'
import photopage2 from './photopage2.jpg'
import photopage3 from './photopage3.jpg'
import photopage4 from './photopage4.jpg'
import photopage5 from './photopage5.jpg'
import photopage6 from './photopage6.jpg'

function PhotoPage() {
    return (
        <div className="bg-page">  
            <Navbar2 />
            <hr />
            <section id="photos" className="mt-5">

                    <div className="container">
                        <div className="row shadow">
                               <div className="col-md-4  mt-4 mt-sm-0 my-sm-5">
                                    <div className="card">
                                        <div className="shrink">
                                            <img className="card-img-top" src={photopage1}
                                                alt="Card image cap" className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                        <h4 className="card-header">معرفی مجمع</h4>
                                            <a className="btn btn-light d-block mt-4">ادامه مطلب</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 mt-4 mt-sm-0 my-sm-5">
                                    <div className="card g-4">
                                        <div className="shrink">
                                            <img className="card-img-top" src={photopage2}
                                                alt="Card image cap" className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                        <h4 className="card-header">کنگره</h4>
                                            <a className="btn btn-light d-block mt-4">ادامه مطلب</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 mt-4 mt-sm-0 my-sm-5">
                                    <div className="card">
                                        <div className="shrink">
                                            <img className="card-img-top" src={photopage3}
                                                alt="Card image cap" className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                        <h4 className="card-header">اجلاس و نشستها</h4>
                                            <a className="btn btn-light d-block mt-4">ادامه مطلب</a>
                                        </div>
                                    </div>                              
                                </div>

                            
                                <div className="col-md-4 mt-4 mt-sm-0 my-sm-5">
                                    <div className="card">
                                        <div className="shrink">
                                            <img className="card-img-top" src={photopage4}
                                                alt="Card image cap" className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                        <h4 className="card-header">افتتاح پروژه</h4>
                                            <a className="btn btn-light d-block mt-4">ادامه مطلب</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 mt-4 mt-sm-0 my-sm-5">
                                    <div className="card">
                                        <div className="shrink">
                                            <img className="card-img-top" src={photopage5}
                                                alt="Card image cap" className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                        <h4 className="card-header">دیدار مسئولین</h4>
                                            <a className="btn btn-light d-block mt-4">ادامه مطلب</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 mt-4 mt-sm-0 my-sm-5">
                                    <div className="card">
                                        <div className="shrink">
                                            <img className="card-img-top" src={photopage6}
                                                alt="Card image cap" className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                        <h4 className="card-header">تقدیر</h4>
                                            <a className="btn btn-light d-block mt-4">ادامه مطلب</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>   
                    <br />
                    <br />
                    <br />
            <Footer />
            </section>
        </div>
    )
}

export default PhotoPage
