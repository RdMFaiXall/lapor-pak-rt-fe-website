export default function CustomTooltip({ active, payload, label, context = 'Kasus' }: any) {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Kategori
                        </span>
                        <span className="font-bold text-muted-foreground mr-2">
                            {label || payload[0].payload.name}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Jumlah
                        </span>
                        <span className="font-bold">
                            {payload[0].value} {context} ({payload[0].payload.percentage}%)
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    return null
}