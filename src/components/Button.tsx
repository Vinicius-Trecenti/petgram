interface ButtonProps {
    text: string
    onClick?: () => void
}

export default function Button({ text, onClick }: ButtonProps) {

    return (
        <button onClick={onClick} className="bg-green-700 hover:bg-green-400 text-white font-bold p-2 rounded">
            {text}
        </button>
    );
}