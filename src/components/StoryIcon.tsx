interface StoryIconProps {
    url: string;
}

export default function StoryIcon({ url }: StoryIconProps) {
    return (
        <div className="flex items-center justify-center bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600 rounded-full p-1">
            <div className="w-14 h-14 flex items-center justify-center  text-center rounded-full">
                <img src={url} alt="Perfil" className="rounded-full" />
            </div>
        </div>
    );
}