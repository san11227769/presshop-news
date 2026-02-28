"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center  justify-between py-5 text-left text-base font-medium transition-colors fs-lg lg:hed-2sm",
          "text-[color:var(--cus-font-color-gray)]",
          "data-[state=open]:text-[color:var(--cus-font-color-pink)]",
          className
        )}
        {...props}
      >
        {children}

        {/* Right circle icon */}
        <span
          className={cn(
            "ml-4 flex h-8 w-8 items-center justify-center rounded-full transition-all",
            "bg-black text-white",
            "group-data-[state=open]:bg-[var(--cus-bg-color-pink)]"
          )}
        >
          <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}


function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      )}
      {...props}
    >
      <div
        className={cn(
          "pt-0 pb-4",
          "[&_p]:mb-4 [&_p:last-child]:mb-0",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
