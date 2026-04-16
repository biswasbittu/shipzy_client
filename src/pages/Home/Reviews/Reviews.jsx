import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";


const Reviews = ({reviews}) => {
    
    
    
    return (
        <div className="my-4">
            <div>
                <h2 className="text-6xl text-center">Reviews</h2>
            </div>
            <div>
                <Swiper
                loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale:1,
          slideShadows: true,
        }}
        autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
reviews.map((review)=><SwiperSlide  key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>)
        }
        
       
      </Swiper>
            </div>
        </div>
    );
};

export default Reviews;