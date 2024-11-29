import {FlipWords} from "@/Components/ui/flip_words.tsx";

export const  NewPlayerFAQ = () => {
    const words = ["Guides", "Tutorials", "Calculations", "Translations"];

    return (
        <div>
            Welcome to the Hiram Gear Guide
            <FlipWords words={words} />

        </div>


    )
}