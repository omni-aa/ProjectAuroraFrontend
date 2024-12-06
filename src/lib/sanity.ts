import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    apiVersion:'2022-03-07',
    dataset:'production',
    projectId:'q1nusvj5',
    useCdn:false,
})

const builder = imageUrlBuilder(client)


export function urlFor(source: never){
    return builder.image(source)
}