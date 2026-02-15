import React, { useMemo, useState } from 'react';
import {Row, Col, Typography} from 'antd';
import '../../components/css/Buttons.css'
import '../../components/css/EmotionalButtons.css'
import '../../components/css/Text.css'
import '../../components/css/Tooltip.css'
import '../../components/css/ScrollBar.css'
import {AIDaySummary} from "../../components/user/diary/AIDaySummary.tsx";
import {GroupGraph} from "../../components/curator/GroupGraph.tsx";
import { IndividualInfo } from '../../components/curator/IndividualInfo.tsx';

const { Title } = Typography;

interface GroupID {
    ID: number;
}

export const GroupInfoPage2: React.FC<GroupID> = ({ ID }) => {
    const [expandedMemberKey, setExpandedMemberKey] = useState<string | null>(null);

    const members = useMemo(() => {
        // Псевдо-рандом, но стабильный для одного и того же ID (чтобы не прыгало при каждом рендере)
        const makeRng = (seed: number) => {
            let t = seed >>> 0;
            return () => {
                t += 0x6D2B79F5;
                let x = t;
                x = Math.imul(x ^ (x >>> 15), x | 1);
                x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
                return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
            };
        };

        const rng = makeRng(ID || 1);
        const firstNames = ['Михаил', 'Кирилл', 'Роман', 'Арсений', 'Владислав', 'Илья', 'Константин', 'Тимофей', 'Виктор'];
        const lastNames = ['Орлов', 'Захаров', 'Громов', 'Фролов', 'Калинин', 'Ершов', 'Семенов', 'Дорофеев', 'Беляев'];
        const patronymics = ['Михайлович', 'Кириллович', 'Романович', 'Арсеньевич', 'Владиславович', 'Ильич', 'Константинович'];

        const count = 8;
        return Array.from({ length: count }, (_, i) => {
            const last = lastNames[Math.floor(rng() * lastNames.length)];
            const first = firstNames[Math.floor(rng() * firstNames.length)];
            const patr = patronymics[Math.floor(rng() * patronymics.length)];
            const age = 18 + Math.floor(rng() * 13); // 18..30
            return {
                key: `${ID}-${i}`,
                group: ID,
                name: `${last} ${first} ${patr}`,
                age,
            };
        });
    }, [ID]);

    return (
        <Row gutter={[24,24]} style={{
            height: '100%',
            overflow: 'hidden'
        }}>
            
            <Col span={24} style={{paddingLeft: '3vh', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className="custom-scroll" style={{ flex: 1, overflowY: 'auto', paddingRight: 12, flexDirection: 'row' }}>
                    <Row gutter={[16, 16]} style={{ height: 420, marginBottom: '2vh' }}>

                        <Col span={18} style={{ height: '100%' }}>
                            <GroupGraph />
                        </Col>

                        <Col span={6} style={{ height: '100%' }}>
                            <AIDaySummary />
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]} style={{ marginBottom: '2vh' }}>
                        <Col span={24}>
                            <Title level={3} style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
                                <span>Участники группы:</span>
                            </Title>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]} style={{ marginBottom: '2vh' }}>
                        {members.map((m) => (
                            <Col key={m.key} span={expandedMemberKey === m.key ? 24 : 8}>
                                <IndividualInfo
                                    info={{ group: m.group, name: m.name, age: m.age }}
                                    expanded={expandedMemberKey === m.key}
                                    onExpandedChange={(next) => setExpandedMemberKey(next ? m.key : null)}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
    
        </Row>
    );
};