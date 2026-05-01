export default function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="flex flex-col gap-4"
        >
            <input
                name="name"
                placeholder="Name"
                className="p-3 bg-zinc-900 rounded"
                required
            />

            <input
                name="email"
                placeholder="Email"
                className="p-3 bg-zinc-900 rounded"
                required
            />

            <textarea
                name="message"
                placeholder="Message"
                className="p-3 bg-zinc-900 rounded h-40"
                required
            />

            <button className="bg-white text-black py-2 rounded-xl">
                Send Message
            </button>
        </form>
    );
}