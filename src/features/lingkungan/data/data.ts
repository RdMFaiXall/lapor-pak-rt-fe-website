import { fakerID_ID as faker } from '@faker-js/faker'
import { Lingkungan } from './schema'
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
    { value: 'sampah', label: 'Penumpukan Sampah', color: '#d97706' }, // Amber
    { value: 'banjir', label: 'Banjir/Genangan', color: '#3b82f6' }, // Blue
    { value: 'polusi', label: 'Polusi Udara/Bau', color: '#71717a' }, // Zinc
    { value: 'limbah', label: 'Limbah Berbahaya', color: '#a855f7' }, // Purple
    { value: 'pohon', label: 'Pohon Tumbang', color: '#22c55e' }, // Green
    { value: 'lainnya', label: 'Lainnya', color: '#9ca3af' }, // Gray
]

const titles = [
    'Sampah menumpuk di selokan utama',
    'Banjir setinggi lutut di jalan masuk',
    'Bau menyengat dari pembakaran sampah',
    'Limbah rumah tangga dibuang sembarangan',
    'Pohon tumbang menghalangi jalan',
    'Saluran air tersumbat menyebabkan genangan',
    'Kerja bakti pembersihan lingkungan',
    'Pengasapan (fogging) nyamuk DBD',
]

const descriptions = [
    'Warga mengeluhkan bau tidak sedap dan potensi penyakit dari tumpukan sampah.',
    'Hujan deras menyebabkan air sungai meluap ke jalanan warga.',
    'Asap pembakaran sampah mengganggu pernapasan warga sekitar.',
    'Mohon bantuan petugas untuk mengevakuasi pohon tumbang secepatnya.',
    'Selokan mampet karena banyak sampah plastik yang dibuang sembarangan.',
    'Diperlukan koordinasi untuk jadwal kerja bakti minggu depan.',
    'Banyak warga yang terjangkit demam berdarah, perlu tindakan segera.',
]

export const mockLingkunganData: Lingkungan[] = Array.from({ length: 20 }).map(() => ({
    id: `LG-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.helpers.arrayElement(titles),
    status: faker.helpers.arrayElement(statuses).value,
    priority: faker.helpers.arrayElement(priorities).value,
    category: faker.helpers.arrayElement(categories).value,
    location: `RT ${faker.number.int({ min: 1, max: 10 })} / RW ${faker.number.int({ min: 1, max: 5 })}`,
    lat: -6.200000 + (Math.random() * 0.01 - 0.005),
    lng: 106.816666 + (Math.random() * 0.01 - 0.005),
    description: faker.helpers.arrayElement(descriptions),
    reportedBy: faker.person.fullName(),
    date: faker.date.recent({ days: 30 }).toISOString(),
}))
