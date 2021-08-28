import './News1.css'
import picslider from './picslider.jpg'
import news2 from '../news2.jpg'
import news3 from '../news3.jpg'



function News1() {
    return (
        <>
            <section className="news-1">
                        <span className="news-head" dir="rtl"><h4>آخرین اخبار مجمع <i class="far fa-newspaper"></i></h4></span>

                        <div id="carouselCaptions"  class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" data-bs-touch="true">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="row container-fluid">
                                        <div className="col-lg-6">
                                            <img src={picslider} alt="slider" className="img-fluid img-thumbnail" />
                                        </div>

                                        <div className="news-text-lg col-lg-6">
                                            <h4 dir="rtl" className="news-title d-none d-lg-block">اهداء یک دستگاه رادیوگرافی و یونیت دندانپزشکی</h4>
                                            <p dir="rtl" className="d-none d-lg-block">
                                                خیریه های سلامت مثل خیریه دیابت اصفهان کمک بزرگی در جهت رشد و پیشرفت دانش سلامت در اصفهان کرده است سید حسین رضازاده در گفت و گو با خبرنگار ایراسین در ارتباط با نقش خیریه های سلامت در پیشبرد سلامت و پیشگیری و درمان اظهار داشت: خیریه های سلامت در نیم قرن گذشته نقش موثری در امر آموزش، پیشگیری و درمان داشته است که خیریه تخصصی دیابت نیز در این سه بخش به خوبی ورود پیدا کرده است. تجهیزات پزشکی و رفع نیازها و کمبودهای دولتی مثل بخش دیالیز، NICU و غیره دیده شده است.
                                            </p>
                                        </div>
                                        <a href="#" className="title-sm btn d-block d-lg-none">اهداء یک دستگاه رادیوگرافی و یونیت</a>
                                    </div>
                                </div>

                            {/* item 2 */}

                            <div class="carousel-item">
                                    <div className="row container-fluid">
                                        <div className="col-lg-6">
                                            <img src={news2} alt="slider" className="img-fluid img-thumbnail" />
                                        </div>

                                        <div className="col-lg-6 news-text-lg">
                                            <h4 dir="rtl" className="news-title d-none d-lg-block">ارتباطات در دوره پاندمی</h4>
                                            <p dir="rtl" className="d-none d-lg-block">
                                                خیریه های سلامت مثل خیریه دیابت اصفهان کمک بزرگی در جهت رشد و پیشرفت دانش سلامت در اصفهان کرده است سید حسین رضازاده در گفت و گو با خبرنگار ایراسین در ارتباط با نقش خیریه های سلامت در پیشبرد سلامت و پیشگیری و درمان اظهار داشت: خیریه های سلامت در نیم قرن گذشته نقش موثری در امر آموزش، پیشگیری و درمان داشته است که خیریه تخصصی دیابت نیز در این سه بخش به خوبی ورود پیدا کرده است. تجهیزات پزشکی و رفع نیازها و کمبودهای دولتی مثل بخش دیالیز، NICU و غیره دیده شده است.
                                            </p>
                                        </div>
                                        <a href="#" className="title-sm btn d-block d-lg-none">ارتباطات در دوره پاندمی</a>
                                    </div>
                                </div>
                            {/* item 3 */}

                            <div class="carousel-item">
                                    <div className="row container-fluid">
                                        <div className="col-lg-6">
                                            <img src={news3} alt="slider" className="img-fluid img-thumbnail" />
                                        </div>

                                        <div className="col-lg-6 news-text-lg">
                                            <h4 dir="rtl" className="news-title d-none d-lg-block">هزینه بیماری های نادر</h4>
                                            <p dir="rtl" className="d-none d-lg-block">
                                                خیریه های سلامت مثل خیریه دیابت اصفهان کمک بزرگی در جهت رشد و پیشرفت دانش سلامت در اصفهان کرده است سید حسین رضازاده در گفت و گو با خبرنگار ایراسین در ارتباط با نقش خیریه های سلامت در پیشبرد سلامت و پیشگیری و درمان اظهار داشت: خیریه های سلامت در نیم قرن گذشته نقش موثری در امر آموزش، پیشگیری و درمان داشته است که خیریه تخصصی دیابت نیز در این سه بخش به خوبی ورود پیدا کرده است. تجهیزات پزشکی و رفع نیازها و کمبودهای دولتی مثل بخش دیالیز، NICU و غیره دیده شده است.
                                            </p>
                                        </div>
                                        <a href="#" className="title-sm btn d-block d-lg-none">هزینه بیماری های  نادر</a>
                                    </div>
                                </div>



                            </div>                                                                        
                        </div>
            </section>


            <div className="between"></div>
        </>
    )
}

export default News1
