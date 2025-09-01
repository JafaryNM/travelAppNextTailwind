import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  variant: "btn_dark_green";
  icon?: string;
  title: string;
};

function Button({ type, variant, icon, title }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} height={24} width={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button;
