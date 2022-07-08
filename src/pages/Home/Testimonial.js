import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            review: '',
            img: person1
        },
        {
            _id: 2,
            name: 'potol begun',
            location: 'California',
            review: '',
            img: person2
        },
        {
            _id: 3,
            name: 'alu mula',
            location: 'padma',
            review: '',
            img: person3
        }
    ];

    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-bold text-primary'>Testimonial</h3>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="quotation" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;