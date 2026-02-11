
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { useTheme } from '@/context/theme-provider'

const data = [
    {
        name: 'Jan',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Feb',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Mar',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Apr',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'May',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Jun',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Jul',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Aug',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Sep',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Oct',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Nov',
        total: Math.floor(Math.random() * 50) + 10,
    },
    {
        name: 'Dec',
        total: Math.floor(Math.random() * 50) + 10,
    },
]

export function Overview() {
    const { theme } = useTheme()

    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart data={data}>
                <XAxis
                    dataKey='name'
                    stroke='#888888'
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke='#888888'
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{
                        borderRadius: '8px',
                        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                        color: theme === 'dark' ? '#f9fafb' : '#111827'
                    }}
                />
                <Bar
                    dataKey='total'
                    fill='currentColor'
                    radius={[4, 4, 0, 0]}
                    className='fill-primary'
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
