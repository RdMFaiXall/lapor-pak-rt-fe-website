import {
  Coins,
  Command,
  HeartPulse,
  LayoutDashboard,
  ShieldAlert,
  Siren,
  Trees,
  Users,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Pak/Bu RT',
    email: 'rt@laporpakrt.id',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Lapor Pak RT',
      logo: Command,
      plan: 'Warga',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: 'Keamanan & Lingkungan',
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
        {
          title: 'Lingkungan',
          url: '/lingkungan/monitoring',
          icon: Trees,
        },
      ],
    },
    {
      title: 'Kesejahteraan Rakyat',
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
          title: 'Ekonomi',
          url: '/ekonomi/monitoring',
          icon: Coins,
        },
      ],
    },
  ],
}
