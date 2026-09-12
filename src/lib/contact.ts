// Contact page data. The site is a static export with no server, so the
// form composes an email to the right mailbox instead of posting anywhere.

import { PRIVACY_EMAIL, SUPPORT_EMAIL } from "./site";

export const INSTAGRAM_URL =
  "https://www.instagram.com/tijarahconnect?igsi=enJuMWEzM2pyZXBy";

export type Topic = {
  id: string;
  label: string;
  /** Mailbox the message goes to. */
  to: string;
  /** Prompt shown under the message box so people send what we need. */
  hint: string;
};

export const topics: Topic[] = [
  {
    id: "account",
    label: "Account and sign-in",
    to: SUPPORT_EMAIL,
    hint: "Tell us the mobile number on the account and what happens when you try to sign in. Never include an OTP.",
  },
  {
    id: "booking",
    label: "A booking or a provider",
    to: SUPPORT_EMAIL,
    hint: "Include the provider's name, the city, roughly when it happened, and what you have already tried in chat.",
  },
  {
    id: "listing",
    label: "My provider listing",
    to: SUPPORT_EMAIL,
    hint: "Include your business name as it appears in the app and what you would like changed or checked.",
  },
  {
    id: "bug",
    label: "Report a bug",
    to: SUPPORT_EMAIL,
    hint: "Your phone model, iOS or Android version, and the steps that make it happen. A screenshot attached to the email helps a lot.",
  },
  {
    id: "privacy",
    label: "Privacy or data request",
    to: PRIVACY_EMAIL,
    hint: "Say whether you want to access, correct, or delete your data, or withdraw a consent. Write from the number or email on your account.",
  },
  {
    id: "partnership",
    label: "Partnership or press",
    to: SUPPORT_EMAIL,
    hint: "A line about who you are and what you have in mind is enough to start.",
  },
  {
    id: "other",
    label: "Something else",
    to: SUPPORT_EMAIL,
    hint: "Whatever it is, a person reads every message.",
  },
];

export const channels = [
  {
    title: "Email support",
    copy: "For anything about your account, a booking, a listing, or the app itself.",
    label: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
    note: "Reply within two working days",
  },
  {
    title: "Privacy and data",
    copy: "Access, correct, or delete your data, or reach our Grievance Officer.",
    label: PRIVACY_EMAIL,
    href: `mailto:${PRIVACY_EMAIL}`,
    note: "Acknowledged within 48 hours",
  },
  {
    title: "Inside the app",
    copy: "Open Settings, then Help, to write to us with your account details already attached.",
    label: "Settings › Help",
    note: "Fastest for account issues",
  },
  {
    title: "Instagram",
    copy: "Community news, new cities, and provider stories. DMs are read, but email is quicker for support.",
    label: "@tijarahconnect",
    href: INSTAGRAM_URL,
    note: "Follow along",
  },
];
