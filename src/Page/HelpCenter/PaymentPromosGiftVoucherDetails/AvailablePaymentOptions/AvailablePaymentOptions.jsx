import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const AvailablePaymentOptions = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>

                <p className='py-4'>We have various safe and easy ways to pay. Some payment options are only available for certain orders and only the available options will be presented during checkout.
                </p>

                <h1 className='py-4'> Payment can be made via: </h1>

                <ul className='list-disc py-4'>
                    <li className='py-3'> <b>Credit & Debit Card:</b> Simply complete your card details to save your card and checkout.</li>

                    <li className='py-3'> <b>Maestro & Visa Electron:</b> Simply complete your Maestro or Visa card details and checkout.</li>

                    <li className='py-3'> <b>Ozow:</b> EFT with Ozow enables you to make EFT payments that clear immediately. ABSA, Capitec, FNB, Nedbank, Standard Bank, Investec, Bidvest Bank, Tyme Bank and African Bank are supported.</li>

                    <li className='py-3'> <b>PayFast:</b> EFT with PayFast enables you to make instant EFT payments that clear immediately. ABSA, Capitec, FNB, Nedbank, Standard Bank, Investec, Bidvest Bank, Tyme Bank and African Bank are supported.</li>

                    <li className='py-3'> <b>COD (Cash on Delivery):</b> Offered as a payment option for certain orders, delivered within certain geographical areas, and on select products based on value. Only cash payments are accepted. No card or digital payment facilities are available at this time.</li>

                    <li className='py-3'> <b>eBucks:</b> Spend your ebucks and log into your eBucks account, access your FNB App to access your 4 digit pin and complete payment.</li>

                    <li className='py-3'> <b>Discovery Miles:</b> Simply log into your Discovery Account and key in your OTP sent to your registered device to complete checkout.</li>

                    <li className='py-3'> <b>Mobicred: </b> Online credit facility that allows you to pay in monthly instalments.
                    </li>

                    <li className='py-3'> <b>NSFAS Wallet | Celbux eVoucher : </b> Simply enter a valid NSFAS wallet or Celbux voucher code</li>

                    <li className='py-3'> <b>MasterPass by MasterCard:</b> Open your banking app and go to the Scan to pay option, scan, accept payment and complete checkout </li>

                    <li className='py-3'> <b>Payflex: </b> No interest. No fees. Pay in 4 equal instalments over 6 weeks.</li>
                </ul>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default AvailablePaymentOptions;