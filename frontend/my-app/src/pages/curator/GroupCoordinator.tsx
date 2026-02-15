import React, { useMemo, useState } from 'react';
import { GroupSelector, type GroupOption } from '../../components/curator/GroupSelector';
import { GroupInfoPage1 } from './GroupInfoPage1';
import { GroupInfoPage2 } from './GroupInfoPage2';
import { Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';

type Props = {
    initialGroupId?: number;
};

export const GroupCoordinator: React.FC<Props> = ({ initialGroupId }) => {
    const groups: GroupOption[] = useMemo(
        () => [
            { id: 1, label: 'Группа 1' },
            { id: 2, label: 'Группа 2' },
            { id: 3, label: 'Группа 3 (недоступно)', disabled: true },
        ],
        []
    );

    const firstEnabledGroupId = groups.find((g) => !g.disabled)?.id ?? null;
    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(initialGroupId ?? firstEnabledGroupId);

    return (
        
        <div
            style={{
                height: `calc(100vh - 11vh)`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '3vh',
            }}
            
        >
            <Row gutter={[24, 24]} style={{ flexShrink: 0 }} align="middle">
                <Col span={24} style={{ paddingBottom: '3vh' }} >
                    <Title level={3} style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span>Выбранная группа:</span>
                        <GroupSelector groups={groups} value={selectedGroupId} onChange={setSelectedGroupId} />
                    </Title>
                </Col>
            </Row>

            <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
                {selectedGroupId === 1 && <GroupInfoPage1 ID={selectedGroupId} />}
                {selectedGroupId === 2 && <GroupInfoPage2 ID={selectedGroupId}/>}
            </div>
        </div>
    );
};