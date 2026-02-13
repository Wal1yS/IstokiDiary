import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div style={{ padding: '20px', border: '2px dashed blue', margin: '10px' }}>
            <h3>Счетчик: {count}</h3>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {isOpen ? (
                    <>
                    <button onClick={decrement}>- Минус</button>
                    <button onClick={increment}>+ Плюс</button>
                    <button onClick={() => setCount(0)} style={{ backgroundColor: '#ffcccc' }}>
                        Сброс
                    </button>
                    </>
                ) : (
                    <p>Счетчик закрыт. Нажмите "Открыть", чтобы увидеть кнопки.</p>
                )}
            </div>
            <button onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: '#ccffcc', marginTop: '10px' }}>
                {isOpen ? 'Закрыть' : 'Открыть'}
            </button>
        </div>
    );

}