import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { contactData } from '../../data/contact';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "8272ddd8-9abc-4c51-9b56-964384936b7e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.currentTarget.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error", error);
            setResult("Something went wrong!");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setResult(""), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Get in Touch</h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                Feel free to reach out for any inquiries about projects, collaborations, or just to say hello.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-5">
                                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-brand shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-slate-100 font-bold mb-1">Email</h3>
                                    <a href={`mailto:${contactData.email}`} className="text-slate-400 hover:text-brand transition-colors">
                                        {contactData.email}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-5">
                                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-brand shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-slate-100 font-bold mb-1">Location</h3>
                                    <p className="text-slate-400">
                                        {contactData.location.display}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-sm relative bg-slate-900">
                            <iframe
                                src={contactData.location.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl"
                    >
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    placeholder="Your message..."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                            {result && (
                                <p className={`text-center text-sm font-medium ${result.includes("success") ? "text-green-500" : "text-red-500"}`}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
