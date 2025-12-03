import { InputHTMLAttributes } from "react";

export default function Input (props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input 
            {...props}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-primary" 
        />
    );
}