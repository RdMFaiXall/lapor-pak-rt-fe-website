import {
  AudioWaveform,
  Coins,
  Command,
  GalleryVerticalEnd,
  GraduationCap,
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
          title: 'Pendidikan',
          url: '/pendidikan/monitoring',
          icon: GraduationCap,
        },
        {
          title: 'Ekonomi',
          url: '/ekonomi/monitoring',
          icon: Coins,
        },
      ],
    },
    // {
    //   title: 'Apps & Tools',
    //   items: [
    //     {
    //       title: 'Tasks',
    //       url: '/tasks',
    //       icon: CheckSquare,
    //     },
    //     {
    //       title: 'Chats',
    //       url: '/chats',
    //       icon: MessageSquare,
    //     },
    //     {
    //       title: 'Users',
    //       url: '/users',
    //       icon: UserCog,
    //     },
    //     {
    //       title: 'Apps',
    //       url: '/apps',
    //       icon: Grid,
    //     },
    //   ],
    // },
    // {
    //   title: 'Lainnya',
    //   items: [
    //     {
    //       title: 'Settings',
    //       url: '/settings',
    //       icon: Settings,
    //     },
    //     {
    //       title: 'Help Center',
    //       url: '/help-center',
    //       icon: HelpCircle,
    //     },
    //   ],
    // },
  ],
}
