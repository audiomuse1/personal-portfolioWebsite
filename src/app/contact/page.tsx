// src/app/contact/page.tsx
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <ContactForm />
    </section>
  );
}