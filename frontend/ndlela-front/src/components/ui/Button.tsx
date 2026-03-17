import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    variant?: "primary" | "outline"
    href?: string
}

export default function Button({ children, variant = "primary", href }: ButtonProps) {
    const base =
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"

    const styles = {
        primary: "bg-primary text-white hover:bg-secondary",
        outline: "border border-primary text-primary hover:bg-primary hover:text-white",
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