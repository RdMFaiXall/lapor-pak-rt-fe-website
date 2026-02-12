import { z } from 'zod'

// We can reuse the same schema structure as Keamanan for consistency across features
export const lingkunganSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    priority: z.string(),
    category: z.string(),
    location: z.string(),
    lat: z.number(),
    lng: z.number(),
    description: z.string().optional(),
    reportedBy: z.string(),
    date: z.string(),
})

export type Lingkungan = z.infer<typeof lingkunganSchema>
