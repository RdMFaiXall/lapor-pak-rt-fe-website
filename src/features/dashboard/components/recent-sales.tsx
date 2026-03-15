import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { mockKeamananData } from '@/features/keamanan/data/data'
import { mockData as mockBencanaData } from '@/features/bencana/constants'
import { mockLingkunganData } from '@/features/lingkungan/data/data'
import { mockSosialData } from '@/features/sosial/data/data'
import { mockData as mockKesehatanData } from '@/features/kesehatan/constants'
import { ShieldAlert, Siren, Trees, Users, HeartPulse } from 'lucide-react'

export function RecentSales() {
  // Extract and combine the latest activities
  const allActivities = [
    ...mockKeamananData.map(d => ({ ...d, type: 'Keamanan', icon: ShieldAlert, color: 'text-red-500', name: d.reportedBy, title: d.title, date: d.date })),
    ...mockBencanaData.map(d => ({ ...d, type: 'Bencana', icon: Siren, color: 'text-orange-500', name: d.pelapor, title: d.jenis_bencana, date: d.tanggal_laporan })),
    ...mockLingkunganData.map(d => ({ ...d, type: 'Lingkungan', icon: Trees, color: 'text-green-500', name: d.reportedBy, title: d.title, date: d.date })),
    ...mockSosialData.map(d => ({ ...d, type: 'Sosial', icon: Users, color: 'text-blue-500', name: d.reportedBy, title: d.title, date: d.date })),
    ...mockKesehatanData.map(d => ({ ...d, type: 'Kesehatan', icon: HeartPulse, color: 'text-pink-500', name: (d as any).reportedBy || (d as any).pelapor || 'Warga', title: d.nama_warga, date: d.tanggal_laporan })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 5)

  return (
    <div className='space-y-6'>
      {allActivities.map((activity, i) => (
        <div key={i} className='flex items-center gap-4'>
          <Avatar className='h-9 w-9 border'>
            <AvatarFallback className={`${activity.color} bg-muted`}>
               <activity.icon className='h-4 w-4' />
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-1 flex-wrap items-center justify-between'>
            <div className='space-y-1'>
              <p className='text-sm leading-none font-bold'>{activity.name}</p>
              <p className='text-xs text-muted-foreground line-clamp-1'>
                {activity.title}
              </p>
            </div>
            <div className='text-[10px] font-medium text-muted-foreground'>
               {new Date(activity.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
