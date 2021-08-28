import './Progress.css'
import { Link } from 'react-router-dom'

function Progress() {
    return (
        <>
            <section className="progress-menu">
                <div className="container">
                   <div className="row">
                       <div className="col-lg-7 mt-2">
                        <div className="progress" id="progess-donation">
                            <div id="progess-donation-line" className="progress-bar progress-bar-animated progress-bar-striped bg-success" role="progressbar"></div>  
                        </div>
                       </div>
                       <div className="col-lg-5 mt-3 mt-lg-0">
                             <Link className="btn btn-success btn-help1" to="/contribution">اهداکنید</Link>
                             <Link className="btn btn-help2" to="/contribution">حمایت از بیماران مبتلا به کرونا</Link> 
                       </div>
                   </div>
                    <div className="btn-group group-help">
                        <button className="btn btn-help3">مشاهده تمام پروژه ها</button> 
                        <button className="btn btn-help4">کلیک کنید</button> 
                    </div>
                </div>
            </section>
            <div className="between"></div>
        </>
    )
}

export default Progress
