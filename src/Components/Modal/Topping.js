import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div``;

const ToppingCheckbox = styled.input``;

const ToppingLabel = styled.label``;

export function Topping({ toppings, checkToppings }) {
    return (
    <>
        <h3>Добавки</h3>
        <ToppingWrap>
            {toppings.map((item, i) => (
                <ToppingLabel key={i}>
                    <ToppingCheckbox 
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checkToppings(i)} />
                    {item.name}
                </ToppingLabel>
            ))}
        </ToppingWrap>
    </>)
}