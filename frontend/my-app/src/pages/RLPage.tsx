import React from "react";
import { LoginButton } from "../components/auth/login/LoginButton";
import { RegisterButton } from "../components/auth/register/RegisterButton";
import { ScrollReveal } from "../components/effects/ScrollReveal";
import "../components/css/Animations.css";
import { Typography } from "antd";

const Title = Typography.Title;

export const RLPage: React.FC = () => {
    return (
        <div style={{
            minHeight: '200vh', 
            display: 'flex',
            flexDirection: 'column',   
            alignItems : 'center',   
            gap: '50vh',
            paddingTop: '10vh',          
        }}>
            <div style={{ display: 'flex', flexDirection: 'column',  gap: '6vh', alignItems: 'center', textAlign: 'center' }}>
                    <Title level={1}>Добро пожаловать в ИСТОКИ</Title>
                    <Title level={2}>Отмечайте настроение, следите за динамикой и получайте поддержку — всё в одном месте.</Title>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <LoginButton />
                        <RegisterButton />
                    </div>
                    
            </div>


            <ScrollReveal direction="left" distance={50} delay={0.1}>
                <Title level={4} style={{ color: '#000000', opacity: 0.8, marginBottom: 24 }}>
                     Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.
            Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
            В лингвистике термин «текст» используется в широком значении, включая и образцы устной речи. Восприятие текста изучается в рамках лингвистики текста и психолингвистики. Так, например, И. Р. Гальперин определяет текст следующим образом: «Это письменное сообщение, объективированное в виде письменного документа, состоящее из ряда высказываний, объединённых разными типами лексической, грамматической и логической связи, имеющее определённый модальный характер, прагматическую установку и соответственно литературно обработанное»[1].
                </Title>
            </ScrollReveal>

            <h3 style={{ color: '#000000', opacity: 0.6}}>
                    2026 © Все права защищены
            </h3>
        </div>
    );
}