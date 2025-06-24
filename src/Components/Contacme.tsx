"use client";

import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      // Hier muss der Endpunkt angepasst werden
      const res = await fetch("/api/contact/", {
        // Die korrekte URL in App Directory Struktur
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Überprüfe, ob die Antwort ok ist und nicht leer
      if (res.ok) {
        const data = await res.json();
        setSuccessMessage(data.message || "Mail wurde gesendet!");
        setVisible(true);
        form.reset();
      } else {
        const data = await res.json();
        setSuccessMessage(data.error || "Fehler beim Senden.");
        setVisible(true);
      }
    } catch (error) {
      console.error("Fehler beim Absenden der Anfrage:", error);
      setSuccessMessage("Fehler beim Senden. Bitte versuche es später erneut.");
      setVisible(true);
    }

    // Verstecke die Erfolgsmeldung nach 1.5s
    setTimeout(() => {
      setVisible(false);
    }, 1500);

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  return (
    <section id="contact" className="bg-[#3c3c3c] text-white py-24 px-4">
      {/* Erfolgsmeldung fix und unten zentriert */}
      {successMessage && (
        <div className="fixed bottom-16 left-0 w-full flex justify-center px-4 z-50">
          <div
            className={`transition-opacity duration-500 w-[80%] ${
              visible ? "opacity-100" : "opacity-0"
            } bg-[#ea4343] text-white p-4 rounded-md shadow-lg text-center`}
          >
            {successMessage}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#ea4343] font-semibold uppercase text-sm block mb-2">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-[60px]">Contact me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300">
              Immer noch unsicher, ob ich die richtige Person für Ihr Projekt
              bin? Kontaktieren Sie mich!
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Image src="./call.svg" alt="call" width={32} height={32} />
                <div>
                  <span className="block text-sm text-gray-400">Call me</span>
                  <h3 className="text-lg font-bold">+49 1756453064</h3>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/message.svg" alt="email" width={32} height={32} />
                <div>
                  <span className="block text-sm text-gray-400">Email</span>
                  <h3 className="text-lg font-bold">
                    <a
                      href="mailto:christian@web.de"
                      className="hover:text-[#ea4343] transition-all duration-200"
                    >
                      christian.pressig@web.de
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343] md:col-span-2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message here"
              rows={5}
              className="w-full bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#ea4343] text-white font-bold px-6 py-3 rounded-md hover:bg-transparent hover:text-white border border-[#ea4343] transition-all flex items-center gap-2"
            >
              Absenden
              <Image src="/send.svg" alt="send" width={18} height={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
