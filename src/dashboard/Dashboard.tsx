import { cn } from "@/lib/utils"
import { Button } from "@/components/shadcn/ui/button"
import { useState } from "react"
import { LuLayoutDashboard, LuSettings, LuUser } from "react-icons/lu"

const routes = [
  {
    title: "Dashboard",
    icon: <LuLayoutDashboard className="h-4 w-4" />,
    variant: "default" as const,
  },
  {
    title: "Settings",
    icon: <LuSettings className="h-4 w-4" />,
    variant: "ghost" as const,
  },
  {
    title: "Profile",
    icon: <LuUser className="h-4 w-4" />,
    variant: "ghost" as const,
  },
]

export const Dashboard = () => {
  const [activeRoute, setActiveRoute] = useState("Dashboard")

  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r bg-zinc-50/40 p-6 dark:bg-zinc-900/40">
        <div className="flex flex-col gap-2">
          {routes.map((route) => (
            <Button
              key={route.title}
              variant={activeRoute === route.title ? "default" : "ghost"}
              className={cn(
                "justify-start gap-2",
                activeRoute === route.title && "dark:bg-zinc-800 dark:text-zinc-50"
              )}
              onClick={() => setActiveRoute(route.title)}
            >
              {route.icon}
              {route.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">{activeRoute}</h1>
      </div>
    </div>
  )
} 

export default Dashboard