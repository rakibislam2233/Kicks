import Image, { StaticImageData } from "next/image";
import StarRating from "./StarRating";

interface Review {
  id: number;
  title: string;
  review: string;
  rating: number;
  avatar: StaticImageData | string;
  image: StaticImageData | string;
}

const ReviewCard = ({ review }: { review: Review }) => {
  return (
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
  );
};

export default ReviewCard;
