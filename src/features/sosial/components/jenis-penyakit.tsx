import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import CustomTooltip from '@/components/ui/custom-tooltip';

interface JenisPenyakitProps {
    data: { name: string; value: number }[];
}

const COLORS = ['#e76f51', '#f4a261', '#e9c46a', '#2a9d8f', '#264653', '#6366f1', '#8b5cf6', '#a855f7'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
            className="font-bold text-xs"
        >
            <tspan x={x} dy="-0.6em">{name}</tspan>
            <tspan x={x} dy="1.4em">{(percent * 100).toFixed(0)}%</tspan>
        </text>
    );
};

const JenisPenyakit = ({ data }: JenisPenyakitProps) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    const chartData = data.map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value);

    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Jenis Penyakit</h3>

            <div className="flex-1 w-full min-h-[300px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={125}
                            dataKey="value"
                            stroke="#18181b"
                            strokeWidth={2}
                            labelLine={false}
                            label={renderCustomizedLabel}
                        >
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center dot from the reference image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#e76f51] rounded-full border-[1.5px] border-[#18181b] pointer-events-none" />
            </div>
        </Card>
    );
};

export default JenisPenyakit;