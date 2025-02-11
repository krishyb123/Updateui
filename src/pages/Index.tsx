
import { useState } from "react";
import { FilterTabs } from "@/components/FilterTabs";
import { UpdateCard } from "@/components/UpdateCard";

const updates = [
  {
    id: 1,
    title: "Building a New School",
    organization: "Catalyst for Social Action",
    description: "We have been open for one week, and the school has been a great success! We have begun giving meals to children, and even set up a program to collaborate with local organizations to provide after-school activities. The community response has been overwhelming positive.",
    image: "/lovable-uploads/848cac84-8bf2-4201-b613-20b1dfe1734e.png",
    progress: 67,
    category: "community",
    updateNumber: 4,
    totalUpdates: 5,
  },
  {
    id: 2,
    title: "Creating a Community Farm",
    organization: "Catalyst for Social Action",
    description: "Hi donors. The farm has been a great success so far. We have begun giving meals to children, and even set up a program to collaborate with local grocery stores to ensure fresh produce reaches those who need it most.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    progress: 45,
    category: "environment",
    updateNumber: 4,
    totalUpdates: 5,
  },
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredUpdates = updates.filter(
    update => activeFilter === "all" || update.category === activeFilter
  );

  return (
    <div className="min-h-screen py-6 px-4 max-w-4xl mx-auto space-y-8">
      <FilterTabs
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      
      <div className="space-y-6">
        {filteredUpdates.map((update) => (
          <UpdateCard
            key={update.id}
            {...update}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
