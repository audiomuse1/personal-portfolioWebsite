// src/app/contact/page.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      
      <div className="mb-12">
        <p className="text-lg mb-8">
          I'm always open to discussing new opportunities and ideas. Feel free to reach out for a phone call or video chat - I'd be happy to schedule time to connect!
        </p>

        <div className="space-y-4 mb-12">
          <Link 
            href="https://github.com/audiomuse1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaGithub className="text-2xl" />
            <span>github.com/audiomuse1</span>
          </Link>

          <Link 
            href="https://linkedin.com/in/ajhartford"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
            <span>linkedin.com/in/ahartford</span>
          </Link>

          <Link 
            href="mailto:andrewhartford2@gmail.com"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaEnvelope className="text-2xl" />
            <span>andrewhartford2@gmail.com</span>
          </Link>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}