
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface UpdateCardProps {
  title: string;
  organization: string;
  description: string;
  image: string;
  progress: number;
  updateNumber: number;
  totalUpdates: number;
}

export const UpdateCard = ({
  title,
  organization,
  description,
  image,
  progress,
  updateNumber,
  totalUpdates,
}: UpdateCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="update-card fade-in">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-foreground/70">By {organization}</p>
          </div>
          <span className="text-sm text-primary">
            Update {updateNumber}/{totalUpdates}
          </span>
        </div>

        <p className={cn(
          "text-foreground/80 transition-all duration-300",
          !expanded && "line-clamp-2"
        )}>
          {description}
        </p>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary hover:text-primary/80 text-sm transition-colors"
        >
          {expanded ? "Show less" : "...more"}
        </button>

        {image && (
          <div className="relative h-48 -mx-6 md:-mx-0">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="text-sm font-medium w-full md:w-auto text-center md:text-left">
            KPI's {progress}% Complete
          </div>
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            View Details
          </Button>
          <div className="w-full md:w-1/3">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
