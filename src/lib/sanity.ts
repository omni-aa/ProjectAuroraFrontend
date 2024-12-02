import {createClient} from '@sanity/client'

export const client = createClient({
    apiVersion:'2022-03-07',
    dataset:'production',
    projectId:'q1nusvj5',
    useCdn:false,
})