// components/PaymentOptions.tsx
import React from 'react';

interface PaymentOptionsProps {
  // Add any necessary props here
}

const PaymentOptions: React.FC<PaymentOptionsProps> = () => {
  return (
    <div className="bg-white p-4 mt-8 rounded shadow">
      <div className="flex items-center mb-4">
        <input type="radio" id="directBankTransfer" name="payment" defaultChecked />
        <label htmlFor="directBankTransfer" className="ml-2 text-xl"  >
          Direct Bank Transfer
        </label>
      </div>

      <div className="flex items-center mt-4">
        <input type="radio" id="cashOnDelivery" name="payment" />
        <label htmlFor="cashOnDelivery" className="ml-2 text-xl" >
          Cash On Delivery
        </label>
      </div>

      <p className="text-md text-gray-600 mt-4" style={{fontSize:"20px"}}>
        Your personal data will be used to support your experience throughout this website,
        to manage access to your account, and for other purposes described in our{' '}
        <a href="#" className="text-blue-500 hover:underline">
          privacy policy
        </a>
        .
      </p>

      
    </div>
  );
};

export default PaymentOptions;