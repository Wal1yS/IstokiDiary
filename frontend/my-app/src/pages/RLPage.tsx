import React from "react";
import { LoginButton } from "../components/RL/Login/LoginButton";
import { RegisterButton } from "../components/RL/Register/RegisterButton";
import { ScrollReveal } from "../components/Effects/ScrollReveal";
import "../components/css/Animations.css";

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
            <ScrollReveal direction="up" duration={1}>
                <div style={{ display: 'flex', flexDirection: 'column',  gap: '6vh' }}>
                    <div style={{ gap: '2vh', fontSize: '30px'}}>
                        <h1>Добро пожаловать в ИСТОКИ</h1>
                        <h2>Основные трактовки понятия «текст»: имманентная расширенная, </h2>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '6vh' }}>
                        <LoginButton />
                        <RegisterButton />
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={50} delay={0.1}>
                Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.
Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
В лингвистике термин «текст» используется в широком значении, включая и образцы устной речи. Восприятие текста изучается в рамках лингвистики текста и психолингвистики. Так, например, И. Р. Гальперин определяет текст следующим образом: «Это письменное сообщение, объективированное в виде письменного документа, состоящее из ряда высказываний, объединённых разными типами лексической, грамматической и логической связи, имеющее определённый модальный характер, прагматическую установку и соответственно литературно обработанное»[1].
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
                <h3 style={{ color: '#ffffff', opacity: 0.6}}>
                    2026 © Все права защищены
                </h3>
            </ScrollReveal>
        </div>
    );
}