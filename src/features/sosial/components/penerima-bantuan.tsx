import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface PenerimaBantuanProps {
    count: number;
    totalPenduduk?: number;
}

const SUDAH_COLOR = '#10b981';
const BELUM_COLOR = '#f59e0b';

export default function PenerimaBantuan({ count, totalPenduduk = 18 }: PenerimaBantuanProps) {
    const belum = totalPenduduk - count;
    const sudahPct = ((count / totalPenduduk) * 100);
    const belumPct = ((belum / totalPenduduk) * 100);

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full gap-5'>

            {/* Title */}
            <p className="text-md font-bold text-black mb-1">
                Penerima Bantuan
            </p>

            {/* Comparison stats */}
            <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: SUDAH_COLOR }} />
                    <div>
                        <p className="text-xs font-bold text-slate-500 leading-tight">Sudah menerima bantuan</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {sudahPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: BELUM_COLOR }} />
                    <div>
                        <p className="text-xs font-bold text-slate-500 leading-tight">Belum menerima bantuan</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {belumPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
            </div>

            {/* Horizontal stacked bar */}
            <div className="flex-1 flex flex-col justify-center gap-3">
                {/* Total label */}
                <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-gray-900 dark:text-white leading-none">{totalPenduduk}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">total warga</span>
                </div>

                <TooltipProvider delayDuration={100}>
                    <div className="flex h-12 rounded-xl overflow-hidden gap-1">
                        {/* Sudah */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    className="flex items-center justify-center transition-all duration-700 rounded-l-xl cursor-default"
                                    style={{ width: `${sudahPct}%`, backgroundColor: SUDAH_COLOR }}
                                >
                                    <span className="text-white font-extrabold text-xs drop-shadow-sm truncate px-1">
                                        {count} warga
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-semibold">{count} warga sudah menerima bantuan</p>
                            </TooltipContent>
                        </Tooltip>

                        {/* Belum */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    className="flex items-center justify-center transition-all duration-700 rounded-r-xl cursor-default"
                                    style={{ width: `${belumPct}%`, backgroundColor: BELUM_COLOR }}
                                >
                                    <span className="text-white font-extrabold text-xs drop-shadow-sm truncate px-1">
                                        {belum} warga
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-semibold">{belum} warga belum menerima bantuan</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>

                {/* Bottom labels */}
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Sudah menerima</span>
                    <span>Belum menerima</span>
                </div>
            </div>
        </div>
    )
}