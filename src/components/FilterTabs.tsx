
import { Cloud, Heart, Users, Equal, InfinityIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  const filters = [
    { id: "environment", icon: Cloud, label: "Environment" },
    { id: "wellness", icon: Heart, label: "Wellness" },
    { id: "all", icon: InfinityIcon, label: "All" },
    { id: "equity", icon: Equal, label: "Equity" },
    { id: "community", icon: Users, label: "Community" },
  ];

  return (
    <div className="flex justify-center gap-4 mb-8 px-4 overflow-x-auto py-2">
      {filters.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onFilterChange(id)}
          className={cn(
            "filter-tab flex items-center gap-2",
            activeFilter === id && "active"
          )}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};
