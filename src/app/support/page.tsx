"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Support Center</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Need help? Browse our FAQ, reach out to our team, or explore our
              knowledge base.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Get in Touch</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Email Support",
                desc: "Get help from our support team within 24 hours.",
                action: "support@stableusd.io",
                icon: "✉",
              },
              {
                title: "Live Chat",
                desc: "Chat with our team in real-time during business hours.",
                action: "Start Chat",
                icon: "💬",
              },
              {
                title: "Developer Support",
                desc: "Technical help for integrations and API issues.",
                action: "dev-support@stableusd.io",
                icon: "⚙",
              },
            ].map((option) => (
              <div key={option.title} className="card-hover rounded-2xl border border-border bg-surface-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{option.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{option.desc}</p>
                <p className="mt-4 text-sm font-medium text-primary">{option.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-border bg-surface-card">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-text-primary">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-text-muted transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="border-t border-border px-5 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">Send Us a Message</h2>
          <p className="mb-12 text-center text-text-secondary">
            Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get back to you.
          </p>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-primary">Subject</label>
              <select
                id="subject"
                className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-primary"
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="business">Business Partnership</option>
                <option value="compliance">Compliance & Legal</option>
                <option value="press">Press & Media</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
