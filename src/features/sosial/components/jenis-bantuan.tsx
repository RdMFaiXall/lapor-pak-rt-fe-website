import { Card } from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

interface JenisBantuanProps {
    data: { name: string; value: number }[];
}

// All possible bantuan types matching the mobile form
// label   = short name shown in the card
// tooltip = kepanjangan, shown on hover (null = no tooltip)
const ALL_BANTUAN = [
    { label: 'BLT', tooltip: 'Bantuan Langsung Tunai', abbr: 'BLT', color: '#6366f1', bg: '#ede9fe', aliases: ['BLT'] },
    { label: 'PKH', tooltip: 'Program Keluarga Harapan', abbr: 'PKH', color: '#8b5cf6', bg: '#f3e8ff', aliases: ['PKH'] },
    { label: 'BPNT / Sembako', tooltip: 'Bantuan Pangan Non Tunai', abbr: 'BNT', color: '#06b6d4', bg: '#cffafe', aliases: ['BPNT / Sembako', 'BPNT', 'Sembako'] },
    { label: 'KIS / BPJS PBI', tooltip: 'Kartu Indonesia Sehat / Penerima Bantuan Iuran', abbr: 'KIS', color: '#0ea5e9', bg: '#e0f2fe', aliases: ['KIS / BPJS PBI', 'KIS', 'BPJS PBI'] },
    { label: 'Bedah Rumah', tooltip: null, abbr: 'BR', color: '#f59e0b', bg: '#fef3c7', aliases: ['Bedah Rumah'] },
    { label: 'Bantuan Pendidikan', tooltip: null, abbr: 'BP', color: '#10b981', bg: '#d1fae5', aliases: ['Bantuan Pendidikan', 'Bantuan pendidikan'] },
    { label: 'Bantuan UMKM', tooltip: null, abbr: 'UMK', color: '#f43f5e', bg: '#ffe4e6', aliases: ['Bantuan UMKM'] },
    { label: 'Lainnya', tooltip: null, abbr: 'L', color: '#64748b', bg: '#f1f5f9', aliases: ['Lainnya'] },
];

const JenisBantuan = ({ data }: JenisBantuanProps) => {
    const totalPenerima = data.reduce((sum, item) => sum + item.value, 0);

    const items = ALL_BANTUAN.map(b => {
        const found = data.find(d =>
            b.aliases.some(alias => alias.toLowerCase() === d.name.toLowerCase())
        );
        return { ...b, value: found?.value ?? 0 };
    });

    return (
        <TooltipProvider delayDuration={200}>
            <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6'>
                <h3 className="text-md font-bold text-black mb-6">Jenis Bantuan Yang Diterima</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                    {items.map((item) => {
                        const pct = totalPenerima > 0 ? (item.value / totalPenerima) * 100 : 0;
                        const pctDisplay = pct > 0 ? pct.toFixed(1) : '0';

                        const labelEl = (
                            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                                {item.label}
                            </span>
                        );

                        return (
                            <div key={item.label} className="flex flex-col gap-2">
                                {/* Top row: badge + count + label */}
                                <div className="flex items-start gap-3">
                                    {/* Colored badge */}
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold leading-none"
                                        style={{ backgroundColor: item.bg, color: item.color }}
                                    >
                                        {item.abbr}
                                    </div>
                                    {/* Count + label */}
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-xl font-extrabold text-gray-900 dark:text-white leading-none">
                                            {item.value}{' '}
                                            <span className="text-sm font-semibold text-slate-500">Jiwa</span>
                                        </span>
                                        {item.tooltip ? (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight underline decoration-dotted decoration-slate-300 cursor-help w-fit">
                                                        {item.label}
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent side="top" className="max-w-[200px] text-center text-xs">
                                                    {item.tooltip}
                                                </TooltipContent>
                                            </Tooltip>
                                        ) : labelEl}
                                    </div>
                                </div>

                                {/* Progress bar + percentage */}
                                <div>
                                    <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{
                                                width: `${Math.max(pct > 0 ? 4 : 0, pct)}%`,
                                                backgroundColor: item.color,
                                            }}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold mt-1 block" style={{ color: item.color }}>
                                        {pctDisplay}%
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </TooltipProvider>
    );
};

export default JenisBantuan;