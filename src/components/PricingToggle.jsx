import React from 'react'

export const PricingToggle = ({ isToggled, billingToggle }) => {

    return (
        <label htmlFor="checkSlide" className='switch'>
            <input
                type="checkbox"
                id="checkSlide"
                checked={isToggled}
                onChange={billingToggle}
            />
            <span
                className='slider'
            />
        </label>
    )
}
