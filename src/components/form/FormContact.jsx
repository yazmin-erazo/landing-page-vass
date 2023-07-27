import { useState } from 'react';
import './formContact.scss'

const FormContact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', organization: '', country: '', phone: '', message: '', });
    const [errors, setErrors] = useState({ name: '', email: '', organization: '', country: '', phone: '', message: '', });
    const [formSubmitted, setFormSubmitted] = useState(false)
    
    const validateForm = () => {
        let valid = true;
        const newErrors = {};
    
        if (formData.name.trim() === '') {
        newErrors.name = 'Nombre y apellidos son requeridos';
        valid = false;
        }
    
        const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Ingresa un email válido';
            valid = false;
        }
    
        if (formData.organization.trim() === '') {
            newErrors.organization = 'La organización es requerida';
            valid = false;
        }
    
        if (formData.message.trim() === '') {
            newErrors.message = 'El mensaje es requerido';
            valid = false;
        }
    
        setErrors(newErrors);
        return valid;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
            if (validateForm()) {
            console.log('Form is valid. Submitting data...');
            } else {
            console.log('Form is invalid. Please correct the errors.');
            }
    };


return (
    <div>
        <form onSubmit={handleSubmit} className="px-4">
            <div className="container d-md-flex col-12">
                
            <div className="col-md-5 col-lg-4 d-flex flex-column">
                <input type="text" placeholder="Nombre y apellidos" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                {errors.name && <span className="text-danger">{errors.name}</span>}
    
                <input type="email" placeholder="E-mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                {errors.email && <span className="text-danger">{errors.email}</span>}
    
                <input type="text" placeholder="Empresa/Organismo" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })}/>
                {errors.organization && <span className="text-danger">{errors.organization}</span>}
    
                <input type="text" placeholder="País" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}/>
                {errors.country && <span className="text-danger">{errors.country}</span>}
            </div>

            <div className="col-1"></div>
                <div className="col-md-5 col-lg-4 d-flex flex-column">
                    <input type="tel" placeholder="Teléfono" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} pattern="[0-9]{7,}"/>
                    {errors.phone && <span className="text-danger">{errors.phone}</span>}
        
                    <label htmlFor="message" className="form-label text-light">Mensaje</label>
                    <textarea className="col-12 col-md-12 border border-1 bg-transparent rounded-2 mb-2" rows="6" value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}>

                    </textarea>
                    {errors.message && <span className="text-danger">{errors.message}</span>}
        
                    <button type="submit" className="align-self-end mt-5">Enviar</button>
                    {formSubmitted && Object.values(errors).some((error) => error !== '') && (
                    <p className="text-light mt-3">Uno o más campos tienen un error. Por favor, revísalos e inténtalo de nuevo.</p>
                    )}
                </div>
            </div>
        </form>
    </div>
    );
};

export default FormContact;