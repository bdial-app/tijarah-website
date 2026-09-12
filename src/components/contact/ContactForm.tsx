"use client";

import { useId, useState } from "react";
import { topics } from "@/lib/contact";
import { SITE_HOST } from "@/lib/site";

// Composes a mailto: link from the fields. Nothing is sent to a server; the
// visitor's own mail app opens with the message ready, addressed to the
// mailbox that handles the chosen topic.
export default function ContactForm() {
  const uid = useId();
  const [topicId, setTopicId] = useState(topics[0].id);
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");
  const [message, setMessage] = useState("");

  const topic = topics.find((t) => t.id === topicId) ?? topics[0];
  const ready = message.trim().length > 0;

  const subject = `[${topic.label}] ${name.trim() || "Message from the website"}`;
  const details = [
    name.trim() ? `Name: ${name.trim()}` : "",
    reply.trim() ? `Reply to: ${reply.trim()}` : "",
    `Sent from ${SITE_HOST}/contact`,
  ].filter(Boolean);
  const body = [message.trim(), "", "—", ...details].join("\n");

  const href = `mailto:${topic.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const field =
    "w-full rounded-2xl bg-white px-4 py-3 text-[1rem] text-ink shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)] ring-1 ring-ink/5 outline-none transition placeholder:text-ink-40 focus:ring-2 focus:ring-amber";
  const label = "text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-60";

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (ready) window.location.href = href;
      }}
    >
      <div className="flex flex-col gap-2">
        <span className={label}>What is it about?</span>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => {
            const active = t.id === topicId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTopicId(t.id)}
                aria-pressed={active}
                className={`rounded-full px-3.5 py-1.5 text-[0.9rem] font-medium ring-1 transition-colors ${
                  active
                    ? "bg-brand text-white ring-brand"
                    : "bg-white text-ink-60 ring-ink/5 hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-name`} className={label}>
            Your name
          </label>
          <input
            id={`${uid}-name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Fatema"
            autoComplete="name"
            className={field}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-reply`} className={label}>
            Mobile number or email
          </label>
          <input
            id={`${uid}-reply`}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="The one on your Tijarah account"
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${uid}-message`} className={label}>
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
          placeholder="What happened, and what would you like us to do?"
          className={`${field} resize-y`}
        />
        <p className="text-[0.88rem] leading-relaxed text-ink-40">{topic.hint}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!ready}
        >
          Open in your mail app
        </button>
        <p className="text-[0.85rem] text-ink-40">
          Goes to <span className="text-ink">{topic.to}</span>. Nothing is stored on this site.
        </p>
      </div>
    </form>
  );
}
