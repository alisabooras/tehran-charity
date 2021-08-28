import './Infoboard.css'
import portrait from  './portrait.png'
import {Link} from 'react-router-dom'

function Infoboard() {
    return (
        <>
            <section className="infoboard">
            <br />
                <div id="board-show">
                    <div class="progress" id="progress-show">
                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="num-title">
                        <span className="numbers">54787887888787</span>
                        <span className="titles" dir="rtl">هزینه مورد نیاز:</span>
                            <br />
                        <span className="numbers" dir="ltr">4878000000000</span>
                        <span className="titles" dir="rtl">میزان پرداختی تاکنون:</span>
                            <br />
                        <span className="numbers" dir="ltr">9580000000 </span>
                        <span className="titles" dir="rtl">هزینه باقی مانده:</span>
                        <img src={portrait} alt="portrait" />
                    </div>
                     <button className="btn help-btn-1"><Link className="conti-link" to="/contribution" >حمایت از بیماران نیازمند</Link></button>
                     <button className="btn btn-success help-btn-2"><Link className="conti-link" to="/contribution" >اهدا کنید</Link></button>
                </div>
            
            <div className="hidden-line"></div>
            
            <div className="info-text ">
                <div dir="rtl">
                    <p >مجمع خیرین سلامت کشور محمل وجایگاهی است که بنا دارد واسطه خیری باشد در تحقق اهداف مقدس خیرین با نیاز های نظام سلامت کشور و نیازمندانی که در این طریق محتاج یاریند .بی شک راهکارهای دستیابی به اهداف بلند و متعالی در این مسیر همسو با حرکت جامعه بسوی اهداف سعادت بخش مستلزم شناخت بیشتر و بکارگیری تجارب و توانمندی مختلف افراد صاحب نظر است و بر همین اساس وبا لطف ایزد منان زمینه ای فراهم گردید تا جمعی از دوستان متعهد و علاقمند به امور استفاده کنیم.</p>
                </div>
            </div>
            </section>
        </>
    )
}

export default Infoboard
