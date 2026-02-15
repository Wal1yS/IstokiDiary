import React from 'react';
import { Avatar, Button, Card, Col, Row, Typography } from 'antd';
import '../../styles/colors.css';
import { DailyGraph } from '../user/diary/DailyGraph';
import { AIDaySummary } from '../user/diary/AIDaySummary';
import '../../components/css/Buttons.css';
import { PersonMotivation } from './PersonMotivation';

const { Title } = Typography;

const { Meta } = Card;

export type IndividualInfoProps = {
    group: number;
    name: string;
    age: number;
}


export type IndividualInfoCardProps = {
    info: IndividualInfoProps;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
};


export const IndividualInfo: React.FC<IndividualInfoCardProps> = ({
    info,
    expanded: expandedProp,
    onExpandedChange,
}) => {
    const [expandedLocal, setExpandedLocal] = React.useState(false);
    const expanded = expandedProp ?? expandedLocal;

    const setExpanded = (next: boolean) => {
        if (onExpandedChange) {
            onExpandedChange(next);
        } else {
            setExpandedLocal(next);
        }
    };
    
    return (
        <Card 
        title={info.name} 
        variant="borderless" 
        style={{ width: "100%" }}
        extra={
            <Button className="customBtn" type="primary" onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Скрыть' : 'Больше'}
            </Button>
        }>
            <Meta 
                avatar={<Avatar
                    style={{ backgroundColor: 'var(--accent-text-color)' }}
                >{info.name.charAt(0)}</Avatar>} 
                title={info.name} />
            <Row gutter={[4, 4]} style={{ width: '100%', marginTop: 12 }} align="stretch">
                <Col span={6} style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, width: '100%' }}>
                        <Title level={5} style={{ margin: 0 }}>Возраст: {info.age}</Title>
                        <Title level={5} style={{ margin: 0 }}>Группа: {info.group}</Title>
                    </div>
                </Col>
                <Col span={18} style={{ display: 'flex' }}>
                    <div style={{ width: '100%' }}>
                        <PersonMotivation />
                    </div>
                </Col>
            </Row>
            
            {expanded && (
                <Row gutter={[12, 12]} style={{ width: '100%', marginTop: 12 }}>
                    <Col span={18}>
                        <div style={{ height: 360, width: '100%' }}>
                            <DailyGraph />
                        </div>
                    </Col>
                    <Col span={6}>
                        <div style={{ height: 360, width: '100%' }}>
                            <AIDaySummary />
                        </div>
                    </Col>
                </Row>
            )}
        </Card>
    );
}