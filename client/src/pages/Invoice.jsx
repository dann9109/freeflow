import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const invoiceUrl = pk_live_51Opz8GGi33Sul8mpg7IoKjAONbSEu1rhblph9vn5SCwVJThASPohrAgTwaVSFX6oa9rcWpJasCoItU47vDGjeeOZ00pTp6Dpdv

export default function Invoice() {

    const [email, setEmail] = useState('');

    const handleCreateInvoice = async () => {
        try {
            const response = await axios.post('http://localhost:3000/create-invoice', { email });
            window.open(response.data.invoiceUrl, "_blank");
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    };


    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Customer's Email"
            />
            <button onClick={handleCreateInvoice}>Create Invoice</button>
        </div>
    )
}