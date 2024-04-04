import SkeletonCard from "@/components/skeleton-card";

export default function LoadingIndicator() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from(Array(6).keys()).map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
