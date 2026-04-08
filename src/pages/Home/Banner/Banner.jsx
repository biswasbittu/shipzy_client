
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/banner/b1.jpg"
import banner2 from "../../../assets/banner/b2.png"
import banner3 from "../../../assets/banner/b3.png"


const Banner = () => {
    return (
        <div className="">
             <Carousel>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                  <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div> 
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div> 
            </Carousel>
        </div>
    );
};

export default Banner;