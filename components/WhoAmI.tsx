import Introduction from "@/components/Introduction";
import ProfileCard from "@/components/ProfileCard";
import SocialMedia from "@/components/SocialMedia";

export default function WhoAmI() {

  return (
    <section id="intro" className="px-4 py-8 mt-16 sm:mt-0 lg:max-w-6xl lg:mx-auto">
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-6">
            <ProfileCard />
            <SocialMedia />
          </div>
        </div>
        <Introduction />
      </div>
    </section>
  );
}
