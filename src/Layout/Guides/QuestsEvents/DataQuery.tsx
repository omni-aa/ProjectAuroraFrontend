import { client } from "@/lib/sanity.ts";
import {QuestEventsInterface} from "@/Layout/Guides/QuestsEvents/QuestEventsInterface/Interface.ts";

async function getData(): Promise<QuestEventsInterface[]> {
    const query = `*[_type == 'QuestsEventsGuides']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    const data = await client.fetch(query);
    return data;
}


export default async function QuestEventGuidesData() {
    try {
        const news = await getData();
        return news;
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
