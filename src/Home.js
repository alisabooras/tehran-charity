import Header from "./header/Header";
import Carousel from "./components/carousel/Carousel";
import Progress from "./components/progress/Progress";
import News1 from "./components/newsboard/news-1/News1";
import News2 from "./components/newsboard/news-2/News2";
import CardUser from "./components/cards/CardUser";
import Attachment from "./components/attachment-pic/Attachment";
import Infoboard from "./components/infoboard/Infoboard";
import Display from "./components/display/Display";
import Footer from "./components/footer/Footer";


function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <Progress />
            <News1 />
            <News2 />
            <CardUser />
            <Attachment />
            <Infoboard />
            <Display />
            <Footer />
        </>
    )
}

export default Home
