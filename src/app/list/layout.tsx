"use client"
import { Layout } from "@/components/layout/layout"


function WrapperLayout({children}: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}

export default WrapperLayout;