import React from 'react'

interface RadiobtnProps {
    content: string,
    className: string
}

const Radiobtn: React.FC<RadiobtnProps> = ({ content, className }) => {
    return (
        <div className={`flex items-center justify-start gap-[8px] ${className}`}>
            <input
                type="radio"
                name="options"
                value=""
                className="custom-radio text-[#41057E] !w-[15px] !min-w-[15px] !h-[15px]"
            />
            <label className=" text-gray-700 ">{content}</label>
        </div>
    )
}

export default Radiobtn