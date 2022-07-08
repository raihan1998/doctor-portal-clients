import React from 'react';
import contactBg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className='mt-36' style={{ background: `url(${contactBg})` }}>
            <div className='text-white text-center pt-14'>
                <h3>Contact Us</h3>
                <h2 className='text-3xl'>Stay connected with us</h2>
            </div>
            <div>
                <div className="hero pb-14">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control my-6">
                                    <input type="text" placeholder="subject" className="input input-bordered" />
                                </div>

                                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>

                                <div className="form-control mt-6">
                                    <PrimaryButton>Submit</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;