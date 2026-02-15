import React from 'react';
import { Card } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

export const PersonMotivation = () => {
    return (
        <Card
            style={{
                height: '100%',
                borderRadius: 12,
                border: 'none',
                backgroundColor: '#B74B2922',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: "0.1%" }}>
                <BulbOutlined style={{ fontSize: 14, color: '#B74B29' }} />
                <Title level={5} style={{ margin: 0, color: '#B74B29' }}>Следует добавить больше физ активности</Title>
            </div>
        </Card>
    );
}