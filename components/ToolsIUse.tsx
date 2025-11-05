import { toolsData } from "@/data/toolsData";
import ToolCard from "@/components/ToolCard";

export default function ToolsIUse() {
  return (
    <section id="tools-i-use" className="px-4 py-8 lg:max-w-6xl lg:mx-auto">
      <h1 className="font-righteous text-center text-2xl leading-normal tracking-normal mb-8 md:mb-12 lg:mb-14 md:text-3xl lg:text-4xl">Tools I Use</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {toolsData.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
}
