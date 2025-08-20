import { createPaymentLink } from "../lib/oxapay.mjs"

const createPayment = async (request, response) => {
    try {
        if(!request.body) return response.status(400).send({
            message: "Request body is required."
        })
        const { amount, user_id } = request.body
        if(!amount) return response.status(400).send({
            message: "Amount is required."
        })
        const paymentLink = await createPaymentLink(amount, user_id)
        if(!paymentLink) return response.status(500).send({
            message: "Error happened while creating payment link."
        })
        return response.status(200).send(paymentLink)
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Error happened while creating payment link."
        })   
    }
}

export default {
    createPayment
}