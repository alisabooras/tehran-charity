import Footer from "../../components/footer/Footer"
import Navbar2 from "../2-Navbar/Navbar2"
import './ContactPage.css'

function ContactPage() {
    return (
        <div className="bg-page-contact">

           <Navbar2 />
           <section id="map">
            <br />
               <div className="container map-head">
                    <iframe className="map-responsive" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6472.458656870523!2d51.483709!3d35.794303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ3JzQxLjIiTiA1McKwMjgnNTkuMSJF!5e0!3m2!1sfa!2sus!4v1627393380192!5m2!1sfa!2sus"  allowfullscreen="true" loading="lazy"></iframe>

                    <ul class="list-group list-group-flush mt-lg-4" dir="rtl">
                        <li class="list-group-item"><i class="fas fa-home"></i>  تهران - میدان نوبنیاد - خیابان لنگری - خیابان صنایع - پلاک 43</li>
                        <li class="list-group-item"><i class="fas fa-phone-square"></i>  <a href="tel:02171149000" dir="ltr">+9871149000</a></li>
                        <li class="list-group-item"><i className="fas fa-envelope"></i> <a href="mailto:info@salamat-charity.ir">info@salamat-charity.ir</a></li>
                    </ul>
               </div>
           </section>
           <Footer />
        </div>
    )
}

export default ContactPage
