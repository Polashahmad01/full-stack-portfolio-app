import NavigationController from "@/components/NavigationController";
import IntroPage from "@/components/IntroPage";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <NavigationController />
      <IntroPage />
    </main>
  );
}
