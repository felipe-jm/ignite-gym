import { HomeHeader } from "@/components/home-header";
import { VStack } from "@/components/ui/vstack";

export function Home() {
  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <HomeHeader />
    </VStack>
  );
}
