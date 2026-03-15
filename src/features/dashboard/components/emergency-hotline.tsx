import { Phone, ShieldAlert, HeartPulse } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function EmergencyHotline() {
  const hotlines = [
    {
      name: 'Keamanan RT (Security)',
      number: '0812-3456-7890',
      icon: ShieldAlert,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
    },
    {
      name: 'Ambulans / Medis',
      number: '118',
      icon: HeartPulse,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      name: 'Polisi',
      number: '110',
      icon: Phone,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
  ]

  return (
    <Card className='rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden bg-white dark:bg-gray-900'>
      <CardHeader className='pb-2 border-b border-gray-50 dark:border-gray-800/50'>
        <CardTitle className='text-lg font-bold text-red-600 dark:text-red-400 flex items-center gap-2'>
          <ShieldAlert className='h-5 w-5' />
          Kontak Darurat & Keamanan
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4 space-y-3'>
        <p className='text-sm text-gray-500 dark:text-gray-400 mb-2 leading-tight'>
          Klik tombol di bawah untuk menelpon bantuan segera.
        </p>
        <div className='grid grid-cols-1 gap-3'>
          {hotlines.map((hotline) => (
            <Button
              key={hotline.name}
              className={`h-16 flex items-center justify-between px-6 rounded-xl ${hotline.color} ${hotline.hoverColor} text-white transition-all transform active:scale-95`}
            >
              <div className='flex items-center gap-4 text-left'>
                <div className='bg-white/20 p-2 rounded-lg'>
                  <hotline.icon className='h-6 w-6' />
                </div>
                <div>
                  <p className='text-xs font-bold uppercase tracking-wider opacity-90'>{hotline.name}</p>
                  <p className='text-xl border-none p-0 font-black'>{hotline.number}</p>
                </div>
              </div>
              <Phone className='h-6 w-6' />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
