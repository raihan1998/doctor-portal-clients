import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body text-center">
                <h2 className=" text-secondary text-xl font-bold">{name}</h2>
                <p>
                    {slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another day</span>}
                </p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn border-none btn-sm bg-gradient-to-r from-secondary to-primary text-white"
                    >Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;