import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({ children, className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      data-name="button"
      className={`bg-gradient-to-t from-black from-[15.509%] to-[#666] to-[126.07%] border-[0.5px] border-solid border-white content-stretch flex gap-[6.4px] items-center justify-center px-[24px] py-[6px] relative rounded-[44.522px] shrink-0 ${className}`}
      {...props}
    >
      <span className="[word-break:break-word] bg-clip-text bg-gradient-to-b from-[rgba(255,255,255,0.93)] to-white font-aeonik font-normal leading-[32px] not-italic relative shrink-0 text-[20px] text-transparent tracking-[0.016px] whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}
