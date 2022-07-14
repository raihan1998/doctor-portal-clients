import React from 'react';

const Login = () => {
    return (
        <div class="shadow-2xl lg:w-96 md:w-96 mx-auto mt-20">
            <div class="card-body">
                <div class="form-control mb-4">
                    <input type="email" name='email' placeholder="email" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <input type="password" name="password" placeholder="password" class="input input-bordered" required />
                </div>
                <div class="form-control mt-12 ">
                    <button class="btn btn-secondary">Google</button>
                </div>
                <div class="form-control">
                    <button class="btn btn-secondary ">Git Hub</button>
                </div>
                <div class="form-control">
                    <button class="btn btn-secondary">Facebook</button>
                </div>
                <div class="form-control mt-12">
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;