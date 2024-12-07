import { client } from "@/lib/sanity.ts";
import { GuideDataInterface } from "@/Layout/Guides/NewPlayerGuides/NewPlayerIntroduction/Interface.ts";

async function getData(): Promise<GuideDataInterface[]> {
    const query = `*[_type == 'NewPlayerGuide']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    const data = await client.fetch(query);
    return data;
}


export default async function GuidesData() {
    try {
        const news = await getData();
        return news;
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
