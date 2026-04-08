
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/banner/b1.jpg"
import banner2 from "../../../assets/banner/b2.png"
import banner3 from "../../../assets/banner/b3.png"
import banner4 from "../../../assets/banner/b4.png"
import banner5 from "../../../assets/banner/b5.png"


const Banner = () => {
    return (
        <div className=" rounded-4xl">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div className="relative rounded-4xl overflow-hidden">
                    <img src={banner2} className="w-full" />

                    {/* BUTTON CONTAINER */}
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 md:left-1/5 -translate-x-1/2 
                  flex flex-col sm:flex-row gap-3 sm:gap-4 
                  w-full sm:w-auto px-4 sm:px-0">

                        {/* Button 1 */}
                        <button className="w-full sm:w-auto bg-green-500 text-white 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-600 transition">
                            Be a Rider
                        </button>

                        {/* Button 2 */}
                        <button className="w-full sm:w-auto bg-white text-green-600 
                       border border-green-500 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-100 transition">
                            Track Parcel
                        </button>

                    </div>
                </div>
                <div className=" rounded-4xl">
                    <img src={banner1} />
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 md:left-1/5 -translate-x-1/2 
                  flex flex-col sm:flex-row gap-3 sm:gap-4 
                  w-full sm:w-auto px-4 sm:px-0">

                        {/* Button 1 */}
                        <button className="w-full sm:w-auto bg-green-500 text-white 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-600 transition">
                            Be a Rider
                        </button>

                        {/* Button 2 */}
                        <button className="w-full sm:w-auto bg-white text-green-600 
                       border border-green-500 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-100 transition">
                            Track Parcel
                        </button>

                    </div>

                </div>
                <div className=" rounded-4xl">
                    <img src={banner3} />
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 md:left-1/5 -translate-x-1/2 
                  flex flex-col sm:flex-row gap-3 sm:gap-4 
                  w-full sm:w-auto px-4 sm:px-0">

                        {/* Button 1 */}
                        <button className="w-full sm:w-auto bg-green-500 text-white 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-600 transition">
                            Be a Rider
                        </button>

                        {/* Button 2 */}
                        <button className="w-full sm:w-auto bg-white text-green-600 
                       border border-green-500 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-100 transition">
                            Track Parcel
                        </button>

                    </div>
                </div>
                <div>
                    <img src={banner4} />
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 md:left-1/5 -translate-x-1/2 
                  flex flex-col sm:flex-row gap-3 sm:gap-4 
                  w-full sm:w-auto px-4 sm:px-0">

                        {/* Button 1 */}
                        <button className="w-full sm:w-auto bg-green-500 text-white 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-600 transition">
                            Be a Rider
                        </button>

                        {/* Button 2 */}
                        <button className="w-full sm:w-auto bg-white text-green-600 
                       border border-green-500 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-100 transition">
                            Track Parcel
                        </button>

                    </div>
                </div>
                <div className=" rounded-4xl">
                    <img src={banner5} />
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 md:left-1/5 -translate-x-1/2 
                  flex flex-col sm:flex-row gap-3 sm:gap-4 
                  w-full sm:w-auto px-4 sm:px-0">

                        {/* Button 1 */}
                        <button className="w-full sm:w-auto bg-green-500 text-white 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-600 transition">
                            Be a Rider
                        </button>

                        {/* Button 2 */}
                        <button className="w-full sm:w-auto bg-white text-green-600 
                       border border-green-500 
                       px-4 md:px-6 py-2 md:py-3 rounded-lg 
                       text-sm md:text-base hover:bg-green-100 transition">
                            Track Parcel
                        </button>

                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;