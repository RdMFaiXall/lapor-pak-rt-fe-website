
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ReactNode } from 'react'

interface ReportDetailModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    description?: string
    children: ReactNode
}

export function ReportDetailModal({
    open,
    onOpenChange,
    title,
    description,
    children,
}: ReportDetailModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='max-w-3xl max-h-[90vh] flex flex-col'>
                <DialogHeader className='px-1'>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <ScrollArea className='flex-1 pr-4 -mr-4'>
                    <div className='px-1 pb-4'>
                        {children}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
