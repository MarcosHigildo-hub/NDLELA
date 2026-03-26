import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline-light" | "outline-dark";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95";
  const styles = {
    primary: "bg-primary text-white hover:bg-secondary border-2 border-primary hover:border-secondary",
    "outline-light":
      "border-2 border-white text-white hover:bg-secondary hover:text-white",
    "outline-dark":
      "border-2 border-black text-black hover:bg-secondary hover:text-white",
  };

  const className = `${base} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
