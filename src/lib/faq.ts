// FAQ content as plain data: the page, the footer count and the FAQPage
// structured data all read from here. Answers accept the same tiny inline
// markup as blog posts (**bold**, [text](href)).

import { SUPPORT_EMAIL } from "./site";

export type FaqItem = { q: string; a: string };

export type FaqGroup = {
  id: string;
  title: string;
  /** One line under the group heading. */
  blurb: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    blurb: "What Tijarah is, who it is for, and what you need to run it.",
    items: [
      {
        q: "What is Tijarah?",
        a: "Tijarah is a community marketplace app for the Dawoodi Bohra community in India. Customers discover, chat with, review and book trusted local providers such as cooks, caterers, tailors, mehndi artists, tutors and event vendors. Providers get a verified listing, chat, analytics and deals, and keep every rupee they earn.",
      },
      {
        q: "Who can use Tijarah?",
        a: "Anyone aged 18 or over who is part of the community. Customers confirm an EJamat ID when they sign up so that everyone on the platform is a known neighbour. Providers additionally clear an Aadhaar check before their listing goes live.",
      },
      {
        q: "Which cities does Tijarah cover?",
        a: "Mumbai, Pune, Surat, Ahmedabad, Hyderabad, Indore, Udaipur and Kolkata today. New cities open when there are enough verified providers to be useful, so if yours is missing, the fastest way to bring it forward is to list or refer providers there.",
      },
      {
        q: "Which languages does the app support?",
        a: "Ten: English, Hindi, Urdu, Arabic, Bengali, Gujarati, Marathi, Tamil, Telugu and French. Change it any time from Settings, and each family member can pick their own on their own phone.",
      },
      {
        q: "Is there a website version?",
        a: "Tijarah is built for phones. It runs as a native app on iPhone and Android and can also be installed as a web app from your browser. This website is for learning about Tijarah and downloading it; you cannot browse listings or sign in here. See [why sign-in stays in the app](/login).",
      },
      {
        q: "What phone do I need?",
        a: "Android 8.0 or later, or iOS 15 or later. The download is about 38 MB. Tijarah is free on both the [App Store and Google Play](/download).",
      },
    ],
  },
  {
    id: "account",
    title: "Account and verification",
    blurb: "Signing in, EJamat ID, Aadhaar, and what the badges mean.",
    items: [
      {
        q: "How do I sign in?",
        a: "Open the app, enter your mobile number and type the six-digit OTP we text you. That number becomes your account. There is no email address or password to remember. See the [three sign-in steps](/login).",
      },
      {
        q: "Why do I need to give my EJamat ID?",
        a: "The EJamat ID is how we know you are part of the community. It is confirmed once, stored with your account, and never shown to other users or shared outside Tijarah. Customers and providers alike confirm it, which is what makes a chat on Tijarah feel like talking to a neighbour rather than a stranger.",
      },
      {
        q: "What does the Verified badge actually mean?",
        a: "For a provider, it means they confirmed an EJamat ID, passed an Aadhaar-based identity check through an authorised verification partner, verified their contact number by OTP, and, where relevant, had their business location matched against Google's place records. Top Rated, Rising Star and Trusted badges come from reviews and activity over time.",
      },
      {
        q: "Is my Aadhaar information visible to anyone?",
        a: "No. Aadhaar details are used only to verify a provider's identity and are never shown to customers, other providers, or anyone outside the small verification team. Other users see a badge, nothing more. Our [Privacy Policy](/privacy) explains exactly how these records are handled.",
      },
      {
        q: "I have a new phone. How do I get my account back?",
        a: "Install Tijarah from the App Store or Google Play and verify the same mobile number. Your profile, chats, bookings and listings come back with it. If your number has changed, write to us before you switch and we will help move the account.",
      },
      {
        q: "How do I delete my account?",
        a: "In the app, go to Settings, then Account, then Delete account. Your profile, listings, saved locations and chats are removed within 30 days, apart from records we must keep by law. You can also email us and we will do it for you after confirming it is you.",
      },
    ],
  },
  {
    id: "booking",
    title: "Finding and booking",
    blurb: "Search, chat, payment, and what to do if something goes wrong.",
    items: [
      {
        q: "How do I find a provider near me?",
        a: "Search by what you need, for example tiffin, mehndi or tuition, or browse the Explore tab's curated collections. Results start from your saved Home or Work address, or from your current location if you allow it. Filter by verification, rating, deals or the Women-led hub, then open a profile to read reviews and start a chat.",
      },
      {
        q: "Does it cost anything to book through Tijarah?",
        a: "No. Browsing, chatting and booking are free, and Tijarah takes no commission on any booking. The price you agree with the provider is the price you pay.",
      },
      {
        q: "How do I pay a provider?",
        a: "Directly, in whatever way you both agree: UPI, cash, bank transfer. Tijarah does not sit in the middle of the payment, which is why we can promise zero commission. Agree the price and timing in chat before the job starts so both sides have it in writing.",
      },
      {
        q: "Is my chat with a provider private?",
        a: "Yes. Only you and the provider can read it. Tijarah staff review a conversation only if one side reports it, or where the law requires. Never share an OTP in chat: nobody from Tijarah will ever ask for one.",
      },
      {
        q: "Can I share a provider with my family or WhatsApp group?",
        a: "Yes. Every profile has a share button that sends a link. Anyone with the app opens straight to the profile; anyone without it is taken to the download page.",
      },
      {
        q: "What should I do if a booking goes wrong?",
        a: "Talk to the provider in chat first; most issues are a misunderstanding about timing or scope. If that does not work, report the booking from the chat screen. We will look at both sides, and repeated credible complaints lead to a listing being removed. Our [Terms of Service](/terms) explain the roles of each party.",
      },
    ],
  },
  {
    id: "providers",
    title: "For providers",
    blurb: "Listing your business, what it costs, and how the tools work.",
    items: [
      {
        q: "Is it really free to list my business?",
        a: "Yes. Creating a verified listing, receiving enquiries, chatting and taking bookings are all free, and there is no commission on what you earn. Providers can optionally pay for sponsored placement, promoted deals or a plan with extra analytics, but nothing you need to run your business is behind a paywall.",
      },
      {
        q: "How does Tijarah make money, then?",
        a: "From those optional provider features: sponsored listings that appear higher in search, promoted deals, and provider plans. They are priced in rupees, billed through Razorpay and UPI on Android and the web or Apple's in-app purchase on iPhone, and can be cancelled any time.",
      },
      {
        q: "Do I need a GST number or a registered company to list?",
        a: "No. Most providers on Tijarah are home businesses run by one person. You need to be over 18, complete the EJamat and Aadhaar checks, and hold whatever licence your trade legally requires, such as an FSSAI registration if you sell food.",
      },
      {
        q: "What do I need for the Aadhaar check?",
        a: "Your own Aadhaar and the phone linked to it, so the verification partner can confirm the check with you. It takes a few minutes and is done once. We store the result of the check and a reference to it, not a copy of your card.",
      },
      {
        q: "Can I list more than one service?",
        a: "Yes. One provider profile can carry several services, each with its own description, price and photos, for example tailoring and embroidery, or tiffin and party catering. Keep them under one profile so your reviews and rating build in one place.",
      },
      {
        q: "What do hot, warm and cold leads mean?",
        a: "The provider dashboard scores every enquiry by how likely it is to become a booking, based on how the customer found you and how the conversation is going. Hot leads are people ready to book, warm ones are comparing, cold ones are browsing. It is there so you answer the right chats first on a busy day.",
      },
      {
        q: "How do I get paid?",
        a: "Customers pay you directly, however you prefer: UPI, cash or bank transfer. Tijarah never holds your money, so there is nothing to withdraw and no payout schedule to wait for.",
      },
      {
        q: "Who can join the Women-led hub?",
        a: "Any listing for a business owned or run by a woman. Family members helping out does not change that. There is no extra fee; the hub is a dedicated space so customers who want to support women-led businesses can find them in one tap.",
      },
      {
        q: "Can I remove a negative review?",
        a: "Not by yourself. Every review is moderated before it appears, and you can report one that breaks the rules, for example if it is fake, abusive or from someone you never dealt with. Otherwise, the best response is a calm public reply. Customers read replies as closely as they read reviews.",
      },
    ],
  },
  {
    id: "safety",
    title: "Trust and safety",
    blurb: "Reviews, moderation, reporting, and keeping your account secure.",
    items: [
      {
        q: "Who can leave a review?",
        a: "Only a customer who has actually dealt with the provider. Reviews pass moderation before they appear, and paid, traded or self-written reviews are removed along with the account that posted them.",
      },
      {
        q: "How do I report a listing, a review or a message?",
        a: "Every profile, review and chat has a Report option. Tell us what is wrong and we will look at it. Serious reports, such as a fake identity or abuse, are prioritised.",
      },
      {
        q: "Will Tijarah ever ask me for an OTP?",
        a: "Never, on any channel. If someone claiming to be from Tijarah asks for an OTP by call, message or in chat, it is a scam. Do not share it, and report the conversation.",
      },
      {
        q: "Is my data sold or used for ads?",
        a: "No. We do not sell personal data and there is no third-party advertising in the app. Sponsored listings are Tijarah providers paying to appear higher, not outside advertisers. The full detail is in our [Privacy Policy](/privacy).",
      },
      {
        q: "Does the app track my location?",
        a: "Only if you allow it, and only while the app is open, so it can show providers near you. You can turn it off in your phone's settings and search from a saved address or by city instead.",
      },
    ],
  },
];

export const faqCount = faqGroups.reduce((n, g) => n + g.items.length, 0);

export const FAQ_CONTACT_EMAIL = SUPPORT_EMAIL;
