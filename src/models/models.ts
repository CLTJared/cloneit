export interface UserArticle {
    id: string
    location: string
    title: string
    description: string
    media?: PostMedia
}


export type PostMedia = string | undefined