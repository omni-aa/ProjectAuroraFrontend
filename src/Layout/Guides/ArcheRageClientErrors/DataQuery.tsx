import {client} from "@/lib/sanity.ts";
import {ArcheRageClientErrorInterface} from "@/Layout/Guides/ArcheRageClientErrors/Interface.ts";

async function getData(): Promise<ArcheRageClientErrorInterface[]> {
    const query = `*[_type == 'ArcheRageClientErrorsGuides']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    return await client.fetch(query);
}


export default async function ArcheRageClientErrorsGuidesData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
