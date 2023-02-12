import React from 'react'
import Button from './Button';
import Input from './Input';
import useForm from '../hooks/useForm';
const UserForm = ({ submit }) => {

    const [form, handleChange, reset] = useForm({
        name: '',
        lastname: '',
        email: ''
    })

    /**
     * 
     * @param {Event} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(form)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col m-auto max-w-[526px] items-center'>
                <Input label='Nombre' name='name' value={form.name} onChange={handleChange} />
                <Input label='Apellido' name='lastname' value={form.lastname} onChange={handleChange} />
                <Input label='Correo' name='email' value={form.email} onChange={handleChange} />
                <Button>Agregar</Button>
            </form>
        </div>
    )
}

export default UserForm