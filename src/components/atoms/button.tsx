import cx from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center font-semibold text-base leading-6 transition-colors";

  const variants = {
    primary:
      "bg-zinc-900 border border-transparent hover:bg-zinc-800 text-secondary-foreground",
    secondary:
      "bg-transparent border border-zinc-900 text-zinc-900 hover:bg-zinc-100",
  };

  return (
    <button
      className={cx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}