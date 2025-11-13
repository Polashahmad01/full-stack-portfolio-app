import Navigation from "@/components/Navigation";
import WhoAmI from "@/components/WhoAmI";
import Skills from "@/components/Skills";
import ToolsIUse from "@/components/ToolsIUse";
import MyResentProject from "@/components/MyRecentProject";
import MyExperience from "@/components/MyExperience";
import Contact from "@/components/Contact";
import AppFooter from "@/components/AppFooter";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <WhoAmI />
      {/* <Skills />
      <ToolsIUse />
      <MyResentProject />
      <MyExperience />
      <Contact />
      <AppFooter /> */}
    </main>
  );
}
