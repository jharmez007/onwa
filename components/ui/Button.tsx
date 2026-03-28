import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg active:scale-[0.98]",
    secondary: "border border-neutral-300 text-neutral-800 bg-white hover:bg-neutral-100",
    ghost: "text-neutral-700 hover:bg-neutral-100",
  };

  return (
    <button className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}