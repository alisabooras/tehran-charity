import './CardUser.css';
import circle from './circle.jpg'
import avatar from './avatar.png'

const CardUser = () => {
    return (
        <>
            <section className="carduser">
                <div className="carduser-text">
                    <div className="container-fluid">
                       <p dir="rtl">خیرین سلامت کشور محمل وجایگاهی است که بنا دارد واسطه خیری باشد در تحقق اهداف مقدس خیرین با نیاز های نظام سلامت کشور و نیازمندانی که در این طریق محتاج یاریند .بی شک راهکارهای دستیابی به اهداف بلند و متعالی در این مسیر همسو با حرکت جامعه بسوی اهداف سعادت بخش مستلزم شناخت بیشتر و بکارگیری تجارب و توانمندی مختلف افراد صاحب نظر است و بر همین اساس وبا لطف ایزد منان زمینه ای فراهم گردید تا جمعی از دوستان متعهد و علاقمند به امور دعوت به همکاری میشود </p>
                       <img src={circle} alt="circle" />
                       <h5>کمپین های سلامت</h5>
                    </div>
                </div>

            {/* card flex */}
            <div className="flexuser-card">
                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">خدمات پزشکی</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">مصالح ساختمانی</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">پیمانکاری</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">ملک</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">ملک</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">خدمات پزشکی</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">خدمات پزشکی</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={avatar} className="card-img-top img-fluid" alt="user" />
                        <div className="card-body text-center">
                             <a href="#" className="btn p-2">پیمانکاری</a>
                        </div>
                    </div>

                    

                    
            </div>

            </section>
            
             
        

        </>
    )
}

export default CardUser
