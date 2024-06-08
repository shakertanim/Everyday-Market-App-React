import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    // Removed formValid and setFormValid as they are not used

    const navigate = useNavigate();

    const validateForm = () => {
        // Perform validation logic here
        const isNameValid = /^[a-zA-Z\s]+$/.test(name);
        const isEmailValid = /\S+@\S+\.\S+/.test(email);
        const isPhoneValid = /^\d{10}$/.test(phone);
        const isDobValid = dob !== '';
        const isAddressValid = /\w+/.test(address);
        const isProvinceValid = /\w+/.test(province);
        const isCountryValid = /\w+/.test(country);

        return isNameValid && isEmailValid && isPhoneValid && isDobValid && isAddressValid && isProvinceValid && isCountryValid && termsAccepted;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            navigate('/product');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email address:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <div>
                    <label>Street Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label>Province:</label>
                    <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div>
                    <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
                    <label>Accept Terms & Conditions</label>
                </div>
                <button type="submit" disabled={!validateForm()}>Submit</button>
            </form>
        </div>
    );
}

export default RegisterPage;
