import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Megaphone, Send } from 'lucide-react'
import { useState } from 'react'

export function VillageBroadcast() {
  const [message, setMessage] = useState('')

  return (
    <Card className='rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden bg-white dark:bg-gray-900'>
      <CardHeader className='pb-4 border-b border-gray-50 dark:border-gray-800/50 bg-indigo-50/10'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-indigo-100 dark:bg-indigo-950/40 rounded-xl'>
            <Megaphone className='h-5 w-5 text-indigo-600 dark:text-indigo-400' />
          </div>
          <div>
            <CardTitle className='text-lg font-bold'>Broadcast Desa</CardTitle>
            <CardDescription className='text-xs'>Kirim pengumuman darurat ke seluruh RT</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-4'>
          <textarea
            className='w-full min-h-[100px] p-4 text-sm rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 focus:border-indigo-500 dark:focus:border-indigo-500 focus:outline-none transition-colors resize-none placeholder:text-gray-400 font-medium'
            placeholder='Tulis pesan penting untuk seluruh warga desa di sini...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className='flex items-center justify-between gap-4'>
            <p className='text-[10px] text-gray-400 font-medium italic'>
              *Pesan akan muncul di puncak dashboard setiap Ketua RT.
            </p>
            <Button 
                disabled={!message}
                className='rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2 h-auto flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100'
            >
              Broadcast Sekarang
              <Send className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
