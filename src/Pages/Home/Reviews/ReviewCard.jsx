import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from 'swiper/modules';
import useReview from "../../../Hooks/useReview";


const ReviewCard = () => {

    const [reviews] = useReview();

    return (
        <div className="my-8">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                {
                    reviews?.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="w-full h-60 border-2">
                            <div className="card-body p-5">
                                <div className="flex justify-between gap-3">
                                    <div className="flex justify-between gap-2">
                                        <div className="avatar">
                                            <div className="w-20 rounded-full">
                                                <img src={review.icon} />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h1 className="text-3xl font-bold">{review.name}</h1>
                                            <h1>{review.designation}</h1>
                                        </div>
                                    </div>
                                    <div className="">
                                        <FaQuoteLeft className="text-5xl text-red-500"></FaQuoteLeft>
                                    </div>
                                </div>
                                <div>
                                    <h1>{review.details}</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>

    );
};

export default ReviewCard;