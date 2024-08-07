import React from "react"
import { NavbarWrapper } from "../navbar/navbar"
import { SidebarWrapper } from "../shared/sidebar/Sidebar"
import { SidebarContext } from "./layout-context"

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {

  return (
    <SidebarContext.Provider value={{}}>
      <section className="flex">
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </section>
    </SidebarContext.Provider>
  )
}
