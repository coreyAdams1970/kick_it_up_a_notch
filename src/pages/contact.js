import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import ReactGA from 'react-ga';
ReactGA.initialize('G-GQ7PW6FH0Z');

const ContactContainer = styled.div`
    top:200px;
 
`;

export default function Contact(props) {

    const siteTitle = "Kick It Up A Notch Alpine and Desert Design";
    const [data, setData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        if (typeof "window" !== "undefined") {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [])

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contactForm", ...data })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    const handleChange = e => setData({ [e.target.name]: e.target.value });
    const { name, email, message } = data;
    return (
        <Layout location={props.location} title={siteTitle}>
            <SEO
                title="Contact"
                keywords={[`desert landscaping`, `landscaping`, `landscape design`, `arizona landscape design`]}
            />

            <ContactContainer className="d-flex position-relative">
                <form name="contactForm" onSubmit={handleSubmit} data-netlify="true" >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Your Name: <input type="text" value={name} onChange={handleChange} name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" value={email} onChange={handleChange}/></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message" value={message} onChange={handleChange}></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </ContactContainer>
        </Layout>
    )
}
