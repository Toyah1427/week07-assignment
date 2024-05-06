import { useState } from "react";

export default function FanForm() {
    const [form, setForm] = useState({ name: "", age: 0});

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8080/fan", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Tell us your favourite B-movie</h3>
            <p>
                Add another movie to our collection
            </p>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="age" type="number" onChange={handleChange} />
            <button>Become a fan</button>
        </form>
    );
}