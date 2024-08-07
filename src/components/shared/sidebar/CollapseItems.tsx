"use client"
import React, { useState } from "react"
import { Accordion, AccordionItem } from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon"
import { ChevronUpIcon } from "@/components/icons/sidebar/chevron-up-icon"

interface Props {
  icon: React.ReactNode
  title: string
  items: string[]
}

export const CollapseItems = ({ icon, items, title }: Props) => {
  const [open, setOpen] = useState(false)
  const { resolvedTheme } = useNextTheme()

  return (
    <div className="flex h-full cursor-pointer items-center gap-4">
      <Accordion className="px-0">
        <AccordionItem
          indicator={
            <ChevronUpIcon width="24px" height="24px" theme={resolvedTheme} />
          }
          classNames={{
            indicator: "data-[open=true]:-rotate-180",
            trigger:
              "py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5",

            title:
              "px-0 flex text-base gap-2 h-full items-center cursor-pointer",
          }}
          aria-label="Accordion 1"
          title={
            <div className="flex flex-row gap-2">
              <span>{icon}</span>
              <span>{title}</span>
            </div>
          }
        >
          <div className="pl-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex w-full py-2 text-default-500 transition-colors hover:text-default-900"
              >
                <UsersIcon />
                <span key={index}>{item}</span>
              </div>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
