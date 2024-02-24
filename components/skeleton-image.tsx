import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonImage() {
  return (
    <div className="w-full flex flex-col space-y-3">
      <Skeleton className="h-[300px] w-full rounded-xl" />
    </div>
  );
}
