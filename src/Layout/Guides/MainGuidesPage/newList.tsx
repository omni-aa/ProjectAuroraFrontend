import {client} from "@/lib/sanity.ts";
import {NewsCard} from "@/Layout/Guides/MainGuidesPage/Interface/interface.ts";


async function getData(): Promise<NewsCard[]> {
    const query = `
    *[_type == 'newsData'][0...3]{
        title,
        smallDescription,
        newsImage
    }`;

    return await client.fetch(query);
}

export default async function NewsDataCard() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching game data:", error);
        return [];
    }
}
