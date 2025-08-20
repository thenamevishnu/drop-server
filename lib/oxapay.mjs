import { paymentSettings } from "../config/payment.config.mjs";
import axios from "axios"

export const createPaymentLink = async (amount, user_id, callback_url, return_url) => {
    try {
        const orderId = crypto.randomUUID()
        const data = {
            amount,
            currency: paymentSettings.currency,
            lifetime: 1440,
            fee_paid_by_payer: 0,
            under_paid_coverage: 2.5,
            callback_url,
            return_url,
            order_id: `${orderId}`,
            description: `${user_id}`,
        };
        const url = 'https://api.oxapay.com/v1/payment/invoice';

        const headers = {
            'merchant_api_key': process.env.OXAPAY_MERCHANT_API_KEY,
            'Content-Type': 'application/json',
        };

        const { data: response } = await axios.post(url, data, { headers });
        console.log(response)
        return response
    } catch (err) {
        return {
            error: "Error happened while creating payment link."
        }
    }
}