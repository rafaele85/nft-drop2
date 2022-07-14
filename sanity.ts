import {ClientConfig, createClient} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'
import {SanityClientLike, SanityImageSource, SanityProjectDetails} from "@sanity/image-url/lib/types/types";

const urlBuilderConfig: SanityClientLike | SanityProjectDetails = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
}

const config: ClientConfig = {
    dataset: urlBuilderConfig.dataset,
    projectId: urlBuilderConfig.projectId,
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(urlBuilderConfig).image(source)
