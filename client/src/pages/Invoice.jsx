import React, { useState } from 'react';
import axios from 'axios';

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
