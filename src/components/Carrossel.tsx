import StoryIcon from "./StoryIcon";

export default function Carrossel() {
    return (
        <div className="flex p-4 gap-4 justify-center border-b border-gray-300">

            <StoryIcon url="https://randomuser.me/api/portraits/men/1.jpg" />

            <StoryIcon url="https://randomuser.me/api/portraits/men/2.jpg" />

            <StoryIcon url="https://randomuser.me/api/portraits/men/3.jpg" />

            <StoryIcon url="https://randomuser.me/api/portraits/men/4.jpg" />

            <StoryIcon url="https://randomuser.me/api/portraits/men/5.jpg" />
        </div>
    )
}