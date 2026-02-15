import { Tabs, type TabsProps } from 'antd';
import '../css/Header.css';
import '../css/Tabs.css';
import { useAuth } from '../../context/AuthContext';
import { IstokiButton } from '../IstokiButton'
import {useNavigate} from "react-router-dom";

const userItem: TabsProps['items'] = [
    {
        key: '/home/diary',
        label: 'Дневник',
    },
    {
        key: '/home/dynamic',
        label: 'Динамика',
    }
];

const couratorItem: TabsProps['items'] = [
    {
        key: '/info',
        label: 'Ученики',
    }
];

export const Header = () => {
    const { role } = useAuth();
    const navigate = useNavigate();
    const onChange = (key: string) => {
        navigate(key);
    };
    return (
        <nav className={"header"} style={{borderBottom: '1px solid #e8e8e8',}}>
            {role === 'CURATOR' && (
                <>
                    <IstokiButton page="/home/info" />
                    <Tabs className={"header-tabs"} defaultActiveKey="info" items={couratorItem} onChange={onChange} />
                </>
            )}

            {role === 'USER' && (
                <>
                    <IstokiButton page="/home/diary" />
                    <Tabs className={"header-tabs"} defaultActiveKey="diary" items={userItem} onChange={onChange} />
                </>
            )}
        </nav>
    );
};