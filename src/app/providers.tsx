"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>{children} </SessionProvider>
    </ThemeProvider>
  )
}
