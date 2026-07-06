import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const MIN_SUBMIT_SECONDS = 3;
const MESSAGE_DISPLAY_SECONDS = 6;

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const loadedAt = useRef(Date.now());

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timer = setTimeout(() => setStatus("idle"), MESSAGE_DISPLAY_SECONDS * 1000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    if (form.botcheck.checked) {
      return;
    }

    if ((Date.now() - loadedAt.current) / 1000 < MIN_SUBMIT_SECONDS) {
      return;
    }

    setStatus("sending");

    try {
      const formData = new FormData(form);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formData.append("subject", "New message from SPS-03.GITHUB.IO");

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-tertiary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md border border-tertiary/20 bg-primary-shade px-4 py-2 text-secondary outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-tertiary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-tertiary/20 bg-primary-shade px-4 py-2 text-secondary outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm text-tertiary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="resize-none rounded-md border border-tertiary/20 bg-primary-shade px-4 py-2 text-secondary outline-none focus:border-accent"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "sending"}
        className="cursor-none rounded-md bg-accent px-4 py-2 font-medium text-primary disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "success" && <p className="text-sm text-accent">Thanks! Your message has been sent.</p>}
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again in a moment.</p>
      )}
    </form>
  );
};

export default ContactForm;
