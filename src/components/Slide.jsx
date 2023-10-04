import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContainerSlide, CardSlide, ImgSlide } from "./Slide.style";

const Slide = () => {
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
          <ImgSlide src="../../public/hamburguer-menu-home.png" alt="Slide 1" />
        </CardSlide>
        <CardSlide>
          <ImgSlide src="../../public/hamburguer-menu-home.png" alt="Slide 2" />
        </CardSlide>
        <CardSlide>
          <ImgSlide src="../../public/hamburguer-menu-home.png" alt="Slide 3" />
        </CardSlide>
      </Slider>
    </ContainerSlide>
  );
};

export default Slide;
