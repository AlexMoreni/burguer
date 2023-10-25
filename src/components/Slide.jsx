import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContainerSlide, CardSlide, ImgSlide, TextSlide } from "./Slide.style";

const Slide = ({ img1, img2, img3, text1, text2, text3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <ContainerSlide>
      <Slider {...settings}>
        <CardSlide>
          <ImgSlide src={`/${img1}`} alt="Slide 1" />
          <TextSlide>{text1}</TextSlide>
        </CardSlide>
        <CardSlide>
          <ImgSlide src={`/${img2}`} alt="Slide 2" />
          <TextSlide>{text2}</TextSlide>
        </CardSlide>
        <CardSlide>
          <ImgSlide src={`/${img3}`} alt="Slide 3" />
          <TextSlide>{text3}</TextSlide>
        </CardSlide>
      </Slider>
    </ContainerSlide>
  );
};

export default Slide;
