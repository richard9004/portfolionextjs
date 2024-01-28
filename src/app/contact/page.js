import styles from '@/app/styles/style.css';
import  '@/app/styles/contact.css';
import  ContactForm from '@/app/components/ContactForm';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const metadata = {
  title: 'Get In Touch',
  description:'Send a query by filling up the contact form'
}

const Contact = () => {


  return (
  
      <ContactForm/>
   
  );
};

export default Contact;
