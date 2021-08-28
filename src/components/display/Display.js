import './Display.css'
import display2 from './display2.jpg'
import display from './display.jpg'


function Display() {
    return (
        <>
            <section className="display">
                <div className="border-white"></div>

                <div className="display-head">مجمع خیرین سلامت کشور در رسانه</div>

                <div className="display-card-header">
                    <div className="display-card shrink">
                        <img src={display} alt="display" />
                    </div>

                    <div className="display-card shrink">
                        <img src={display2} alt="display" />
                    </div>
 
                    <div className="display-card shrink">
                        <img src={display2} alt="display" />
                    </div>

                    <div className="display-card shrink">
                        <img src={display} alt="display" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Display
