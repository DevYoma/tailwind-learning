type ButtonProps = {
    label: string;
    iconURL?: string;
    backgroundColor?: React.CSSProperties | string;
    textColor?: React.CSSProperties | string;
    borderColor?: React.CSSProperties | string;
    fullWidth?: React.CSSProperties | string;
}

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }: ButtonProps) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && 'w-full'}"}
    `}>
        {label}

        {/* img */}
        {iconURL && <img 
            src={iconURL} 
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5" 
        />}
        
    </button>
  )
}

export default Button

// observe well, this component.