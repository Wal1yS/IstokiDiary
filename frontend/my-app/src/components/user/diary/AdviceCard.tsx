import { Card, Typography } from 'antd';
import { BulbOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const AdviceCard = () => {
    return (
        <Card
            style={{
                height: '100%',
                borderRadius: 12,
                border: '1px solid #f0f0f0',
                backgroundColor: '#B74B2922'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <BulbOutlined style={{ fontSize: 24, color: '#B74B29' }} />
                <Title level={4} style={{ margin: 0, color: '#B74B29' }}>О чем написать?</Title>
            </div>

            <ul style={{ color: '#595959', lineHeight: '1.8', paddingLeft: 20 }}>
                <li>Как я себя чувствую в конце этого дня?</li>
                <li>Что сегодня было особенно важным?</li>
                <li>За что я могу похвалить себя?</li>
                <li>Какие эмоции преобладали?</li>
                <li>Что я хочу сделать завтра лучше?</li>
            </ul>
        </Card>
    );
};