import { z } from 'zod'

export const sosialSchema = z.object({
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

export type Sosial = z.infer<typeof sosialSchema>
