import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../ReaduxToolkit/Hooks";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { setSubscription } from '../ReaduxToolkit/Reducer/subscriptionSlice';


interface CheckoutFormProps { 
  priceId: string;
  planLabel: string;
  planId: string; 
  payType: string;
  priceUnit: Number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ priceId, planLabel, payType, priceUnit }) => {

  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  let userName = '';
  let userEmail ='';

  const storedUser = localStorage.getItem('user');

  if(storedUser)
  {
    const parsedUser = JSON.parse(storedUser);
    if(parsedUser.email)
    {

       userName = parsedUser.firstName+' '+parsedUser.lastName;
       userEmail = parsedUser.email;
    }

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe.js has not yet loaded.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card element not found.");
      setLoading(false);
      return;
    }

    try {
      // Create a payment method
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (pmError) {
        throw new Error(pmError.message);
      }

      // Call your backend to create the subscription
      const response = await fetch("https://focuslottery.com/api/jankgo/paymentController/createSubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          priceId, // ✅ correctly pass priceId
          payType,
          userName,
          userEmail,
          priceUnit
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Subscription creation failed.");
      }

      if (data.status === "successful") {
        dispatch(setSubscription(true)); // ✅ Mark user as subscribed
      }

      const clientSecret = data.clientSecret;
      if (!clientSecret) {
        throw new Error("Client secret not returned from server.");
      }

      // Confirm the payment
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        alert("🎉 Subscription successful! Thank you for subscribing.");
      } else {
        alert("🎉 Subscription initiated! Your payment will be confirmed shortly.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during subscription.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="item position-relative">

         <style>{`
          .pricing-table .block-heading { padding-top: 50px; margin-bottom: 40px; text-align: center;  color: #33BFBF}
          .pricing-table .block-heading h2 { color: #cac8c8 }
          .pricing-table .block-heading p { text-align: center; max-width: 420px; margin: auto; opacity: 0.7;color: #cac8c8}
          .pricing-table .heading { text-align: center; padding-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.1); }
          .pricing-table .item { background-color: #1f2f3e;border-radius: 12px; box-shadow: 0px 2px 10px rgba(0,0,0,0.075); border-top: 2px solid #5ea4f3; padding: 30px; overflow: hidden; position: relative; max-width: 460px; margin: 15px; }
          .pricing-table .item button { font-weight: 600; }
          .pricing-table .ribbon { width: 89px; height: 39px; font-size: 12px; text-align: center; color: #fff; font-weight: bold; box-shadow: 0px 2px 3px rgba(136,136,136,0.25); background: #4dbe3b; transform: rotate(45deg); position: absolute; right: -42px; top: 2px; padding-top: 7px; }
          .pricing-table .item p { min-height: 70px;text-align: center; margin-top: 20px; opacity: 0.7; color: #33BFBF}
          .pricing-table .features .feature { font-weight: 600;color: #33BFBF}
          .pricing-table .features h4 { text-align: center; font-size: 18px; padding: 5px; }
          .pricing-table .price h4 { margin: 15px 0; font-size: 45px; text-align: center; color: #cac8c8}
          .pricing-table .buy-now button { text-align: center; margin: auto; font-weight: 600; padding: 9px 0;--bs-btn-color: #33BFBF;--bs-btn-border-color: #33BFBF }
          .pricing-table h3{min-height: 70px;font-size: 1.7em;}
        `}</style>

      <h2 className="text-lg font-semibold mb-2 text-center">{planLabel}</h2>
      <CardElement className="p-2 border mb-4 rounded" />
      {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        {loading ? "Processing..." : `Subscribe to ${planLabel}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
