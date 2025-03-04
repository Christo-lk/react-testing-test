interface ButtonProps {
  type?: "normal" | "error";
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  type = "normal",
  onClick,
  children,
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 text-white rounded-lg focus:outline-none focus:ring-2";

  const typeStyles = {
    normal: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500",
    error: "bg-red-500 hover:bg-red-600 focus:ring-red-500",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${typeStyles[type]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
