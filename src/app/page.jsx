import NavigationController from "@/components/NavigationController";
import IntroPage from "@/components/IntroPage";
import WhatIDoPage from "@/components/WhatIDoPage";
import ToolsIUsePage from "@/components/ToolsIUsePage";
import MyRecentWorkPage from "@/components/MyRecentWorkPage";
import MyExperiencePage from "@/components/MyExperiencePage";
import ContactPage from "@/components/ContactPage";
import AppFooter from "@/components/AppFooter";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <NavigationController />
      <IntroPage />
      <WhatIDoPage />
      <ToolsIUsePage />
      <MyRecentWorkPage />
      <MyExperiencePage />
      <ContactPage />
      <AppFooter />
    </main>
  );
}
