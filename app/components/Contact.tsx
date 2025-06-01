"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS Configuration
      const serviceID =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "serviceID";
      const templateID =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "templateID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log(serviceID, templateID, publicKey);

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "youssefhassany22@gmail.com",
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Spider web corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0,0 L50,0 L0,50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-red-500"
          />
          <path
            d="M0,20 L30,0 M0,40 L20,0"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-red-500"
          />
          <circle
            cx="15"
            cy="15"
            r="1"
            fill="currentColor"
            className="text-red-600"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0,0 L50,0 L0,50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-600"
          />
          <path
            d="M0,20 L30,0 M0,40 L20,0"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-600"
          />
          <circle
            cx="15"
            cy="15"
            r="1"
            fill="currentColor"
            className="text-blue-700"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent web-text-pulse">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-600 to-red-500 mx-auto mb-6 rounded-full web-pulse"></div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/20 dark:to-blue-900/20 rounded-lg group-hover:shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 web-icon-hover">
                  <Mail
                    size={24}
                    className="text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:youssefhassany22@gmail.com"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    youssefhassany22@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-red-100 dark:from-blue-900/20 dark:to-red-900/20 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 web-icon-hover">
                  <Phone
                    size={24}
                    className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+201226647915"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +20 122 6647-915
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/20 dark:to-blue-900/20 rounded-lg group-hover:shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 web-icon-hover">
                  <MapPin
                    size={24}
                    className="text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Egypt</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/youssef-hassany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-gradient-to-br hover:from-red-100 hover:to-blue-100 dark:hover:from-red-900/20 dark:hover:to-blue-900/20 rounded-lg transition-all duration-300 group web-social-hover"
                  aria-label="GitHub Profile"
                >
                  <Github
                    size={24}
                    className="text-zinc-600 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:scale-110 transition-all duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/youssef-hassany-862a37284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-gradient-to-br hover:from-blue-100 hover:to-red-100 dark:hover:from-blue-900/20 dark:hover:to-red-900/20 rounded-lg transition-all duration-300 group web-social-hover"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin
                    size={24}
                    className="text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300"
                  />
                </a>
                <a
                  href="https://x.com/ywsf_hassany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-gradient-to-br hover:from-red-100 hover:to-blue-100 dark:hover:from-red-900/20 dark:hover:to-blue-900/20 rounded-lg transition-all duration-300 group web-social-hover"
                  aria-label="Twitter Profile"
                >
                  <Twitter
                    size={24}
                    className="text-zinc-600 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:scale-110 transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-300 dark:hover:border-red-700 transition-colors web-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 dark:hover:border-blue-700 transition-colors web-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-300 dark:hover:border-red-700 transition-colors web-input"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 dark:hover:border-blue-700 transition-colors resize-none web-input"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2 justify-center web-button-hover transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin web-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 web-success-message">
                  Thank you! Your message has been sent successfully. I&apos;ll
                  get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 web-error-message">
                  Something went wrong. Please try again or contact me directly
                  via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes webPulse {
          0%,
          100% {
            opacity: 1;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.7;
            transform: scaleX(1.1);
          }
        }
        .web-pulse {
          animation: webPulse 2s ease-in-out infinite;
        }

        @keyframes textPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .web-text-pulse {
          animation: textPulse 3s ease-in-out infinite;
        }

        .web-icon-hover:hover {
          transform: translateY(-2px);
        }

        .web-social-hover:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.15);
        }

        .web-input:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .web-button-hover:hover {
          box-shadow: 0 10px 40px rgba(239, 68, 68, 0.3);
        }

        .web-spinner {
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
        }

        .web-success-message {
          border-left: 4px solid #10b981;
        }

        .web-error-message {
          border-left: 4px solid #ef4444;
        }
      `}</style>
    </section>
  );
}
