import React from 'react';
import { Card, Typography } from 'antd';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
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

const data: DataPoint[] = [
    { event: 'Утренний сбор', level: 2 },
    { event: 'Экскурсия', level: 5 },
    { event: 'Обед', level: 4 },
    { event: 'Практикум', level: 6 },
    { event: 'Свободное время', level: 3 },
    { event: 'Вечерняя свечка', level: 4 },
];

// --- 2. ОБЫЧНАЯ ТОЧКА (Когда не наведена) ---

const CustomizedDot = ({ cx, cy, payload }: any) => {
    if (!cx || !cy || !payload) return null;
    const config = emotionsConfig[payload.level];
    if (!config) return null;
    const Icon = config.icon;

    return (
        <foreignObject x={cx - 15} y={cy - 15} width={30} height={30} style={{ overflow: 'visible' }}>
            <div style={{
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
                fontSize: 20
            }}>
                <Icon />
            </div>
        </foreignObject>
    );
};

// --- 3. АКТИВНАЯ ТОЧКА + ТУЛТИП (Вся магия здесь) ---

const CustomActiveDot = (props: any) => {
    const { cx, cy, payload, index } = props;
    if (!cx || !cy || !payload) return null;

    const level = payload.level;
    const config = emotionsConfig[level];
    if (!config) return null;
    const Icon = config.icon;

    // Настройки размеров тултипа
    const tooltipWidth = 140;
    const tooltipHeight = 60;
    const gap = 20; // Отступ от точки

    // ЛОГИКА ПОЗИЦИИ:
    // По умолчанию: СЛЕВА от точки (cx - ширина - отступ)
    let xPos = cx - tooltipWidth - gap;

    // Если это первая точка (индекс 0), слева места нет -> рисуем СПРАВА
    if (index === 0) {
        xPos = cx + gap + 10;
    }

    // Центрируем по вертикали относительно точки
    const yPos = cy - (tooltipHeight / 2);

    return (
        <g>
            {/* 1. Рисуем саму точку (она должна быть видна под курсором) */}
            <foreignObject x={cx - 15} y={cy - 15} width={30} height={30} style={{ overflow: 'visible' }}>
                <div style={{
                    width: 30,
                    height: 30,
                    background: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 0 4px ${config.color}33`, // Добавим легкое свечение активной точке
                    border: `2px solid ${config.color}`,
                    color: config.color,
                    fontSize: 20
                }}>
                    <Icon />
                </div>
            </foreignObject>

            {/* 2. Рисуем ТУЛТИП рядом с точкой */}
            <foreignObject x={xPos} y={yPos} width={tooltipWidth} height={tooltipHeight} style={{ overflow: 'visible' }}>
                <div style={{
                    background: '#fff',
                    border: `1px solid ${config.color}`,
                    borderRadius: 8,
                    padding: '8px 12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 2, color: '#000' }}>
                        {payload.event}
                    </div>
                    <div style={{ color: config.color, fontSize: 12 }}>
                        {config.label}
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

// --- 4. ОСНОВНОЙ КОМПОНЕНТ ---

export const DailyGraph = () => {
    return (
        <Card
            style={{
                borderRadius: 12,
                border: '1px solid #f0f0f0',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            bodyStyle={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 20px 10px 30px'
            }}
        >
            <div style={{ paddingLeft: 10, marginBottom: 10, flexShrink: 0 }}>
                <Title level={4} style={{ margin: 0 }}>Карта эмоций</Title>
            </div>

            <div style={{ flex: 1, minHeight: 0, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
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

                        {/* ВАЖНО: Оставляем Tooltip, чтобы работал hover,
                           но делаем его пустым (content returns null) и убираем курсор-линию
                        */}
                        <Tooltip
                            content={() => null}
                            cursor={false}
                        />

                        <ReferenceLine y={4} stroke="#B4E65D" strokeDasharray="5 5" strokeOpacity={0.5} />

                        <Line
                            type="monotone"
                            dataKey="level"
                            stroke="#8c8c8c"
                            strokeWidth={3}
                            // Обычная точка
                            dot={<CustomizedDot />}
                            // Активная точка (содержит в себе и точку, и тултип)
                            activeDot={<CustomActiveDot />}
                            animationDuration={1500}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};