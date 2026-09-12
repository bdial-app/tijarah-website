// Legal documents (Terms of Service, Privacy Policy) as plain data, rendered
// through the same block types as the blog so they share one prose scale.
// Each section gets an id so the in-page contents can deep-link to it.

import type { Block } from "./blog";
import { PRIVACY_EMAIL, SUPPORT_EMAIL } from "./site";

// TODO: replace with the registered company name, address and the named
// grievance officer before launch. The Consumer Protection (E-Commerce)
// Rules, 2020 and the DPDP Act, 2023 both expect a named contact.
export const LEGAL_ENTITY = "Tijarah";
export const REGISTERED_ADDRESS = "Mumbai, Maharashtra, India";
export const GRIEVANCE_OFFICER = "Grievance Officer, Tijarah";

export type LegalSection = {
  id: string;
  heading: string;
  blocks: Block[];
};

export type LegalDoc = {
  slug: "terms" | "privacy";
  title: string;
  /** Short line under the title and the meta description. */
  description: string;
  /** ISO date the current version came into force. */
  effective: string;
  /** Hand-written summary shown before the full text. */
  summary: string[];
  sections: LegalSection[];
};

export const legalPath = (slug: LegalDoc["slug"]) => `/${slug}`;

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  description:
    "The agreement between you and Tijarah when you use the Tijarah app or website to find, list, or book community services in India.",
  effective: "2026-09-12",
  summary: [
    "Tijarah introduces you to independent providers from the community. The service you book is between you and them.",
    "Browsing is free and we take no commission on bookings. Providers may pay for optional features like sponsored listings.",
    "Verification badges reflect the checks we ran, not a guarantee of quality. Reviews must come from real interactions.",
    "You can delete your account any time from inside the app.",
  ],
  sections: [
    {
      id: "about",
      heading: "1. Who we are and what these terms cover",
      blocks: [
        {
          type: "p",
          text: `These Terms of Service (the **Terms**) are an agreement between you and ${LEGAL_ENTITY} (**Tijarah**, **we**, **us**), based at ${REGISTERED_ADDRESS}. They govern your use of the Tijarah mobile app on iOS and Android, the installable web app, and the website at tijarahconnect.com (together, the **Service**).`,
        },
        {
          type: "p",
          text: "By creating an account, listing a service, or otherwise using the Service, you accept these Terms and our [Privacy Policy](/privacy). If you do not agree, please do not use the Service.",
        },
        {
          type: "p",
          text: "Tijarah is built for members of the Dawoodi Bohra community in India. It is currently available in Mumbai, Pune, Surat, Ahmedabad, Hyderabad, Indore, Udaipur and Kolkata, and we may add or remove cities over time.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "2. Eligibility and your account",
      blocks: [
        {
          type: "ul",
          items: [
            "You must be at least 18 years old to create an account. If you are younger, a parent or guardian may use the Service on your behalf.",
            "Your account is tied to the mobile number you verify with a one-time password (OTP). One number, one account.",
            "Customers confirm an EJamat ID so the community can trust that you are a member. Providers additionally complete an Aadhaar check before their listing goes live (see section 9).",
            "Keep your phone and your OTPs to yourself. We will never ask you for an OTP by call, message, or email. You are responsible for everything that happens under your account until you tell us it has been compromised.",
            "You must give us accurate information and keep it up to date. We may refuse, suspend, or close an account that we reasonably believe is inaccurate, duplicated, or being misused.",
          ],
        },
      ],
    },
    {
      id: "marketplace",
      heading: "3. What Tijarah is, and what it is not",
      blocks: [
        {
          type: "p",
          text: "Tijarah is a marketplace. It lets customers discover, chat with, review, and book independent service providers such as cooks, caterers, tailors, mehndi artists, tutors, and event vendors. Providers are not our employees, agents, or partners.",
        },
        {
          type: "p",
          text: "**We do not provide the services listed on Tijarah and we are not a party to any booking.** Any contract for a service is between the customer and the provider. We do not supervise, direct, or control a provider's work, and we cannot guarantee its quality, safety, timing, or legality.",
        },
        {
          type: "p",
          text: "Verification badges (such as Verified, Top Rated, Rising Star, or Trusted) reflect checks or ratings that were true at a point in time. They are a signal of trust, not a warranty. Use your own judgement, read the reviews, and agree the details of a job directly with the provider before it starts.",
        },
      ],
    },
    {
      id: "providers",
      heading: "4. Listing as a provider",
      blocks: [
        { type: "p", text: "If you list a service on Tijarah, you also agree that:" },
        {
          type: "ul",
          items: [
            "Everything in your listing is true, current, and yours to offer: your name, services, prices, photos, location, and contact details.",
            "You hold any licence, registration, or permission the law requires for your work, for example an FSSAI registration if you sell food, and you will show it to a customer on request.",
            "You will honour bookings you accept, respond to enquiries in good faith, and treat customers with respect.",
            "Only businesses owned or run by women may be listed in the Women-led hub. We may ask for reasonable evidence.",
            "You will not list on behalf of someone else, sell or lend your account, or run more than one provider account without our consent.",
            "We may edit, hide, or remove a listing that breaks these Terms, misleads customers, receives repeated credible complaints, or cannot be re-verified.",
          ],
        },
      ],
    },
    {
      id: "bookings",
      heading: "5. Bookings, chats and payments between users",
      blocks: [
        {
          type: "p",
          text: "Prices on Tijarah are set by providers. When you book a service, you pay the provider directly using whatever method you both agree on. **Tijarah does not take a commission on bookings** and does not hold or process those payments.",
        },
        {
          type: "p",
          text: "Because the booking is between you and the provider, any refund, cancellation, or complaint about the service is also between you and the provider. We may step in to help resolve a dispute and may act on credible reports (for example by removing a listing), but we are not obliged to do so and are not responsible for the outcome.",
        },
        {
          type: "p",
          text: "Chats on Tijarah exist so you can agree the details of a job. Do not use them to send spam, to move people to another platform in order to evade our rules, or to ask anyone for an OTP or a password.",
        },
      ],
    },
    {
      id: "paid-features",
      heading: "6. Paid features for providers",
      blocks: [
        {
          type: "p",
          text: "Browsing, listing, chatting, and booking are free. Providers may choose to buy optional features such as sponsored placement, promoted deals, or a provider plan with extra analytics and lead tools.",
        },
        {
          type: "ul",
          items: [
            "Prices are shown in Indian Rupees (₹) and include applicable taxes unless we say otherwise.",
            "Payments are processed by Razorpay (including UPI) on Android and the web, and through Apple's in-app purchase system on iOS. We do not see or store your full card details.",
            "A plan that renews will keep renewing at the stated interval until you cancel it. Cancel any time from the app, or from your Apple ID subscriptions on iOS. Cancelling stops the next charge; it does not refund the current period.",
            "Purchases made through Apple are subject to Apple's refund rules. For purchases made through Razorpay, contact us within 7 days and we will review the request in good faith.",
            "We may change the price or scope of a paid feature with reasonable notice. The change applies from your next renewal.",
          ],
        },
      ],
    },
    {
      id: "reviews",
      heading: "7. Reviews and community content",
      blocks: [
        {
          type: "p",
          text: "Reviews are what make Tijarah useful, so we take them seriously. You may only review a provider you have actually dealt with, and your review must reflect your honest experience.",
        },
        {
          type: "ul",
          items: [
            "Do not post fake, paid, or traded reviews, review your own business, or ask customers to change a review in exchange for anything.",
            "Every review passes moderation. We may hold, edit for clarity, or remove a review that breaks these rules, and we may remove a provider who tries to game them.",
            "Providers may reply to a review publicly. Replies are held to the same standard.",
          ],
        },
        {
          type: "p",
          text: "You keep ownership of everything you post on Tijarah: listings, photos, reviews, replies, and messages (your **Content**). You give us a worldwide, royalty-free licence to host, display, reproduce, and adapt your Content so we can run and promote the Service, for example by showing your listing in search results or featuring a public review. This licence ends when you delete the Content or your account, except where it has already been shared with other users or we must keep it by law.",
        },
      ],
    },
    {
      id: "acceptable-use",
      heading: "8. Acceptable use",
      blocks: [
        { type: "p", text: "When using the Service, you must not:" },
        {
          type: "ul",
          items: [
            "Break any law, or list a service that is illegal, unsafe, or that you are not qualified or licensed to provide.",
            "Impersonate anyone, misrepresent your identity or community membership, or submit documents that are not yours.",
            "Harass, threaten, discriminate against, or abuse another user, in chat or in public.",
            "Post content that is defamatory, obscene, hateful, or that infringes someone else's rights.",
            "Scrape, copy, or bulk-export listings, profiles, or reviews, or use the Service to build a competing directory.",
            "Interfere with the Service, probe its security, or access accounts or data that are not yours.",
            "Use the Service to send unsolicited marketing, or to collect other users' contact details for any purpose outside Tijarah.",
          ],
        },
      ],
    },
    {
      id: "verification",
      heading: "9. Verification and trust",
      blocks: [
        {
          type: "p",
          text: "To keep Tijarah a community space, we verify who is on it. Customers confirm an EJamat ID. Providers confirm an EJamat ID, complete an Aadhaar-based identity check through an authorised verification partner, verify their contact number by OTP, and may have their business location matched against Google's place records.",
        },
        {
          type: "p",
          text: "By submitting these details you confirm they are genuine and belong to you, and you consent to us and our verification partner using them for this purpose as described in our [Privacy Policy](/privacy). We may ask you to re-verify from time to time.",
        },
        {
          type: "p",
          text: "Submitting a forged or borrowed document, or someone else's identity, is a serious breach. We will close the account, may remove associated listings and reviews, and may report the matter to the authorities.",
        },
      ],
    },
    {
      id: "ip",
      heading: "10. Intellectual property",
      blocks: [
        {
          type: "p",
          text: "The Tijarah name, logo, app, website, and their design and code belong to us or our licensors and are protected by Indian and international law. These Terms do not give you any right to use our brand except to describe truthfully that you are listed on, or use, Tijarah.",
        },
        {
          type: "p",
          text: "If you believe content on Tijarah infringes your rights, write to us at the address in section 17 with enough detail for us to find the content and assess the claim.",
        },
      ],
    },
    {
      id: "termination",
      heading: "11. Suspension and termination",
      blocks: [
        {
          type: "p",
          text: "**By you.** You can stop using Tijarah at any time and delete your account from the app's settings. Deleting your account removes your profile, listings, and saved data as described in our Privacy Policy.",
        },
        {
          type: "p",
          text: "**By us.** We may suspend or close your account, or remove content, if you break these Terms, if we are required to by law, if your account is inactive for a long period, or if continuing to provide the Service to you creates a legal or safety risk. Where it is reasonable to do so, we will tell you why and give you a chance to respond.",
        },
        {
          type: "p",
          text: "Sections 7 (licence to Content), 10, 12, 13, 14 and 15 continue to apply after your account is closed.",
        },
      ],
    },
    {
      id: "disclaimers",
      heading: "12. Disclaimers",
      blocks: [
        {
          type: "p",
          text: "The Service is provided **as is** and **as available**. We work hard to keep it accurate and running, but we do not promise that it will be uninterrupted, error-free, or that every listing, badge, review, or price is correct. To the fullest extent permitted by law, we exclude all implied warranties, including those of merchantability, fitness for a particular purpose, and non-infringement.",
        },
      ],
    },
    {
      id: "liability",
      heading: "13. Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the extent permitted by Indian law, Tijarah is not liable for any indirect, incidental, special, or consequential loss, or for any loss of profit, business, or data, arising from your use of the Service or from any service you book through it.",
        },
        {
          type: "p",
          text: "Our total liability to you for all claims in any twelve-month period is limited to the greater of the amount you paid us for paid features in that period and ₹1,000.",
        },
        {
          type: "p",
          text: "Nothing in these Terms limits liability that cannot be limited under law, including for fraud or for death or personal injury caused by our negligence, or your rights as a consumer under the Consumer Protection Act, 2019.",
        },
      ],
    },
    {
      id: "indemnity",
      heading: "14. Your responsibility to us",
      blocks: [
        {
          type: "p",
          text: "You agree to compensate us for any loss, cost, or claim (including reasonable legal fees) that we suffer because you broke these Terms, broke the law, submitted false verification documents, or because of a dispute between you and another user about a service.",
        },
      ],
    },
    {
      id: "law",
      heading: "15. Governing law and disputes",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by the laws of India. If a dispute arises, please contact us first (section 17) and we will try to resolve it with you within 30 days. If we cannot, the courts at Mumbai, Maharashtra have exclusive jurisdiction, without prejudice to your right to approach a consumer forum under the Consumer Protection Act, 2019.",
        },
      ],
    },
    {
      id: "changes",
      heading: "16. Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms as the Service grows or the law changes. When we make a material change we will tell you in the app or by message at least 15 days before it takes effect. The date at the top of this page shows when the current version came into force. Continuing to use the Service after that date means you accept the new Terms.",
        },
      ],
    },
    {
      id: "contact",
      heading: "17. Contact and grievance redressal",
      blocks: [
        {
          type: "p",
          text: `For help, complaints, or notices about these Terms, email [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) or use the [contact page](/contact).`,
        },
        {
          type: "p",
          text: `In line with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, our ${GRIEVANCE_OFFICER} can be reached at [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}), ${REGISTERED_ADDRESS}. We acknowledge complaints within 48 hours and aim to resolve them within one month.`,
        },
      ],
    },
  ],
};

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "What Tijarah collects when you use the app or website, why we collect it, who we share it with, and the choices you have under Indian data protection law.",
  effective: "2026-09-12",
  summary: [
    "We collect what we need to run a verified community marketplace: your mobile number, EJamat ID, profile, listings, chats, reviews, and saved locations.",
    "Aadhaar details are used only to verify providers. They are never shown to other users and never used for anything else.",
    "We do not sell your data and we do not show third-party ads.",
    "You can see, correct, or delete your data from the app, and you can withdraw consent or complain to us at any time.",
  ],
  sections: [
    {
      id: "overview",
      heading: "1. Overview",
      blocks: [
        {
          type: "p",
          text: `This Privacy Policy explains how ${LEGAL_ENTITY} (**Tijarah**, **we**, **us**) handles personal data when you use the Tijarah app on iOS or Android, the installable web app, or the website at tijarahconnect.com (together, the **Service**). It is written to meet the Digital Personal Data Protection Act, 2023 (**DPDP Act**), the Information Technology Act, 2000 and the rules under them.`,
        },
        {
          type: "p",
          text: "Tijarah is the data fiduciary for the data described here. Where a provider collects information from you directly to deliver a service, for example your delivery address for a tiffin, the provider is responsible for that data.",
        },
      ],
    },
    {
      id: "collect",
      heading: "2. What we collect",
      blocks: [
        { type: "h3", text: "Account and profile" },
        {
          type: "p",
          text: "Your mobile number (verified by OTP), name, profile photo, preferred language, city, and the EJamat ID you confirm to show community membership.",
        },
        { type: "h3", text: "Provider verification" },
        {
          type: "p",
          text: "If you list a service, we also collect the details needed to verify you: your Aadhaar-based identity check performed through an authorised verification partner, a business or trade name, and the location of your business, which we may match against Google's place records. Section 6 explains exactly how Aadhaar data is handled.",
        },
        { type: "h3", text: "Listings, reviews and messages" },
        {
          type: "p",
          text: "The services, prices, descriptions, photos, and deals you publish; the reviews and replies you write; and the messages you send and receive in Tijarah chat, including enquiries about a listing.",
        },
        { type: "h3", text: "Location" },
        {
          type: "p",
          text: "Addresses you save (such as Home or Work) so search can start from them. If you allow it, your device's approximate location while the app is open, so we can show providers near you. You can turn this off in your phone's settings and search by city instead.",
        },
        { type: "h3", text: "Payments" },
        {
          type: "p",
          text: "If you buy a paid provider feature, the payment is handled by Razorpay, UPI, or Apple. We receive a confirmation, the amount, and a transaction reference. We never see or store your full card number, UPI PIN, or bank credentials.",
        },
        { type: "h3", text: "Device and usage" },
        {
          type: "p",
          text: "Device model, operating system, app version, push notification token, crash reports, and how you use the app: searches, listings viewed, chats started, and bookings made. For providers, this activity is what powers analytics and lead scoring (hot, warm, or cold) on their dashboard.",
        },
        { type: "h3", text: "Support" },
        {
          type: "p",
          text: "Anything you send us when you contact support, report a bug, or flag a listing or review.",
        },
      ],
    },
    {
      id: "use",
      heading: "3. How we use it",
      blocks: [
        {
          type: "ul",
          items: [
            "**To run the Service:** create and secure your account, show listings, enable chat, bookings, reviews, saved locations, and deals.",
            "**To verify people:** confirm community membership and, for providers, identity and business location, so badges mean something.",
            "**To help providers grow:** give them analytics about their own listing, score enquiries so they can prioritise, and run the sponsored placements and deals they pay for.",
            "**To keep the community safe:** moderate reviews and listings, detect fraud, fake accounts, and abuse, and enforce our [Terms of Service](/terms).",
            "**To talk to you:** send OTPs, booking and chat notifications, service updates, and, if you opt in, news about Tijarah. You can turn marketing messages off at any time.",
            "**To improve Tijarah:** understand which features are used, fix crashes, and test changes.",
            "**To meet legal obligations:** keep the records the law requires and respond to lawful requests.",
          ],
        },
        {
          type: "p",
          text: "We do not sell personal data, we do not show third-party advertising in the app, and we do not use your data to build profiles for anyone else.",
        },
      ],
    },
    {
      id: "basis",
      heading: "4. Our legal basis",
      blocks: [
        {
          type: "p",
          text: "Under the DPDP Act we process your data with your **consent**, which you give when you create an account, verify yourself, or grant a permission such as location. You can withdraw consent at any time (section 8), although we may then be unable to provide parts of the Service.",
        },
        {
          type: "p",
          text: "We also rely on the **legitimate uses** the Act permits, for example processing data you have voluntarily provided for the purpose you provided it, complying with a legal obligation, or responding to a medical emergency or a threat to safety.",
        },
      ],
    },
    {
      id: "share",
      heading: "5. Who we share it with",
      blocks: [
        { type: "h3", text: "Other users" },
        {
          type: "p",
          text: "Your profile name, photo, city, and any listing, review, or reply you publish are visible to other Tijarah users. Your verification badges are visible; the documents behind them are not. When you chat with or book someone, they see the messages and details you choose to share with them. Your mobile number is shown to a provider only when you contact them or they need it to complete a booking.",
        },
        { type: "h3", text: "Service providers who work for us" },
        {
          type: "p",
          text: "Companies that help us run Tijarah, under contracts that limit them to our instructions: cloud hosting and databases, SMS delivery for OTPs, push notification delivery, an authorised Aadhaar verification partner, Google Maps Platform for place matching and maps, payment processors (Razorpay and Apple), and crash and usage analytics tools.",
        },
        { type: "h3", text: "Legal and safety" },
        {
          type: "p",
          text: "We may disclose data where the law requires it, to respond to a valid request from a court or government authority, to enforce our Terms, or to protect the rights, property, or safety of Tijarah, our users, or the public.",
        },
        { type: "h3", text: "Business changes" },
        {
          type: "p",
          text: "If Tijarah is merged, acquired, or sells its assets, your data may transfer to the new owner, who must honour this policy or tell you before changing it.",
        },
      ],
    },
    {
      id: "aadhaar",
      heading: "6. Aadhaar and EJamat data",
      blocks: [
        {
          type: "p",
          text: "These are the most sensitive things we ask for, so we handle them differently from the rest.",
        },
        {
          type: "ul",
          items: [
            "**Purpose-limited.** Aadhaar data is used only to verify a provider's identity once, and again only if re-verification is needed. It is never used for search, analytics, marketing, or lead scoring.",
            "**Verified through an authorised partner.** The identity check is performed by a verification partner authorised to do so. We store the result of the check and a reference to it, not a copy of your Aadhaar number or card image, beyond what the law and the verification process require.",
            "**Never shown to others.** No other user, and no provider, can see your Aadhaar or EJamat details. They see a badge.",
            "**EJamat ID.** Your EJamat ID is used to confirm community membership and is stored with your account so you do not have to enter it again. It is not shared with anyone outside Tijarah.",
            "**Restricted access.** Only a small number of Tijarah staff involved in verification can access these records, and access is logged.",
          ],
        },
      ],
    },
    {
      id: "retention",
      heading: "7. How long we keep it",
      blocks: [
        {
          type: "p",
          text: "We keep your data for as long as your account is active. When you delete your account, we remove or anonymise your profile, listings, saved locations, chats, and verification records within 30 days, except where we must keep something for longer, for example:",
        },
        {
          type: "ul",
          items: [
            "Records of paid transactions, kept for the period required under Indian tax and accounting law.",
            "Reviews you wrote, which are anonymised rather than deleted so that a provider's rating history stays honest.",
            "Data needed to investigate abuse, resolve a dispute, or comply with a legal request that is under way.",
          ],
        },
        {
          type: "p",
          text: "If your account is inactive for three years we will notify you and, if you do not return, delete it as the DPDP Act expects.",
        },
      ],
    },
    {
      id: "rights",
      heading: "8. Your rights and choices",
      blocks: [
        { type: "p", text: "Under the DPDP Act you have the right to:" },
        {
          type: "ul",
          items: [
            "**Access** a summary of the personal data we hold about you and how we have used and shared it.",
            "**Correct** or update data that is inaccurate or incomplete. Most profile and listing details can be edited directly in the app.",
            "**Erase** your data by deleting your account, subject to the retention rules in section 7.",
            "**Withdraw consent** for any processing that relies on it, including location access and marketing messages.",
            "**Nominate** another person to exercise these rights for you if you are unable to.",
            "**Complain** to our Grievance Officer, and if you are not satisfied with our response, to the Data Protection Board of India.",
          ],
        },
        {
          type: "p",
          text: `To use these rights, go to Settings in the app or email [${PRIVACY_EMAIL}](mailto:${PRIVACY_EMAIL}) from the number or email linked to your account. We will respond within the time the law requires and will not treat you differently for asking.`,
        },
        {
          type: "p",
          text: "**Deleting your account:** open the app, go to Settings, then Account, then Delete account. You can also email us and we will do it for you after confirming it is really you.",
        },
      ],
    },
    {
      id: "security",
      heading: "9. Security",
      blocks: [
        {
          type: "p",
          text: "Data travels between your device and our servers over encrypted connections, sensitive records are encrypted at rest, and access inside Tijarah is limited to people who need it for their job. Sign-in uses one-time passwords bound to your phone rather than a password that can leak.",
        },
        {
          type: "p",
          text: "No system is perfectly secure. If we learn of a breach that affects you, we will notify you and the Data Protection Board as the law requires. You can help by keeping your phone locked and by remembering that **Tijarah will never ask you for an OTP** on any channel.",
        },
      ],
    },
    {
      id: "children",
      heading: "10. Children",
      blocks: [
        {
          type: "p",
          text: "Tijarah is for adults. We do not knowingly collect data from anyone under 18. If you believe a child has created an account, tell us and we will remove it.",
        },
      ],
    },
    {
      id: "storage",
      heading: "11. Where your data is stored",
      blocks: [
        {
          type: "p",
          text: "Your data is stored on secure cloud infrastructure. Some of our service providers may process data on servers outside India. Where that happens we do so only as the DPDP Act and any restrictions notified under it allow, and with contractual protections in place.",
        },
      ],
    },
    {
      id: "permissions",
      heading: "12. App permissions",
      blocks: [
        {
          type: "p",
          text: "The app asks for permissions only when a feature needs them. You can change any of them in your phone's settings.",
        },
        {
          type: "ul",
          items: [
            "**Camera and photos**: to add a profile picture or listing photos.",
            "**Location**: to show providers near you and to save addresses. Optional; you can search by city instead.",
            "**Notifications**: for OTPs, chat messages, booking updates, and deals. You can mute categories inside the app.",
          ],
        },
      ],
    },
    {
      id: "cookies",
      heading: "13. Cookies and the website",
      blocks: [
        {
          type: "p",
          text: "The tijarahconnect.com website is a static site. It sets no tracking cookies and runs no third-party advertising. The download page reads your browser's user agent on your device to send you to the right app store; nothing is sent to us. The App Store and Google Play have their own privacy policies for the download itself.",
        },
      ],
    },
    {
      id: "changes",
      heading: "14. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this policy when our practices or the law change. For material changes we will notify you in the app before they take effect. The date at the top of this page shows when the current version came into force.",
        },
      ],
    },
    {
      id: "contact",
      heading: "15. Contact and Grievance Officer",
      blocks: [
        {
          type: "p",
          text: `Questions about this policy or your data: [${PRIVACY_EMAIL}](mailto:${PRIVACY_EMAIL}).`,
        },
        {
          type: "p",
          text: `Our ${GRIEVANCE_OFFICER}, appointed under the Information Technology Act, 2000 and the DPDP Act, 2023, can be reached at [${PRIVACY_EMAIL}](mailto:${PRIVACY_EMAIL}) or by post at ${LEGAL_ENTITY}, ${REGISTERED_ADDRESS}. We acknowledge grievances within 48 hours and aim to resolve them within one month.`,
        },
      ],
    },
  ],
};

export const legalDocs: LegalDoc[] = [terms, privacy];
