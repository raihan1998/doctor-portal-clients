import React from 'react';
import chair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='mr-12 shadow-xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>Your Selected Date: <b>{format(date, 'PP')}</b></p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;