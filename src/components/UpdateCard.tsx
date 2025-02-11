
import { useState } from "react";
import { cn } from "@/lib/utils";

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
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}% Complete</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
