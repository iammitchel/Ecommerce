import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


  export const client = createClient({
    projectId: "bhffj2r3",
    dataset: "production",
    apiVersion: "2022-03-10", // apiVersion: "2023-06-22",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  });


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);