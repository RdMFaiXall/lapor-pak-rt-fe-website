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
      title: 'Overview',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: 'Keamanan & Darurat',
      items: [
        {
          title: 'Keamanan',
          url: '/keamanan/monitoring',
          icon: ShieldAlert,
        },
        {
          title: 'Bencana',
          url: '/bencana/monitoring',
          icon: Siren,
        },
      ],
    },
    {
      title: 'Lingkungan',
      items: [
        {
          title: 'Lingkungan',
          url: '/lingkungan/monitoring',
          icon: Trees,
        },
      ],
    },
    {
      title: 'Sosial & Warga',
      items: [
        {
          title: 'Sosial',
          url: '/sosial/monitoring',
          icon: Users,
        },
        {
          title: 'Kesehatan',
          url: '/kesehatan/monitoring',
          icon: HeartPulse,
        },
        {
          title: 'Pendidikan',
          url: '/pendidikan/monitoring',
          icon: GraduationCap,
        },
      ],
    },
    {
      title: 'Ekonomi',
      items: [
        {
          title: 'Ekonomi',
          url: '/ekonomi/monitoring',
          icon: Coins,
        },
      ],
    },
  ]

}
