import React from "react"

interface Props {
  children: React.ReactNode
}

export const NavbarWrapper = ({children}: Props) => {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  )
}
