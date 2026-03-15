import { type Table } from '@tanstack/react-table'
import { Trash2, Download } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { DataTableBulkActions as BulkActionsToolbar } from '@/components/data-table'

type DataTableBulkActionsProps<TData> = {
  table: Table<TData>
}

export function LingkunganBulkActions<TData>({
  table,
}: DataTableBulkActionsProps<TData>) {
  const handleBulkDelete = () => {
    toast.info('Fitur hapus massal sedang dikembangkan')
  }

  const handleBulkExport = () => {
    toast.info('Fitur ekspor massal sedang dikembangkan')
  }

  return (
    <BulkActionsToolbar table={table} entityName='Data Lingkungan'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            onClick={handleBulkExport}
            className='size-8'
            aria-label='Ekspor data terpilih'
          >
            <Download className='size-4' />
            <span className='sr-only'>Ekspor data</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ekspor data</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='destructive'
            size='icon'
            onClick={handleBulkDelete}
            className='size-8'
            aria-label='Hapus data terpilih'
          >
            <Trash2 className='size-4' />
            <span className='sr-only'>Hapus data</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Hapus data</p>
        </TooltipContent>
      </Tooltip>
    </BulkActionsToolbar>
  )
}
