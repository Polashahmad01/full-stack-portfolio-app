import MyResentProject from "@/components/MyRecentProject";
import MyExperience from "@/components/MyExperience";
import Contact from "@/components/Contact";
import AppFooter from "@/components/AppFooter";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <MyResentProject />
      <MyExperience />
      <Contact />
      <AppFooter />
    </main>
  );
}
