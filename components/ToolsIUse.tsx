import { toolsData } from "@/data/toolsData";
import ToolCard from "@/components/ToolCard";

export default function ToolsIUse() {
  return (
    <section id="tools-i-use" className="mx-4 my-8 lg:max-w-6xl lg:mx-auto">
      <h2 className="font-righteous text-center text-3xl leading-9 md:text-4xl md:leading-[42px] lg:text-5xl lg:leading-[54px] xl:text-[52px] xl:leading-[58px] mb-6 md:mb-8 lg:mb-10">
        Tools I Use
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:mx-12 xl:mx-0">
        {toolsData.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
}
