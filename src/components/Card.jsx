import React, { Component } from 'react';
import { Pricing } from './Pricing';
import { CardInfo } from './CardInfo';

export const Card = () => {

    return (
        <section className='card'>
            <Pricing></Pricing>
            <CardInfo></CardInfo>
        </section>
    )
}