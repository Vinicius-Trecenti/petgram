
interface InputProps {
    text: string
    type: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ text, type, onChange }: InputProps) {
    return (
        <input type={type} placeholder={text} onChange={onChange} className="w-full p-2 border border-solid border-gray-300 focus:border-blue-500 focus:outline-none rounded"/>
    );
}