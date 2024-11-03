import StoryIcon from "./StoryIcon";

export default function Carrossel() {
    return (
        <div className="flex p-4 gap-4 justify-center border-b border-gray-300">

            <StoryIcon url="https://random.dog/7e1527a4-9c07-48df-a877-4c6e4681adc1.jpg" />

            <StoryIcon url="https://random.dog/f0ba87f4-d2f3-4430-8727-6b2f6a49dfe7.jpg" />

            <StoryIcon url="https://random.dog/c4587e93-93f3-4df5-9c67-501ad03294b7.jpg" />

            <StoryIcon url="https://random.dog/de700d33-938d-4540-b134-53d11566e604.jpg" />

            <StoryIcon url="https://random.dog/a87a8d31-48dd-45b4-baab-e115dfa70692.jpg" />
        </div>
    )
}