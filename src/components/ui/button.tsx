import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] before:absolute before:inset-0 before:bg-white/10 before:translate-y-full before:transition-transform hover:before:translate-y-0",
        destructive:
          "bg-destructive text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-destructive/90 active:scale-[0.98] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 before:absolute before:inset-0 before:bg-white/10 before:translate-y-full before:transition-transform hover:before:translate-y-0",
        outline:
          "border-2 bg-background shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-accent hover:text-accent-foreground active:scale-[0.98] dark:bg-input/30 dark:border-input dark:hover:bg-input/50 before:absolute before:inset-0 before:bg-accent/10 before:translate-y-full before:transition-transform hover:before:translate-y-0",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-secondary/80 active:scale-[0.98] before:absolute before:inset-0 before:bg-white/10 before:translate-y-full before:transition-transform hover:before:translate-y-0",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-accent/10 before:translate-y-full before:transition-transform hover:before:translate-y-0",
        link: "text-primary underline-offset-4 hover:underline hover:scale-[1.02] active:scale-[0.98]",
        gradient: "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:from-primary-600 hover:to-primary-700 active:scale-[0.98] before:absolute before:inset-0 before:bg-white/10 before:translate-y-full before:transition-transform hover:before:translate-y-0",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98] before:absolute before:inset-0 before:bg-white/10 before:translate-y-full before:transition-transform hover:before:translate-y-0",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-md px-8 has-[>svg]:px-6 text-base",
        xl: "h-14 rounded-md px-10 has-[>svg]:px-8 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
