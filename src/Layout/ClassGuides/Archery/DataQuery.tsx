import {client} from "@/lib/sanity.ts";
import {ClassGuideInterface} from "@/Layout/ClassGuides/Interface.ts";

async function getData(): Promise<ClassGuideInterface[]> {
    const query = `*[_type == 'ArcheryClassGuide']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    return await client.fetch(query);
}


export default async function ArcheryClassGuidesData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
