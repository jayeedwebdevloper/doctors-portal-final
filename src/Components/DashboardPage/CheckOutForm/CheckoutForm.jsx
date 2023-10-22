/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ book, closeModal, refetch }) => {
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState();
    // eslint-disable-next-line react/prop-types
    const price = +(book.price);



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctor-portal-back-doxwbltz3-jayeedwebdevloper.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }

        const { paymentIntent, err } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: book.patient,
                        email: book.email,
                    },
                },
            },
        );

        if (err) {
            setCardError(err.message);
            return
        }
        if (paymentIntent.status == 'succeeded') {
            const paymentId = paymentIntent.id;
            const paid = price;
            const payStatus = 'Paid';

            const pay = {
                paymentId,
                paid,
                payStatus
            }

            fetch(`https://doctor-portal-back-doxwbltz3-jayeedwebdevloper.vercel.app/paid/${book._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(pay)
            }).then(res => res.json()).then(data => {
                console.log(data);
            })

            closeModal();
            refetch();
        }
    }
    return (

        <div>
            <form onSubmit={handleSubmit} className='modal-form'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='theme-btn-2 w-100 margin-top-20' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    cardError && <p className='theme-text-danger'>{cardError}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;