import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import author from "@/assets/images/author.jpg";
import author2 from "@/assets/images/author2.png";
import author3 from "@/assets/images/author3.png";
import review from "@/assets/images/review.png";
import review2 from "@/assets/images/review2.png";
import review3 from "@/assets/images/review3.png";

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    review: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: author,
    image: review,
  },
  {
    id: 2,
    title: "Good Quality",
    review: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: author2,
    image: review2,
  },
  {
    id: 3,
    title: "Good Quality",
    review: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: author3,
    image: review3,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= Math.floor(rating)
              ? "fill-[#FFA52F] text-[#FFA52F]"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
      <span className="text-sm font-semibold text-[#232321] ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="w-full bg-[#F5F5F3] py-12 md:py-[128px]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-4xl md:text-[74px] font-semibold leading-[0.9] text-[#232321] uppercase">
            REVIEWS
          </h2>
          <Button className="w-[121px] h-[40px] md:h-[48px] bg-primary text-white font-medium uppercase rounded-[8px] text-sm cursor-pointer tracking-wider hover:bg-primary/90 transition-colors">
            SEE ALL
          </Button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full h-full max-h-[500px] bg-white rounded-[32px] overflow-hidden cursor-pointer"
            >
              {/* Top: Reviewer Info */}
              <div className="p-4 md:p-8 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[#232321] mb-1">
                      {review.title}
                    </h3>
                    <p className="text-base text-[#232321] opacity-80 leading-snug">
                      {review.review}
                    </p>
                  </div>
                  {/* Avatar */}
                  <div className="relative size-[44px] md:size-[64px] rounded-full overflow-hidden shrink-0 border-2 border-[#ECEEF0]">
                    <Image
                      src={review.avatar}
                      alt="Reviewer avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Star Rating */}
                <StarRating rating={review.rating} />
              </div>

              {/* Bottom: Shoe Image */}
              <div className="relative w-full h-[220px] md:h-[350px]">
                <Image
                  src={review.image}
                  alt={review.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
