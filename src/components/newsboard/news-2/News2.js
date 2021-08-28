import './News2.css'
import picslider2 from './picslider2.jpg'
import news2 from '../news2.jpg'
import news3 from '../news3.jpg'


function News2() {
    return (
        <>
            <section className="news-2">
                <span className="news-head" dir="rtl"><h4>آخرین اخبار شعب <i class="far fa-newspaper"></i></h4></span>

            <div id="carouselCaptions2"  class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" data-bs-touch="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">

                     <div class="carousel-item active">
                        <div className="row container-fluid">

                           {/* hidden in lg */}
                           <div className="col-lg-6 d-none d-lg-block">
                                    <h4 dir="rtl" className="news-title d-none d-lg-block">مسئول امور مشارکت‌های مردمی مجمع خیرین سلامت استان همدان از اجرای پویش «اهدای نفس» در این استان خبر داد</h4>
                                    <p dir="rtl" className="d-none d-lg-block">
                                        به گزارش خبرنگار گروه استان های باشگاه خبرنگاران جوان از همدان، حمید شاکری صفت، مسئول امور مشارکت‌های مردمی مجمع خیرین سلامت استان همدان با اشاره به اجرای پویش اهدای نفس، گفت: این پویش به منظور تهیه کپسول‌های اکسیژن برای بیماران کرونایی انجام می‌شود. او افزود: به همین منظور به درخواست دانشگاه علوم پزشکی ابن‌سینا در زمینه تهیه کپسول اکسیژن، مجمع خیرین سلامت استان پویش اهدای نفس را راه‌اندازی و از خیران محترم درخواست ارائه کمک‌های خود برای تهیه این کپسول‌ها کردند.
                                    </p>
                            </div>

                            <div className="col-lg-6">
                                <img src={picslider2} alt="slider" className="img-fluid img-thumbnail" />
                            </div>

                            {/* visible in sm */}
                            <div className="col-lg-6 d-block d-lg-none">
                                    <h4 dir="rtl" className="news-title d-none d-lg-block">مسئول امور مشارکت‌های مردمی مجمع خیرین از اجرای پویش «اهدای نفس» خبر داد</h4>
                                    <p dir="rtl" className="d-none d-lg-block">
                                        به گزارش خبرنگار گروه استان های باشگاه خبرنگاران جوان از همدان، حمید شاکری صفت، مسئول امور مشارکت‌های مردمی مجمع خیرین سلامت استان همدان با اشاره به اجرای پویش اهدای نفس، گفت: این پویش به منظور تهیه کپسول‌های اکسیژن برای بیماران کرونایی انجام می‌شود. او افزود: به همین منظور به درخواست دانشگاه علوم پزشکی ابن‌سینا در زمینه تهیه کپسول اکسیژن، مجمع خیرین سلامت استان پویش اهدای نفس را راه‌اندازی و از خیران محترم درخواست ارائه کمک‌های خود برای تهیه این کپسول‌ها کردند.
                                    </p>
                            </div>
                            <a href="#" className="title-sm btn d-block d-lg-none">اهداء یک دستگاه رادیوگرافی و یونیت</a>
                        </div>
                    </div>

                {/* item 2 */}
                <div class="carousel-item">
                        <div className="row container-fluid">
                            <div className="news-text-lg-2 col-lg-6 d-none d-lg-block">
                                    <h4 dir="rtl" className="news-title d-none d-lg-block">بیماری های لااعلاج</h4>
                                    <p dir="rtl" className="d-none d-lg-block">
                                       به گزارش خبرنگار گروه استان های باشگاه خبرنگاران جوان از همدان، حمید شاکری صفت، مسئول امور مشارکت‌های مردمی مجمع خیرین سلامت استان همدان با اشاره به اجرای پویش اهدای نفس، گفت: این پویش به منظور تهیه کپسول‌های اکسیژن برای بیماران کرونایی انجام می‌شود. او افزود: به همین منظور به درخواست دانشگاه علوم پزشکی ابن‌سینا.
                                    </p>
                            </div>
                            
                            <div className="col-lg-6">
                                <img src={news3} alt="slider" className="img-fluid img-thumbnail" />
                            </div>
                            {/* visible in sm */}
                            <div className="news-text-lg-2 col-lg-6 d-block d-lg-none">
                                    <h4 dir="rtl" className="news-title d-none d-lg-block">بیماری های لااعلاج</h4>
                                    <p dir="rtl" className="d-none d-lg-block">
                                       به گزارش خبرنگار گروه استان های باشگاه خبرنگاران جوان از همدان، حمید شاکری صفت، مسئول امور مشارکت‌های مردمی مجمع خیرین سلامت استان همدان با اشاره به اجرای پویش اهدای نفس، گفت: این پویش به منظور تهیه کپسول‌های اکسیژن برای بیماران کرونایی انجام می‌شود. او افزود: به همین منظور به درخواست دانشگاه علوم پزشکی ابن‌سینا.
                                    </p>
                            </div>

                            <a href="#" className="title-sm btn d-block d-lg-none">بیماری های لااعلاج</a>
                        </div>
                    </div>



                {/* item 3 */}

                <div class="carousel-item">
                        <div className="row container-fluid">
                            <div className="news-text-lg-2 col-lg-6 d-none d-lg-block">
                                    <h4 dir="rtl" className="news-title d-none d-lg-block">کمک به نیازمندان</h4>
                                    <p dir="rtl" className="d-none d-lg-block">
                                        به گزارش خبرنگار گروه استان های باشگاه خبرنگاران جوان از همدان، حمید شاکری صفت، مسئول امور مشارکت‌های مردمی مجمع خیرین سلامت استان همدان با اشاره به اجرای پویش اهدای نفس، گفت: این پویش به منظور تهیه کپسول‌های اکسیژن برای بیماران کرونایی انجام می‌شود. او افزود: به همین منظور به درخواست دانشگاه علوم پزشکی ابن‌سینا در زمینه تهیه کپسول.
                                    </p>
                            </div>
                            
                            <div className="col-lg-6">
                                <img src={news2} alt="slider" className="img-fluid img-thumbnail" />
                            </div>

                            {/* sm */}
                            <div className="news-text-lg-2 col-lg-6 d-block d-lg-none">
                                    <h4 dir="rtl" className="news-title d-none d-lg-block">کمک به نیازمندان</h4>
                                    <p dir="rtl" className="d-none d-lg-block">
                                        به گزارش خبرنگار گروه استان های باشگاه خبرنگاران جوان از همدان، حمید شاکری صفت، مسئول امور مشارکت‌های مردمی مجمع خیرین سلامت استان همدان با اشاره به اجرای پویش اهدای نفس، گفت: این پویش به منظور تهیه کپسول‌های اکسیژن برای بیماران کرونایی انجام می‌شود. او افزود: به همین منظور به درخواست دانشگاه علوم پزشکی ابن‌سینا در زمینه تهیه کپسول.
                                    </p>
                            </div>
                            <a href="#" className="title-sm btn d-block d-lg-none">کمک به نیازمندان</a>
                        </div>
                    </div>



                </div>                                                                        
            </div>
            </section>




            <div className="between"></div>
        </>
    )
}

export default News2
