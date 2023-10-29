import React from 'react'
export const CardInfo = () => {
    return (
        <section className='card__info'>
            <div className="card__info_features_check">
                <div className='card__info_features'>
                    <img src="../src/assets/icon-check.svg" alt="checkIcon" />
                    <p>Unlimited websites</p>
                </div>
                <div className='card__info_features'>
                    <img src="../src/assets/icon-check.svg" alt="checkIcon" />
                    <p>100% data ownership</p>
                </div>
                <div className='card__info_features'>
                    <img src="../src/assets/icon-check.svg" alt="checkIcon" />
                    <p>Email reports</p>
                </div>

            </div>
            <div className="card__info_btn">
                <a href="" className='btn text-center'>Start my trial</a>
            </div>
        </section>
    )
}
