import React from 'react'

interface RadiobtnCheckedProps {
    content: string,
    className: string
  }

const RadiobtnChecked: React.FC<RadiobtnCheckedProps> = ({content, className}) => {
    return (
        <label className={`inline-flex items-center ${className}`}>
            <input
                type="radio"
                name="options"
                value=""
                className="custom-radio text-[#41057E] !w-[15px] !h-[15px] bg-[#41057E]"
                defaultChecked
            />
            <span className="ml-2 text-gray-700">{content}</span>
        </label>
    )
}

export default RadiobtnChecked