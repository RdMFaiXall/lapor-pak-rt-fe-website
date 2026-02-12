import {
  LayoutDashboard,
  ShieldAlert,
  Trees,
  Users,
  HeartPulse,
  GraduationCap,
  Coins,
  Command,
  GalleryVerticalEnd,
  AudioWaveform,
  Siren,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Lapor Pak RT',
      logo: Command,
      plan: 'Warga',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'Menu Utama',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Keamanan',
          url: '/keamanan',
          icon: ShieldAlert,
          items: [
            {
              title: 'Monitoring',
              url: '/keamanan/monitoring',
            },
            {
              title: 'Laporan',
              url: '/keamanan/laporan',
            },
          ],
        },
        {
          title: 'Lingkungan',
          url: '/lingkungan',
          icon: Trees,
          items: [
            {
              title: 'Monitoring',
              url: '/lingkungan/monitoring',
            },
            {
              title: 'Laporan',
              url: '/lingkungan/laporan',
            },
          ],
        },
        {
          title: 'Sosial',
          url: '/sosial',
          icon: Users,
          items: [
            {
              title: 'Monitoring',
              url: '/sosial/monitoring',
            },
            {
              title: 'Laporan',
              url: '/sosial/laporan',
            },
          ],
        },
        {
          title: 'Kesehatan',
          url: '/kesehatan',
          icon: HeartPulse,
          items: [
            {
              title: 'Monitoring',
              url: '/kesehatan/monitoring',
            },
            {
              title: 'Laporan',
              url: '/kesehatan/laporan',
            },
          ],
        },
        {
          title: 'Pendidikan',
          url: '/pendidikan',
          icon: GraduationCap,
          items: [
            {
              title: 'Monitoring',
              url: '/pendidikan/monitoring',
            },
            {
              title: 'Laporan',
              url: '/pendidikan/laporan',
            },
          ],
        },
        {
          title: 'Ekonomi',
          url: '/ekonomi',
          icon: Coins,
          items: [
            {
              title: 'Monitoring',
              url: '/ekonomi/monitoring',
            },
            {
              title: 'Laporan',
              url: '/ekonomi/laporan',
            },
          ],
        },
        {
          title: 'Bencana',
          url: '/bencana',
          icon: Siren,
          items: [
            {
              title: 'Monitoring',
              url: '/bencana/monitoring',
            },
            {
              title: 'Laporan',
              url: '/bencana/laporan',
            },
          ],
        },
      ],
    },
  ],
}
