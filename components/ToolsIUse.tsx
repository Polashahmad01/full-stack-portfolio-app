import { toolsData } from "@/data/toolsData";
import ToolCard from "@/components/ToolCard";

export default function ToolsIUse() {
  return (
    <section
      id="tools-i-use"
      className="mx-4 mb-16 relative lg:max-w-6xl lg:mx-auto">
      <div className="hidden md:block tools__i__use__glow top-14 left-[170px]" />
      <h2 className="font-righteous text-center text-3xl leading-9 md:text-4xl md:leading-[42px] mb-12">
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
