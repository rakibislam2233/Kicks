"use client";

import author from "@/assets/images/author.jpg";
import author2 from "@/assets/images/author2.png";
import author3 from "@/assets/images/author3.png";
import review from "@/assets/images/review.png";
import review2 from "@/assets/images/review2.png";
import review3 from "@/assets/images/review3.png";
import ReviewCard from "@/components/common/ReviewCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <section className="w-full py-12 xl:py-[128px]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8 xl:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl xl:text-[74px] font-semibold leading-tight xl:leading-[0.9] text-[#232321]">
            Reviews
          </h2>
          <Button className="w-[89px] md:w-[121px] h-[40px] md:h-[48px] bg-primary text-white font-medium uppercase rounded-[8px] px-6 text-sm cursor-pointer tracking-wider hover:bg-primary/90 transition-colors">
            SEE ALL
          </Button>
        </motion.div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
