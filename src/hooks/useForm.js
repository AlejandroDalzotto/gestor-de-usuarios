import { useState } from "react"

const useForm = (initial) => {
    const [form, setForm] = useState(initial)

    /**
     * 
     * @param {Event} e 
     */
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setForm(initial)
    }

    return [form, handleChange, reset]
}

export default useForm;