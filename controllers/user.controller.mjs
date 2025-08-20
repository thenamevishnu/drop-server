const signup = async (request, response) => {
    try {
        return response.status(200).send({
            message: "User signed up successfully."
        })
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Error happened while signing up."
        })
    }
}

export default {
    signup
}