import { z } from "zod"

export const animeSchema = z.object({
    _id: z.string(),
    name: z.string(),
    nameUrl: z.string(),
    review: z.string(),
    gender: z.string(),
    studio: z.string(),
    date: z.string(),
    img: z.string(),
    followers: z.object( z.string() ),
    animeRanking: z.array( z.object({ 
        user: z.string(),
        ranking: z.number()
    }))
})

export const animesSchema = z.array( animeSchema )

export type Anime = z.infer<typeof animeSchema>
export type AnimeFormData = Pick<Anime, 'name' | 'review' | 'gender' | 'studio' | 'date' | 'img'>
export type AnimeMainView = z.infer<typeof animesSchema> 