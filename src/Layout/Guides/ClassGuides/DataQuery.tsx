import {client} from "@/lib/sanity.ts";
import {ClassGuideInterface} from "@/Layout/Guides/ClassGuides/Interface.ts";

async function getData(): Promise<ClassGuideInterface[]> {
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
