import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Box = styled.div`
  background-color: tomato !important;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    background-image: background-image: url("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png");
  }
  .slick-slide div {
    outline: none;
    background-color: orange;
    width: 60%;
    margin: 0 auto;
  }
`;
export { StyledSlider, Box };