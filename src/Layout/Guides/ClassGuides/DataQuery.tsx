import {client} from "@/lib/sanity.ts";
import {ClassGuideInterface} from "@/Layout/Guides/ClassGuides/Interface.ts";

async function getData(): Promise<ClassGuideInterface[]> {
    const query = `*[_type == 'ClassGuides']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    return await client.fetch(query);
}


export default async function ClassGuidesData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
