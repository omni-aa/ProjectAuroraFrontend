import {client} from "@/lib/sanity.ts";
import {NewsCard} from "@/components/Interface/interface.ts";


async function getData(): Promise<NewsCard[]> {
    const query = `
    *[_type == 'newsData']{
        title,
        smallDescription,
        newsImage
    }`;

    const data = await client.fetch(query);
    return data;
}

export default async function NewsDataCard() {
    try {
        const news = await getData();
        return news;
    } catch (error) {
        console.error("Error fetching game data:", error);
        return [];
    }
}
