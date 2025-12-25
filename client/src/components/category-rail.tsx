import { CATEGORIES } from "@/lib/data";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

export function CategoryRail({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="w-full overflow-x-auto pb-6 pt-2 scrollbar-hide">
      <div className="flex gap-4 px-4 min-w-max">
        <Link href="/">
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={cn(
              "w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300",
              !activeCategory 
                ? "bg-primary border-primary text-white shadow-md scale-105" 
                : "bg-white border-zinc-200 text-zinc-600 hover:border-primary hover:text-primary"
            )}>
              <Icons.LayoutGrid className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className={cn(
              "text-xs font-bold uppercase tracking-wide transition-colors",
              !activeCategory ? "text-primary" : "text-muted-foreground group-hover:text-primary"
            )}>
              Todos
            </span>
          </div>
        </Link>

        {CATEGORIES.map((cat) => {
          // Dynamically get icon component
          const IconComponent = (Icons as any)[cat.icon] || Icons.Circle;
          const isActive = activeCategory === cat.id;

          return (
            <Link key={cat.id} href={`/categoria/${cat.id}`}>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className={cn(
                  "w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative overflow-hidden",
                  isActive
                    ? "bg-primary border-primary text-white shadow-md scale-105"
                    : "bg-white border-zinc-200 text-zinc-600 hover:border-primary hover:text-primary"
                )}>
                   <div className={cn(
                     "absolute inset-0 transition-opacity duration-300",
                     isActive ? "opacity-100 bg-primary" : "opacity-0 bg-primary group-hover:opacity-10"
                   )} />
                   
                   <IconComponent className={cn(
                     "w-7 h-7 sm:w-9 sm:h-9 relative z-10",
                     isActive ? "text-white" : "text-zinc-700 group-hover:text-primary"
                   )} />
                </div>
                <span className={cn(
                  "text-xs font-bold uppercase tracking-wide transition-colors whitespace-nowrap",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )}>
                  {cat.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
