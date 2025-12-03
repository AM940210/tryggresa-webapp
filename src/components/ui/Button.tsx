import { ButtonHTMLAttributes } from "react";

export default function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button 
            {...props}
            className={`w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition ${className}`}
        />
    );
}