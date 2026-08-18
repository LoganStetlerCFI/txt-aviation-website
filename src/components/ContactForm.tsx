"use client";

import { contactSubjects } from "@/lib/site-config";

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        // TODO: wire up to Formspree once the endpoint is set up.
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-navy-800/20 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-navy-800/20 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy-900">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-md border border-navy-800/20 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy-900">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="mt-1 w-full rounded-md border border-navy-800/20 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        >
          {contactSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-navy-800/20 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
      >
        Send Message
      </button>
    </form>
  );
}
