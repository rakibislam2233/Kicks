import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import author from "@/assets/images/author.jpg";
import author2 from "@/assets/images/author2.png";
import author3 from "@/assets/images/author3.png";
import review from "@/assets/images/review.png";
import review2 from "@/assets/images/review2.png";
import review3 from "@/assets/images/review3.png";
import ReviewCard from "@/components/common/ReviewCard";

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

const Reviews = () => {
  return (
    <section className="w-full py-12 md:py-[128px]">
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
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
