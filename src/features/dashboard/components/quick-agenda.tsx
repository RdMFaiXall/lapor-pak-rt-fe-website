import { Calendar, Users, Info, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function QuickAgenda() {
  const agendas = [
    {
      title: 'Posyandu Balita & Lansia',
      date: 'Besok, 16 Maret',
      time: '08:00 - 11:00',
      location: 'Balai Warga RT 05',
      type: 'Kesehatan',
      icon: Users,
      color: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40',
    },
    {
      title: 'Kerja Bakti Rutin Mingu',
      date: 'Minggu, 22 Maret',
      time: '07:00 - Selesai',
      location: 'Area Fasos/Fasum',
      type: 'Sosial',
      icon: Calendar,
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-950/40',
    },
    {
      title: 'Pembayaran Iuran Bulanan',
      date: 'Batas: 25 Maret',
      time: 'Setiap Hari',
      location: 'Rumah Bendahara RT',
      type: 'Info',
      icon: Info,
      color: 'text-orange-600 bg-orange-100 dark:bg-orange-950/40',
    },
  ]

  return (
    <Card className='rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden bg-white dark:bg-gray-900'>
      <CardHeader className='pb-2 border-b border-gray-50 dark:border-gray-800/50'>
        <CardTitle className='text-lg font-bold flex items-center gap-2'>
          <Calendar className='h-5 w-5 text-primary' />
          Agenda & Pengumuman RT
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='divide-y divide-gray-100 dark:divide-gray-800'>
          {agendas.map((item, i) => (
            <div key={i} className='p-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors'>
              <div className='flex items-start gap-4'>
                <div className={`p-3 rounded-2xl ${item.color}`}>
                  <item.icon className='h-6 w-6' />
                </div>
                <div className='flex-1 space-y-1'>
                  <div className='flex items-center justify-between'>
                    <Badge variant='outline' className='text-[10px] uppercase font-bold tracking-widest px-2 py-0 border-current opacity-80'>
                      {item.type}
                    </Badge>
                    <span className='text-xs font-bold text-primary'>{item.date}</span>
                  </div>
                  <h3 className='text-base font-bold text-gray-900 dark:text-white leading-tight'>
                    {item.title}
                  </h3>
                  <div className='flex flex-wrap items-center gap-3 mt-1'>
                    <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                      <span className='font-semibold'>{item.time}</span>
                    </div>
                    <div className='flex items-center gap-1 text-xs text-gray-500'>
                      <MapPin className='h-3 w-3' />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='p-4 bg-gray-50 dark:bg-gray-800/50 text-center'>
            <button className='text-sm font-bold text-primary hover:underline'>Lihat Semua Agenda Lingkungan →</button>
        </div>
      </CardContent>
    </Card>
  )
}
