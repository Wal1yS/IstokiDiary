import { Card, Typography, Input, Button, Flex, Divider } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import '../../css/Buttons.css'
import '../../css/Text.css'

const { Title, Text} = Typography;
const { TextArea } = Input;


export const DailySummary = () => {
    return (
        <Card
            style={{
                height: '100%',
                borderRadius: 12,
                border: '1px solid #f0f0f0',
                display: 'flex',
                flexDirection: 'column'
            }}
            bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }} // Растягиваем тело карточки
        >
            <Flex justify="space-between" align="center" style={{ marginBottom: 0 }}>
                <Flex align="center" gap={12}>
                    <div style={{
                        background: '#B74B2933',
                        padding: 10,
                        borderRadius: 12,
                        color: '#B74B29'
                    }}>
                        <EditOutlined style={{ fontSize: 24}} />
                    </div>
                    <div>
                        <Title level={3} style={{ margin: 0 }}>Итог дня</Title>
                        <Text type="secondary">Рефлексия и заметки</Text>
                    </div>
                </Flex>
                <Button type="primary" icon={<SaveOutlined />} size="large" className={'sendBtn'}>
                    Сохранить
                </Button>
            </Flex>

            <Divider style={{marginBottom: 24}}/>


            {/* Поле ввода (занимает всё оставшееся место) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Text strong style={{ marginBottom: 8 }}>Ваши мысли:</Text>
                <TextArea className={'input-text'}
                    placeholder="Начните писать здесь..."
                    style={{
                        flex: 1,
                        resize: 'none',
                        borderRadius: 12,
                        padding: 16,
                        fontSize: '16px',
                        backgroundColor: '#fafafa',
                        border: '1px solid #d9d9d9'
                    }}
                />
            </div>
        </Card>
    );
};