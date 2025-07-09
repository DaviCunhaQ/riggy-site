export default function Button({
  children,
  variant,
  className
}: {
  children: React.ReactNode;
  variant: "default" | "outline";
  className?: string
}) {
  return (
    <>
      {variant === "default" && (
        <a
          href="#download"
          className={`hover:scale-[103%] transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 ${className}`}
        >
          {children}
        </a>
      )}
      {variant === "outline" && (
        <a
          href="#tutorial"
          className={`transition-all duration-300 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 ${className}`}
        >
          {children}
        </a>
      )}
    </>
  );
}
