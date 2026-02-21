import { Star } from "lucide-react";

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

export default StarRating;
