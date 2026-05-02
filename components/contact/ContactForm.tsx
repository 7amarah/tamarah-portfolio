"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/mvzlzoly", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }

        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <div className="relative">

            {/* TOAST */}
            {status === "success" && (
                <div className="absolute -top-14 left-0 right-0 mx-auto w-fit px-4 py-2 rounded-full bg-black text-white text-sm shadow-lg">
                    Message sent successfully ✨
                </div>
            )}

            {status === "error" && (
                <div className="absolute -top-14 left-0 right-0 mx-auto w-fit px-4 py-2 rounded-full bg-red-500 text-white text-sm shadow-lg">
                    Something went wrong. Try again.
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                />

                <input
                    name="name"
                    placeholder="Name"
                    className="
                        p-3 border border-gray-200 rounded-lg
                        transition-all duration-200
                        focus:outline-none
                        focus:ring-2 focus:ring-black/10
                        focus:border-black/30
                        focus:scale-[1.01]
                    "
                    required
                />

                <input
                    name="email"
                    placeholder="Email"
                    className="
                        p-3 border border-gray-200 rounded-lg
                        transition-all duration-200
                        focus:outline-none
                        focus:ring-2 focus:ring-black/10
                        focus:border-black/30
                        focus:scale-[1.01]
                    "
                    required
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    className="
                        p-3 border border-gray-200 rounded-lg h-40
                        transition-all duration-200
                        focus:outline-none
                        focus:ring-2 focus:ring-black/10
                        focus:border-black/30
                        focus:scale-[1.01]
                    "
                    required
                />

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                       bg-white text-black
                        py-2 rounded-xl
                        hover:opacity-90 transition
                        disabled:opacity-50

                        w-3/5
                        mx-auto
                        block
                    "
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {/* <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                        bg-white text-black
                        py-2 rounded-xl
                        hover:bg-black/90
                        active:scale-[0.98]
                        transition-all duration-200
                        disabled:opacity-50
                    "
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button> */}
            </form>
        </div>
    );
}