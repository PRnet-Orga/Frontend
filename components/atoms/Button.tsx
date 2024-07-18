import React from 'react'

interface ButtonProps {
    content: string,
    className: string
}

const Button: React.FC<ButtonProps> = ({ content, className }) => {
    return (
        <button className={`btn ${className}`}>{content}</button>
    )
}

export default Button