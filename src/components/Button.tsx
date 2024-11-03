interface ButtonProps {
    text: string
}

export default function Button({ text }: ButtonProps) {

    return (
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold p-2 rounded">
            {text}
        </button>
    );
}