import Introduction from "@/components/Introduction";
import ProfileCard from "@/components/ProfileCard";
import SocialMedia from "@/components/SocialMedia";

export default function WhoAmI() {

  return (
    <section id="intro" className="px-4 py-8 flex items-center justify-center min-h-screen lg:max-w-6xl lg:mx-auto">
      <div className="relative flex flex-col items-center gap-8 md:flex-row lg:gap-24">
        <div className="flex-1 flex justify-center mt-12 sm:mt-0">
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
