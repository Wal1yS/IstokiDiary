import { Card, Typography } from 'antd';
import { OpenAIOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const AIDaySummary = () => {
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
                <OpenAIOutlined style={{ fontSize: 24, color: '#B74B29' }} />
                <Title level={4} style={{ margin: 0, color: '#B74B29' }}>Психологический портрет дня</Title>
            </div>

            <ul style={{ color: '#595959', lineHeight: '1.8', paddingLeft: 20 }}>
                <li>Пик вовлеченности: Максимальный эмоциональный подъем зафиксирован во время события «Практикум».</li>
                <li>Утомляемость: К 15:00 выявлен переход в состояние «Расслабленности», свидетельствующий о своевременном завершении активной фазы.</li>
                <li>Итог: День прошел сбалансированно, без затяжных выходов в зоны негативного стресса или апатии.?</li>
            </ul>
        </Card>
    );
};