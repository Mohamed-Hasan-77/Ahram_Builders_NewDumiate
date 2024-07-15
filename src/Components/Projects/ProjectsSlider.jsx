import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide1 from "../../assets/1.png"
import slide2 from "../../assets/2.png"
import slide3 from "../../assets/3.png"
import slide4 from "../../assets/4.png"
import slide5 from "../../assets/5.jpeg"
import slide6 from "../../assets/6.jpeg"
import slide7 from "../../assets/7.png"
import slide8 from "../../assets/8.png"


import "./ProjectsStyle.scss"



function ProjectSlider() {


    const sliderImages = [
        {img :  slide1},
        {img :  slide2},
        {img :  slide3},
        {img :  slide4},
        {img :  slide5},
        {img :  slide6},
        {img :  slide7},
        {img :  slide8},
    ]


    const settings = {
        infinite: true,
        dots: true,
        speed: 200,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "center",
        centerMode: true,
        centerPadding: "200px",
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    centerMode: false,
                    // centerPadding: "20px",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className="slider-container ">
            <Slider {...settings}>


               
                        {sliderImages.map((ele, idx) => {
                            return <div key={idx}  className="sliderOBox px-3  ">
                            <div className="sliderInnerBox  flex items-center   ">
                                    <img src={ele.img} className="h-full w-full " alt="slide1" />
                                </div>
                            </div>
                        })}
                    
                        

            







            </Slider>
        </div>
    );
}

export default ProjectSlider;