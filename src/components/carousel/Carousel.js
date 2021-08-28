import './Carousel.css'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'





function Carousel() {
    return (
        <>
            <section id="carousel-1">
                <div id="carouselExampleIndicators"  className="carousel carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={c1} className="img-fluid d-block" alt="slide" />
                        </div>
                        <div className="carousel-item">
                        <img src={c2} className="img-fluid d-block" alt="slide" />
                        </div>
                        <div className="carousel-item">
                        <img src={c3} className="img-fluid d-block" alt="slide" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Carousel
