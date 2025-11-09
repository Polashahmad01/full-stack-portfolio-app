import Introduction from "@/components/Introduction";
import ProfileCard from "@/components/ProfileCard";

export default function WhoAmI() {

  return (
    <section id="intro" className="px-4 py-8 lg:max-w-6xl lg:mx-auto">
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="flex-1 flex justify-center">
          <ProfileCard />
        </div>
        <Introduction />
      </div>
    </section>
  );
}
