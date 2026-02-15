import React, { useMemo, useState } from 'react';
import { Card, Typography } from 'antd';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';
import {
    TbMoodSad,
    TbMoodEmpty,
    TbMoodSmile,
    TbMoodHappy,
    TbMoodSurprised,
    TbMoodTongueWink,
    TbMoodWrrr
} from 'react-icons/tb';

const { Title } = Typography;

// --- 1. ТИПЫ И КОНФИГ ---

interface DataPoint {
    event: string;
    level: number;
}

interface Series {
    id: string;
    label: string;
    points: DataPoint[];
    stroke: string;
}

type ChartRow = {
    event: string;
    [seriesId: string]: string | number | undefined;
};

interface EmotionConfigItem {
    label: string;
    color: string;
    icon: React.ElementType;
}

const emotionsConfig: Record<number, EmotionConfigItem> = {
    1: { label: 'Апатия', color: '#9DB1CC', icon: TbMoodSad },
    2: { label: 'Пассивность', color: '#70C9E3', icon: TbMoodEmpty },
    3: { label: 'Расслабленность', color: '#A3DC81', icon: TbMoodSmile },
    4: { label: 'Баланс', color: '#B4E65D', icon: TbMoodHappy },
    5: { label: 'Вовлечённость', color: '#FFD952', icon: TbMoodSurprised },
    6: { label: 'Перевозбуждение', color: '#FF9F45', icon: TbMoodTongueWink },
    7: { label: 'Паника', color: '#FF5C33', icon: TbMoodWrrr },
};

const basePoints: DataPoint[] = [
    { event: 'Утренний сбор', level: 2 },
    { event: 'Экскурсия', level: 5 },
    { event: 'Обед', level: 4 },
    { event: 'Практикум', level: 6 },
    { event: 'Свободное время', level: 3 },
    { event: 'Вечерняя свечка', level: 4 },
];

// Это и есть «массив массивов точек»: массив серий, каждая серия = конкретный человек
const series: Series[] = [
    {
        id: 'anna',
        label: 'Аня',
        points: basePoints,
        stroke: '#8c8c8c',
    },
    {
        id: 'boris',
        label: 'Боря',
        points: [
            { event: 'Утренний сбор', level: 1 },
            { event: 'Экскурсия', level: 1 },
            { event: 'Обед', level: 1 },
            { event: 'Практикум', level: 1 },
            { event: 'Свободное время', level: 1 },
            { event: 'Вечерняя свечка', level: 1 },
        ],
        stroke: '#70C9E3',
    },
];

const seriesLabelById: Record<string, string> = Object.fromEntries(series.map((s) => [s.id, s.label]));

// Pivot: series[] -> один общий массив данных для Recharts
const pivotSeriesToChartData = (allSeries: Series[]): ChartRow[] => {
    const rowByEvent = new Map<string, ChartRow>();
    const eventOrder: string[] = [];
    const seenEvents = new Set<string>();

    for (const s of allSeries) {
        for (const p of s.points) {
            if (!seenEvents.has(p.event)) {
                seenEvents.add(p.event);
                eventOrder.push(p.event);
            }

            const row = rowByEvent.get(p.event) ?? { event: p.event };
            row[s.id] = p.level;
            rowByEvent.set(p.event, row);
        }
    }

    return eventOrder.map((event) => rowByEvent.get(event) ?? { event });
};

const chartData = pivotSeriesToChartData(series);

// --- 2. ОБЫЧНАЯ ТОЧКА (Когда не наведена) ---

const CustomizedDot = ({ cx, cy, value }: any) => {
    if (!cx || !cy) return null;
    if (typeof value !== 'number') return null;

    const config = emotionsConfig[value];
    if (!config) return null;
    const Icon = config.icon;

    return (
        <foreignObject x={cx - 15} y={cy - 15} width={30} height={30} style={{ overflow: 'visible' }}>
            <div
                style={{
                    width: 30,
                    height: 30,
                    background: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 2px 4px ${config.color}66`,
                    border: `2px solid ${config.color}`,
                    color: config.color,
                    fontSize: 20,
                }}
            >
                <Icon />
            </div>
        </foreignObject>
    );
};

// --- 4. ОСНОВНОЙ КОМПОНЕНТ ---

export const GroupGraph = () => {
    const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null);

    const selectedLabel = useMemo(() => {
        if (!selectedSeriesId) return null;
        return seriesLabelById[selectedSeriesId] ?? selectedSeriesId;
    }, [selectedSeriesId]);

    return (
        <Card
            style={{
                borderRadius: 12,
                border: '1px solid #f0f0f0',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
            bodyStyle={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 20px 10px 30px',
            }}
        >
            <div style={{ paddingLeft: 10, marginBottom: 10, flexShrink: 0 }}>
                <Title level={4} style={{ margin: 0 }}>
                    Карта эмоций
                </Title>
            </div>

            <div style={{ flex: 1, minHeight: 0, width: '100%', position: 'relative' }}>
                {selectedLabel && (
                    <div
                        style={{
                            position: 'absolute',
                            right: 12,
                            top: 10,
                            background: '#fff',
                            border: `1px solid ${series.find(s => s.id === selectedSeriesId)?.stroke ?? "#000000"}`,
                            boxShadow: `0 4px 12px ${series.find(s => s.id === selectedSeriesId)?.stroke ?? "#000000"}`,
                            borderRadius: 8,
                            padding: '6px 10px',
                            fontSize: 16,
                            pointerEvents: 'none',
                            whiteSpace: 'nowrap',
                            zIndex: 1,
                        }}
                    >
                        {selectedLabel}
                    </div>
                )}
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f0f0f0" />

                        <XAxis
                            dataKey="event"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#8c8c8c', fontSize: 12 }}
                            dy={15}
                            interval={0}
                            padding={{ left: 30, right: 30 }}
                        />

                        <YAxis
                            type="number"
                            domain={[1, 7]}
                            tickCount={7}
                            axisLine={false}
                            tickLine={false}
                            width={0}
                            tick={false}
                        />

                        <ReferenceLine y={4} stroke="#B4E65D" strokeDasharray="5 5" strokeOpacity={0.5} />

                        {series.map((s) => (
                            <React.Fragment key={s.id}>
                                {/* Видимая линия */}
                                <Line
                                    type="monotone"
                                    dataKey={s.id}
                                    name={s.label}
                                    stroke={selectedSeriesId && selectedSeriesId !== s.id ? '#d9d9d9' : s.stroke}
                                    strokeWidth={selectedSeriesId === s.id ? 5 : 3}
                                    strokeOpacity={1}
                                    dot={<CustomizedDot />}
                                    activeDot={false}
                                    connectNulls
                                    animationDuration={1500}
                                />

                                {/* Невидимая линия поверх (увеличенный "хитбокс" для клика) */}
                                <Line
                                    type="monotone"
                                    dataKey={s.id}
                                    stroke="transparent"
                                    strokeWidth={18}
                                    strokeOpacity={1}
                                    dot={false}
                                    activeDot={false}
                                    connectNulls
                                    isAnimationActive={false}
                                    onClick={() =>
                                        setSelectedSeriesId((prev) => (prev === s.id ? null : s.id))
                                    }
                                />
                            </React.Fragment>
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
