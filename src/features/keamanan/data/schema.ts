import { z } from 'zod'

export const keamananSchema = z.object({
    id: z.string(),
    title: z.string(), // Judul laporan/kasus
    status: z.string(), // e.g., 'open', 'in-progress', 'resolved', 'closed'
    priority: z.string(), // e.g., 'low', 'medium', 'high', 'critical'
    category: z.string(), // e.g., 'pencurian', 'perkelahian', 'kebakaran', 'lainnya'
    location: z.string(), // e.g., 'RT 01', 'RW 05'
    description: z.string().optional(),
    reportedBy: z.string(),
    date: z.string(), // ISO date string
})

export type Keamanan = z.infer<typeof keamananSchema>
