import React, { useState } from 'react'
import { PricingToggle } from './PricingToggle';

export const Pricing = () => {
  const [value, setValue] = useState(16.00);
  const [maxValue, setMaxValue] = useState(100);
  const [billing, setBilling] = useState("month")
  const [isToggled,  ] = useState("false");

  const setRange = (e) => {
    setValue(e.target.value);
    let totalPercent = (value * 100) / maxValue;
    e.target.style.backgroundSize = totalPercent + "% 100%";
  }
  const billingToggle = () => {
    if (billing == "month") {
      setBilling("year");
      setMaxValue(50)
    } else {
      setBilling("month");
      setMaxValue(100);
    }
  };


  return (
    <section className="card__pricing">
      <div className='card__pricing_resume'>
        <h3>100K PAGEVIEWS</h3>
        <input
          type="range"
          onChange={setRange}
          value={value}
          max={maxValue}
        />
        <p className='card__pricing_bill'>${value}.00 <span>/ {billing}</span></p>
      </div>
      <div className='card__pricing_billing'>
        <p className=''>Monthly Billing <PricingToggle toggled={isToggled} billingToggle={billingToggle}></PricingToggle> Yearly Billing</p>
      </div>
    </section>
  )
}
