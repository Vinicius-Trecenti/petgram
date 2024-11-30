import Link from "next/link";

export default function Fotos() {
    const fotos = [
        "https://random.dog/c1efdc4c-5691-4823-9e66-fd9eeab3ce96.jpg",
        "https://random.dog/945e599c-3a1e-44d5-a23e-d6acc2ca47a5.jpg",
        "https://random.dog/85ca20a7-e792-4166-8709-1e0710b6d68d.jpg",
        "https://random.dog/2d394360-33e1-4c27-9e64-d65a2ab82d5b.jpg",
        "https://random.dog/2505f628-614d-4521-a26b-70897a51d4fd.JPG",
        "https://random.dog/0c021634-cc90-443e-bedb-6f754fcfb7bc.png",
        "https://random.dog/722a1a47-9a41-454f-bc65-8cb6c9613636.jpeg",
        "https://random.dog/c8463589-3062-4278-8174-ded5f1b508fa.jpeg",
        "https://random.dog/6b3100c1-34a0-4795-8de6-82da13eec2af.jpg",
    ];

    return (
        <div className="grid grid-cols-3 gap-1 mt-4">
            {fotos.map((foto, index) => (
                <Link key={index} href={`/postPage/${index}`}>
                    <img src={foto} alt={`Foto ${index}`} className="w-38 h-38 object-cover" />
                </Link>
            ))}
        </div>
    );
}