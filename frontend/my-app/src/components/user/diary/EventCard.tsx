import {useState} from "react";
import {Button, Card, Input, Tag, Tooltip, Typography} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
import {
    TbMoodEmpty,
    TbMoodHappy,
    TbMoodSad,
    TbMoodSmile,
    TbMoodSurprised,
    TbMoodTongueWink,
    TbMoodWrrr
} from "react-icons/tb";
import '../../css/Buttons.css'
import '../../css/EmotionalButtons.css'
import '../../css/Text.css'
import '../../css/Tooltip.css'

const { Title } = Typography;

const emotionConfig = [
    { id: 'a',  label: 'Апатия',          className: 'AemotionalBtn',  color: '#4e87ea', icon: TbMoodSad },
    { id: 'p',  label: 'Пассивность',     className: 'PemotionalBtn',  color: '#70C9E3', icon: TbMoodEmpty },
    { id: 'r',  label: 'Расслабленность', className: 'RemotionalBtn',  color: '#7fdcb3', icon: TbMoodSmile },
    { id: 'b',  label: 'Баланс',          className: 'BemotionalBtn',  color: '#91d90c', icon: TbMoodHappy },
    { id: 'v',  label: 'Вовлечённость',   className: 'VemotionalBtn',  color: '#FFD952', icon: TbMoodSurprised },
    { id: 'pe', label: 'Перевозбуждённость', className: 'PEemotionalBtn', color: '#FF9F45', icon: TbMoodTongueWink },
    { id: 'pa', label: 'Паника',          className: 'PAemotionalBtn', color: '#FF5C33', icon: TbMoodWrrr },
];

interface EventCardProps {
    title: string;
    time: string;
}

export const EventCard = ({title, time} : EventCardProps) => {
    const [activeBtn, setActiveBtn] = useState<string | null>(null);

    return (
        <Card hoverable style={{ marginBottom: 16, borderRadius: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <Tag icon={<ClockCircleOutlined />} color="#B74B29">{time}</Tag>
            </div>

            <Title level={4} style={{ marginTop: 0 }}>{title}</Title>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                {emotionConfig.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <Tooltip
                            key={item.id}
                            title={item.label}
                            placement="bottom"
                            overlayInnerStyle={{
                                backgroundColor: '#ffffff',
                                color: item.color,
                                border: `1px solid ${item.color}`
                            }}
                            arrow={false}>
                            <Button
                                className={`${item.className} ${activeBtn === item.id ? 'active' : ''}`}
                                onClick={() => setActiveBtn(item.id)}>
                                <IconComponent style={{ fontSize: 32 }}/>
                            </Button>
                        </Tooltip>
                    );
                })}
            </div>

            <Input className={'input-text'} allowClear></Input>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1vh' }}>
                <Button className={'sendBtn'} >Отправить</Button>
            </div>
        </Card>
    );
}