import React from "react"
import { Sidebar } from "./sidebar.styles"
import { SidebarItem } from "./SidebarItem"
import { useSidebarContext } from "@/components/layout/layout-context"
import { usePathname } from "next/navigation"
import { HomeIcon } from "@/components/icons/sidebar/home-icon"
import { Route } from "./route"

export const SidebarWrapper = () => {
  const pathname = usePathname()
  const {collapsed, setCollapsed} = useSidebarContext()

  return (
    <aside className="sticky top-0 z-[202] h-screen">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <h3 className={"text-2xl font-bold uppercase"}>Audio-DB MVP</h3>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Artists"
              icon={<HomeIcon />}
              isActive={pathname === "/artist"}
              href={Route.artistRoute}
            />
          </div>
        </div>
      </div>
    </aside>
  )
}
