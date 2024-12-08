import {client} from "@/lib/sanity.ts";
import {ClassGuideInterface} from "@/Layout/ClassGuides/Interface.ts";

async function getData(): Promise<ClassGuideInterface[]> {
    const query = `*[_type == 'HealerClassGuide']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    return await client.fetch(query);
}


export default async function HealerClassGuidesData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
