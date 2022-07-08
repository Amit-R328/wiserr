import { useState } from "react";

export const CategoriesSliderMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let slides = [
        {
            elementName: 'Graphics & Design',
            legends: 'Build your brand',
            title: 'Logo Design',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862448/logo-design-2x_zmqxkh.webp'
        },
        {
            elementName: 'Digital Marketing',
            legends: 'Customize your site',
            title: 'WordPress',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862504/wordpress-2x_ykq9xd.webp'
        },
        {
            elementName: 'Business',
            legends: 'Learn your business',
            title: 'Data Entry',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862554/data-entry-2x_fv7elm.webp'
        },
        {
            elementName: 'Video & Animation',
            legends: 'Engage your audience',
            title: 'Video Explainer',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862592/animated-explainer-2x_fm4q6h.jpg'
        },
        {
            elementName: 'Digital Marketing',
            legends: 'Reach more customers',
            title: 'Social Media',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862621/social-2x_crn0um.webp'
        }
    ]

    const slideStyles = {
        height: "534px",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
    };


    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const sliderStyles = {
        position: "relative",
        height: "100%",
    };

    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
    };

    const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideWithBackgroundImg = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].img})`
    }

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideWithBackgroundImg}>
                <h4 className="category-legends">
                    <small>{slides[currentIndex].legends}</small>
                    <br/>
                    <span>{slides[currentIndex].title}</span>
                </h4>
            </div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
}