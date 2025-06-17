import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group relative bg-card text-card-foreground flex flex-col gap-6 rounded-xl border transition-all duration-300 ease-out",
        "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary/5 before:to-primary-500/5 before:opacity-0 before:transition-opacity hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-primary-500/5 after:to-primary/5 after:opacity-0 after:transition-opacity hover:after:opacity-100",
        "dark:before:from-primary-500/10 dark:before:to-primary/10 dark:after:from-primary/10 dark:after:to-primary-500/10",
        "backdrop-blur-[2px]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        "transition-transform duration-300 group-hover:translate-x-1",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-semibold",
        "transition-colors duration-300 group-hover:text-primary",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-muted-foreground text-sm",
        "transition-colors duration-300 group-hover:text-muted-foreground/80",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        "transition-transform duration-300 group-hover:scale-110",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6",
        "transition-transform duration-300 group-hover:translate-x-1",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 [.border-t]:pt-6",
        "transition-transform duration-300 group-hover:translate-x-1",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
