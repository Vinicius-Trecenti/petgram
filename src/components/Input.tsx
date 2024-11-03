
interface InputProps {
    text: string
    type: string
}

export default function Input({ text, type }: InputProps) {
    return (
        <input type={type} placeholder={text} className="w-full p-2 border border-solid border-gray-300 focus:border-blue-500 focus:outline-none rounded"/>
    );
}