import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailLoading() {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col gap-6">
        <Skeleton className="h-8 w-2/5" />

        <section className="grid flex-1 gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-4">
            <Skeleton className="aspect-[4/3] w-full self-center justify-self-center" />

            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="aspect-[4/3] w-full self-center justify-self-center"
                />
              ))}
            </div>
          </div>

          <section className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 uppercase">
              {[...Array(2)].map((_, index) => (
                <Skeleton key={index} className="h-[26px] w-[100px]" />
              ))}
            </div>

            <div className="space-y-1">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="h-6 w-full" />
              ))}

              <Skeleton className="h-6 w-2/5" />
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <Skeleton className="h-9 w-2/5" />

              <Skeleton className="h-10 w-full" />
            </div>
          </section>
        </section>
      </div>
    </Container>
  );
}
