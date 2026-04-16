import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import amazon from "../../../assets/brands/amazon.png"
import amazon2 from "../../../assets/brands/amazon_vector.png"
import casio from "../../../assets/brands/casio.png"
import monstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"
import star_pole from "../../../assets/brands/start_people.png"
import { Autoplay } from 'swiper/modules';

const brandsLogo = [amazon, amazon2, casio, monstar, randstad, star, star_pole]

const Brands = () => {
    return (
        <div className='my-4'>
            <Swiper slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                loop={false} 
                autoplay={{
                    delay:1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

            >
                {
                    brandsLogo.map((logo, idx) => <SwiperSlide key={idx}><img src={logo} alt="" /></SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Brands;