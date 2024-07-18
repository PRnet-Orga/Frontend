import React from 'react'

interface RadiobtnCheckedProps {
    content: string,
    className: string,
    name: string
  }

const RadiobtnChecked: React.FC<RadiobtnCheckedProps> = ({content, className, name}) => {
    return (
        <label className={`inline-flex items-center ${className}`}>
            <input
                type="radio"
                name={name}
                value=""
                className="custom-radio text-[#41057E] !w-[15px] !h-[15px] bg-[#41057E]"
                defaultChecked
            />
            <span className="ml-2 text-gray-700">{content}</span>
        </label>
    )
}

export default RadiobtnChecked