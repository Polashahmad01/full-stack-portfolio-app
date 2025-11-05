import { ToolsDataProps } from "@/data/toolsData";

export default function ToolCard({ name, icon, color }: ToolsDataProps) {
  const Icon = icon;

  return (
    <div className="border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="py-12">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <Icon color={color} size="80px" />
          <p className="uppercase font-medium text-center opacity-80">{name}</p>
        </div>
      </div>
    </div>
  );
}
