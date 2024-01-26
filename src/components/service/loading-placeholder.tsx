import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const LoadingPlaceholder = () => {
  return (
    <section className="flex flex-wrap justify-center gap-6">
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          className="group w-full max-w-[368px] cursor-default overflow-hidden">
          <Skeleton className="aspect-[1] w-full rounded-none" />

          <CardContent className="space-y-2 p-4">
            <Skeleton className="h-7 w-1/2" />

            <Skeleton className="h-6" />

            <Skeleton className="h-8 w-3/4" />
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
