import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const testKey = 'pk_test_51R9VKDAUHRoGObo1t0bsFXiNioROcQfpCJMQcuZepvJu87jlLKKaIDkn63JwmU1KkhLdwWKCh7GmMuz2pSYRLPec00UdlV22BE';
const prodKey = 'pk_live_51R9VKDAUHRoGObo1umkIRoilo6i8ol2E26THKJDEiG2cz1Vpupujrd0O8gXZbyXkY46cnHlmASQMnmD94rvOw7bK00ZFtr9llu';

const stripeMode = 'test'; // or dynamically set this from env/config
  const stripePromise = loadStripe(
    stripeMode === 'test' ? testKey : prodKey
  );

const plans = [
  {
    id: "7_DAY",
    label: "7 Day Access",
    description: "Access to the FocusLottery portal for 7 days.",
    access: "Yes",
    duration: "7 Days",
    storage: "Unlimited",
    price: "$12",
    priceUnit: 1200,
    isBestValue: false,
    payType: "one_time",
    priceId: 'price_1RgBO5AUHRoGObo1aW28yQfC', // ✅ use Stripe PRICE ID, not product ID
    TestpriceId: 'price_1RoElkAUHRoGObo1gOMzeb0J'
  },
  {
    id: "MONTHLY",
    label: "Monthly Membership",
    description: "Access to the FocusLottery portal and all features for a month.",
    access: "Yes",
    duration: "30 Days",
    storage: "Unlimited",
    price: "$28",
    priceUnit: 2800,
    isBestValue: true,
    payType: "recurring",
    priceId: 'price_1RgBOxAUHRoGObo1QSUNCIG9', // ✅ Stripe PRICE ID
     TestpriceId: 'price_1RoEnHAUHRoGObo1h6monhMw'
  },
  {
    id: "YEARLY",
    label: "Yearly Membership",
    description: "Access to the FocusLottery portal and all features for a full year.",
    access: "Yes",
    duration: "365 Days",
    storage: "Unlimited",
    price: "$213",
    priceUnit: 21300,
    isBestValue: false,
    payType: "recurring",
    priceId: 'price_1RgBPTAUHRoGObo1b1wkRZsy', // ✅ Stripe PRICE ID
    TestpriceId: 'price_1RoEnbAUHRoGObo1Jpb3qen6',
  },
];

const SubscriptionPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  return (
    <Elements stripe={stripePromise}>
      <section className="pricing-table py-5 bg-light">
        <style>{`
          .pricing-table .block-heading { padding-top: 50px; margin-bottom: 40px; text-align: center;  color: #33BFBF}
          .pricing-table .block-heading h2 { color: #cac8c8 }
          .pricing-table .block-heading p { text-align: center; max-width: 420px; margin: auto; opacity: 0.7;color: #cac8c8}
          .pricing-table .heading { text-align: center; padding-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.1); }
          .pricing-table .item { background-color: #1f2f3e;border-radius: 12px; box-shadow: 0px 2px 10px rgba(0,0,0,0.075); border-top: 2px solid #5ea4f3; padding: 30px; overflow: hidden; position: relative; max-width: 320px; margin: 15px; }
          .pricing-table .item button { font-weight: 600; }
          .pricing-table .ribbon { width: 89px; height: 39px; font-size: 12px; text-align: center; color: #fff; font-weight: bold; box-shadow: 0px 2px 3px rgba(136,136,136,0.25); background: #4dbe3b; transform: rotate(45deg); position: absolute; right: -42px; top: 2px; padding-top: 7px; }
          .pricing-table .item p { min-height: 70px;text-align: center; margin-top: 20px; opacity: 0.7; color: #33BFBF}
          .pricing-table .features .feature { font-weight: 600;color: #33BFBF}
          .pricing-table .features h4 { text-align: center; font-size: 18px; padding: 5px; }
          .pricing-table .price h4 { margin: 15px 0; font-size: 45px; text-align: center; color: #cac8c8}
          .pricing-table .buy-now button { text-align: center; margin: auto; font-weight: 600; padding: 9px 0;--bs-btn-color: #33BFBF;--bs-btn-border-color: #33BFBF }
          .pricing-table h3{min-height: 70px;font-size: 1.7em;}
        `}</style>

        <div className="container">
          <div className="block-heading">
            <h2>🎉 Thank You for Using FocusLottery!</h2>
            <p>Your subscription has expired, but we’re excited to keep helping you discover winning opportunities. Please select a plan below to continue accessing your lottery analytics and insights.</p>
          </div>

          {!selectedPlan && (
            <div className="d-flex flex-wrap justify-content-center">
              {plans.map((plan) => (
                <div key={plan.id} className="item position-relative">
                  {plan.isBestValue && <div className="ribbon">Best Value</div>}
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <h3 className="card-title text-uppercase mb-2">{plan.label}</h3>
                    <p className="card-text">{plan.description}</p>
                    <div className="features my-3">
                      <h4><span className="feature">All Access</span> : <span className="value">{plan.access}</span></h4>
                      <h4><span className="feature">Duration</span> : <span className="value">{plan.duration}</span></h4>
                    </div>
                    <div className="price">
                      <h4>{plan.price}</h4>
                    </div>
                    <button
                      onClick={() => setSelectedPlan(plan)}
                      className={`btn ${plan.isBestValue ? 'btn-primary' : 'btn-outline-primary'} w-100 mt-3`}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedPlan && (
            <div className="mt-5 mx-auto" style={{ maxWidth: '500px' }}>
              <CheckoutForm
                planLabel={selectedPlan.label}
                planId={selectedPlan.id}
                priceId={stripeMode === 'test' ? selectedPlan.TestpriceId : selectedPlan.priceId}
                payType={selectedPlan.payType}
                priceUnit={selectedPlan.priceUnit}
              />
              <button onClick={() => setSelectedPlan(null)} className="btn btn-link d-block mx-auto mt-3">
                Back to Plan Selection
              </button>
            </div>
          )}
        </div>
      </section>
    </Elements>
  );
};

export default SubscriptionPage;
