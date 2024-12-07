import {client} from "@/lib/sanity.ts";
import {HiramGearGuideInterface} from "@/Layout/Guides/HiramGearGuide/Interface.ts";

async function getData(): Promise<HiramGearGuideInterface[]> {
    const query = `*[_type == 'HiramGearGuide']{
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
