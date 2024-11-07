interface ButtonProps {
    text: string
}

export default function Button({ text }: ButtonProps) {

    return (
        <button className="bg-green-700 hover:bg-green-400 text-white font-bold p-2 rounded">
            {text}
        </button>
    );
}