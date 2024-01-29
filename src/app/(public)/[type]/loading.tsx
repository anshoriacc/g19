import { Container } from "@/components/layout/container";
import { LoadingPlaceholder } from "@/components/product/loading-placeholder";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductListLoading() {
  return (
    <Container className="flex flex-col gap-6">
      <Skeleton className="h-8 w-2/5" />

      <Skeleton className="h-10 w-full max-w-[400px]" />

      <LoadingPlaceholder />
    </Container>
  );
}
