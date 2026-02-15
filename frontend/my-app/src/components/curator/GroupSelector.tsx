import React from 'react';
import { type MenuProps, Dropdown, Space } from 'antd';
import '../../styles/colors.css';
import type { Underline } from 'lucide-react';

export type GroupOption = {
    id: number;
    label: string;
    disabled?: boolean;
};

type Props = {
    groups: GroupOption[];
    value: number | null;
    onChange: (groupId: number) => void;
};

export const GroupSelector: React.FC<Props> = ({ groups, value, onChange }) => {
    const selectedLabel = groups.find((g) => g.id === value)?.label ?? 'Выберите группу';

    const items: MenuProps['items'] = groups.map((g) => ({
        key: String(g.id),
        label: g.label,
        disabled: g.disabled,
    }));

    const onClick: MenuProps['onClick'] = ({ key }) => {
        const id = Number(key);
        if (!Number.isNaN(id)) onChange(id);
    };

    return (
        <Dropdown menu={{ items, onClick }} trigger={['click']} arrow={false} >
            <a
                onClick={(e) => e.preventDefault()}
                style={{
                    color: 'var(--buttons-color)',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    lineHeight: 'inherit',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <Space size={8}>
                    {selectedLabel}
                </Space>
            </a>
        </Dropdown>
    );
};
