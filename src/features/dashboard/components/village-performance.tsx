import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity } from 'lucide-react'

export function VillagePerformance() {
  const rtPerformance = [
    { rt: 'RT 01', reports: 45, status: 'Aktif', color: 'bg-emerald-500' },
    { rt: 'RT 02', reports: 12, status: 'Kurang Aktif', color: 'bg-orange-500' },
    { rt: 'RT 03', reports: 38, status: 'Aktif', color: 'bg-emerald-500' },
    { rt: 'RT 04', reports: 5, status: 'Pasif', color: 'bg-red-500' },
    { rt: 'RT 05', reports: 27, status: 'Aktif', color: 'bg-emerald-500' },
  ]

  return (
    <Card className='rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden bg-white dark:bg-gray-900'>
      <CardHeader className='pb-2 border-b border-gray-50 dark:border-gray-800/50'>
        <CardTitle className='text-lg font-bold flex items-center gap-2'>
          <Activity className='h-5 w-5 text-indigo-500' />
          Pemantauan Keaktifan RT
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='divide-y divide-gray-100 dark:divide-gray-800'>
          {rtPerformance.map((item) => (
            <div key={item.rt} className='px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors'>
              <div className='flex items-center gap-4 flex-1'>
                <div className='w-12 text-sm font-bold text-gray-700 dark:text-gray-300'>{item.rt}</div>
                <div className='flex-1 max-w-[200px]'>
                  <div className='flex items-center justify-between mb-1'>
                    <span className='text-[10px] uppercase font-bold text-gray-400'>{item.reports} Laporan</span>
                  </div>
                  <div className='h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden'>
                    <div 
                      className={`h-full ${item.color} transition-all duration-1000`} 
                      style={{ width: `${Math.min((item.reports / 50) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                item.status === 'Aktif' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                item.status === 'Pasif' ? 'bg-red-50 text-red-600 border border-red-100' : 
                'bg-orange-50 text-orange-600 border border-orange-100'
              }`}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
