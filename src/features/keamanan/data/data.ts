import { fakerID_ID as faker } from '@faker-js/faker'
import { Keamanan } from './schema'

import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircle2,
    Circle,
    HelpCircle,
    Timer,
    XCircle,
} from 'lucide-react'

export const statuses = [
    {
        value: 'open',
        label: 'Baru',
        icon: HelpCircle,
    },
    {
        value: 'in-progress',
        label: 'Sedang Ditangani',
        icon: Timer,
    },
    {
        value: 'resolved',
        label: 'Selesai',
        icon: CheckCircle2,
    },
    {
        value: 'closed',
        label: 'Ditutup',
        icon: XCircle,
    },
]

export const priorities = [
    {
        label: 'Rendah',
        value: 'low',
        icon: ArrowDownIcon,
    },
    {
        label: 'Sedang',
        value: 'medium',
        icon: ArrowRightIcon,
    },
    {
        label: 'Tinggi',
        value: 'high',
        icon: ArrowUpIcon,
    },
    {
        label: 'Kritis',
        value: 'critical',
        icon: Circle,
    },
]

export const categories = [
    { value: 'pencurian', label: 'Pencurian' },
    { value: 'perkelahian', label: 'Perkelahian' },
    { value: 'kebakaran', label: 'Kebakaran' },
    { value: 'gangguan', label: 'Gangguan Ketertiban' },
    { value: 'lainnya', label: 'Lainnya' },
]

export const mockKeamananData: Keamanan[] = Array.from({ length: 50 }).map(() => ({
    id: `KS-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.hacker.phrase(),
    status: faker.helpers.arrayElement(statuses).value,
    priority: faker.helpers.arrayElement(priorities).value,
    category: faker.helpers.arrayElement(categories).value,
    location: `RT ${faker.number.int({ min: 1, max: 10 })} / RW ${faker.number.int({ min: 1, max: 5 })}`,
    description: faker.lorem.sentence(),
    reportedBy: faker.person.fullName(),
    date: faker.date.recent({ days: 30 }).toISOString(),
}))
