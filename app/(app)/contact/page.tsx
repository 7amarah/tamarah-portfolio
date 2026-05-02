import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
    title: "Contact | Tamarah Waritimi",
    description: "Get in touch with Tamarah Waritimi",
};

export default function ContactPage() {
    return (
        <div
            id="contact"
            className="p-10 max-w-2xl mx-auto"
        >
            <h1 className="text-3xl font-bold mb-6">
                Contact Me
            </h1>

            <ContactForm />
        </div>
    );
}