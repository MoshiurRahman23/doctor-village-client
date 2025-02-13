
import ReviewCard from "./ReviewCard";


const Reviews = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-7">What Our Patients Says</h1>
                <p className="px-36 mb-7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;