import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    variant?: "primary" | "outline"
    href?: string
}

export default function Button({ children, variant = "primary", href }: ButtonProps) {
    const base =
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors transition-all duration-300 ease-in-out hover:scale-105"

    const styles = {
        primary: "bg-primary text-white hover:bg-secondary",
        outline: "border border-white/70 text-white hover:bg-secondary hover:text-white hover:border-none",
    }

    const className = `${base} ${styles[variant]}`

    if (href) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        )
    }

    return <button className={className}>{children}</button>
}