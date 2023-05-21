import React from 'react';
import { Form } from 'react-router-dom';

const AddToys = () => {



    const formHandler = (event) => {
        event.preventDefault();
        const form = event.target;
    }

    return (
        <div>
            <Form onSubmit={formHandler}>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent w-full max-w-xs"
                />
            </Form>
        </div>
    );
};

export default AddToys;