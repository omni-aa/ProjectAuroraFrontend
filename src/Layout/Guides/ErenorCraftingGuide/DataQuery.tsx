import {client} from "@/lib/sanity.ts";
import {ErenorGearGuideInterface} from "@/Layout/Guides/ErenorCraftingGuide/Interface.ts";

async function getData(): Promise<ErenorGearGuideInterface[]> {
    const query = `*[_type == 'NewPlayerGuide']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    return await client.fetch(query);
}


export default async function GuidesData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
