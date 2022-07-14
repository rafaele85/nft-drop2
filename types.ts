
export type BaseSanityObject = {
    _id: string,
    address: string,
}
export type Creator = BaseSanityObject & {
    name: string
}
export type SanityImage = {
    asset: {
        url: string
    }
}
export type SanitySlug = {
    current: string
}
export type SanityCollection = BaseSanityObject & {
    creator: Creator,
    description: string | null,
    mainImage: SanityImage,
    nftCollectionName: string,
    previewImage: SanityImage,
    slug: SanitySlug,
    title: string,
}