import {Row, Col, Typography} from 'antd';
import {EventCard} from "../components/user/diary/EventCard.tsx";
import {DailySummary} from "../components/user/diary/DailySummary.tsx";
import '../components/css/Buttons.css'
import '../components/css/EmotionalButtons.css'
import '../components/css/Text.css'
import '../components/css/Tooltip.css'
import '../components/css/ScrollBar.css'
import {AdviceCard} from "../components/user/diary/AdviceCard.tsx";
import {AIDaySummary} from "../components/user/diary/AIDaySummary.tsx";
import {DailyGraph} from "../components/user/diary/DailyGraph.tsx";

const { Title } = Typography;

export const DiaryPage = () => {
    return (
        <Row gutter={[24,24]} style={{
            height: `calc(100vh - 11vh)`,
            overflow: 'hidden'
        }}>
            <Col span={7} style={{height: '100%', display: 'flex', flexDirection: 'column', borderRight: '1px solid #f0f0f0'}}>
                <div style={{paddingRight: 12, marginBottom: 16, flexShrink: 0}}>
                    <Title level={3} style={{ margin: 0 }}>Среда, 24 апреля</Title>
                </div>
                <div className="custom-scroll" style={{ flex: 1, overflowY: 'auto', paddingRight: 12}}>
                    <EventCard title="Утренний сбор" time="9:00 - 9:45" />
                    <EventCard title="Экскурсия" time="10:00 - 12:00" />
                    <EventCard title="Практикум" time="13:00 - 14:30" />
                    <EventCard title="Утренний сбор" time="9:00 - 9:45" />
                    <EventCard title="Экскурсия" time="10:00 - 12:00" />
                    <EventCard title="Практикум" time="13:00 - 14:30" />
                </div>
            </Col>

            <Col span={17} style={{paddingLeft: '3vh', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{paddingRight: 12, marginBottom: 16, flexShrink: 0}}>
                    <Title level={3} style={{ margin: 0 }}>Подведём итог</Title>
                </div>
                <div className="custom-scroll" style={{ flex: 1, overflowY: 'auto', paddingRight: 12 }}>
                    <Row gutter={[16, 16]} style={{ height: '33%', marginBottom: '2vh'}}>

                        <Col span={18} style={{ height: '100%' }}>
                            <DailySummary />
                        </Col>

                        <Col span={6} style={{ height: '100%' }}>
                            <AdviceCard />
                        </Col>

                    </Row>
                    <Row gutter={[16, 16]} style={{ height: '60%', marginBottom: '2vh'}}>

                        <Col span={18} style={{ height: '100%' }}>
                            <DailyGraph />
                        </Col>

                        <Col span={6} style={{ height: '100%' }}>
                            <AIDaySummary />
                        </Col>

                    </Row>
                </div>
            </Col>
        </Row>
    );
};