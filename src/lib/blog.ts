// Blog content lives here as plain data so the index, the article route, the
// sitemap and the JSON-LD all read from one place. Posts are rendered from
// typed blocks (see components/blog/ArticleBody) rather than MDX to keep the
// static export dependency-free.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; by?: string }
  | { type: "tip"; title: string; text: string }
  | { type: "faq"; items: Array<{ q: string; a: string }> };

export type Post = {
  slug: string;
  title: string;
  /** Meta description: aim for ~150 characters with the primary keyword early. */
  description: string;
  /** Primary search terms the post targets; also emitted as meta keywords. */
  keywords: string[];
  category: string;
  /** ISO date, used for sorting, display and article schema. */
  published: string;
  updated?: string;
  /** Cover photo in /public/blog, 1600x900. Unsplash license; credit kept for courtesy. */
  cover: {
    src: string;
    alt: string;
    credit: { name: string; url: string };
  };
  /** One-line hook shown on cards. */
  excerpt: string;
  blocks: Block[];
};

export const AUTHOR = "Tijarah Team";

export const posts: Post[] = [
  {
    slug: "find-verified-bohri-service-providers-near-you",
    title: "How to Find Verified Bohri Service Providers Near You",
    description:
      "Looking for a trusted tiffin service, tailor, mehndi artist or tutor from the Bohra community? Here's how to find Aadhaar and EJamat verified providers near you in Mumbai, Pune, Surat and beyond.",
    keywords: [
      "Bohri service providers",
      "Dawoodi Bohra community app",
      "verified service providers near me",
      "Bohri tiffin service Mumbai",
      "mehndi artist near me",
      "Bohra tailor",
      "community marketplace app India",
      "Tijarah app",
    ],
    category: "Guides",
    published: "2026-09-02",
    cover: {
      src: "/blog/find-verified-bohri-service-providers-near-you.jpg",
      alt: "Hands decorated with intricate bridal mehndi designs",
      credit: { name: "Faama Rajpoot", url: "https://unsplash.com/photos/a-woman-with-henna-on-her-hands-ZPCuuUn1zPc" },
    },
    excerpt:
      "A step-by-step guide to finding trusted, community-verified cooks, tailors, tutors and artists in your city, without asking forty people in a group chat.",
    blocks: [
      {
        type: "p",
        text: "Every Bohri family has the same problem a few times a year. A wedding is coming and you need a mehndi artist. Your parents are visiting and you want a reliable tiffin service. A kurta needs altering before Eid. The person who can do it well probably lives within two kilometres of you. Finding them is the hard part.",
      },
      {
        type: "p",
        text: "This guide walks through how to find **verified Bohri service providers near you** using Tijarah, what the verification badges actually mean, and how to book with confidence in Mumbai, Pune, Surat, Ahmedabad, Hyderabad, Indore, Udaipur and Kolkata.",
      },
      { type: "h2", text: "Why finding a trusted provider is still so hard" },
      {
        type: "p",
        text: "Our communities run on recommendations. That is a strength, but it has a weak point: the recommendation lives in someone's head, or buried in a WhatsApp thread from eight months ago. Search engines and generic listing sites don't help much either. A search for \"tiffin service near me\" returns cloud kitchens and delivery apps, not the aunty two lanes over whose dal chawal your family actually wants.",
      },
      {
        type: "p",
        text: "What people are really asking for is three things at once: someone nearby, someone who understands the community's tastes and occasions, and someone a neighbour would vouch for. Tijarah was built to answer all three in one search.",
      },
      { type: "h2", text: "What \"verified\" means on Tijarah" },
      {
        type: "p",
        text: "Any app can put a blue tick next to a name. On Tijarah a provider only goes live after clearing four checks:",
      },
      {
        type: "ul",
        items: [
          "**Aadhaar identity verification**, so the person on the profile is a real, named individual.",
          "**EJamat ID**, the community card that confirms standing within the Dawoodi Bohra jamaat.",
          "**OTP contact confirmation**, so the phone number on the listing is the one that will actually answer.",
          "**Google Place matching** for providers with a shop or studio, so the address on the map is theirs.",
        ],
      },
      {
        type: "p",
        text: "On top of that, profiles earn badges over time. **Trusted** marks providers with a consistent record of completed bookings, **Top rated** goes to the highest-reviewed in their category, and **Rising star** highlights newer providers whose first customers loved them. You can read more in our post on [how Tijarah verifies every provider](/blog/how-tijarah-verifies-providers-aadhaar-ejamat/).",
      },
      { type: "h2", text: "Step by step: finding a provider near you" },
      {
        type: "ol",
        items: [
          "**Download Tijarah** from the App Store or Google Play and sign in with your phone number. The app works in ten languages, including Gujarati, Urdu, Hindi and English.",
          "**Set your location.** Save home, your parents' place, or the wedding venue. Results are sorted by distance from whichever location you pick.",
          "**Search or browse a category.** Type what you need (\"mehndi\", \"tuition\", \"tailor\") or open categories like Food & catering, Beauty & mehndi, Tailoring, Tuition, or Events.",
          "**Check the profile.** Look for the verification badges, photos of past work, and reviews. Every review on Tijarah comes from a completed booking, so there are no paid or anonymous reviews.",
          "**Chat before you book.** Ask about dates, portion sizes, fabric, or travel to your venue. Chats are private and stay inside the app.",
          "**Book and pay your way.** Pay with UPI, card or wallet through Razorpay, or settle in cash if the provider prefers. Tijarah adds no commission, so the price you're quoted is the price you pay.",
        ],
      },
      { type: "h2", text: "Popular services people search for" },
      {
        type: "p",
        text: "These are the categories with the most bookings across our cities right now. If yours isn't listed, search anyway: with more than three thousand verified providers, it is probably there.",
      },
      {
        type: "ul",
        items: [
          "**Tiffin and home catering** in Mumbai, Pune and Surat: daily dabba, Bohri thaal for gatherings, and freezer-friendly meals for students and new parents.",
          "**Mehndi and bridal beauty**: henna artists, makeup, and hair for weddings, misaq and Eid.",
          "**Tailoring and ridas**: custom ridas, kurtas, alterations, and children's occasion wear.",
          "**Tuition and coaching**: school subjects, Quran and Lisan al-Dawat classes, and exam prep, at home or online.",
          "**Events and decor**: small-venue decoration, cake artists, photographers and invitation design.",
        ],
      },
      { type: "h2", text: "Booking for a wedding or event? Start early" },
      {
        type: "p",
        text: "The best mehndi artists and caterers in every city are booked out weeks ahead of the wedding season. Use the saved-locations feature to search around the venue rather than your home, shortlist three providers, and open chats with all of them on the same day. Providers on Tijarah reply quickly because the app tells them how warm each lead is, and a customer with a date and a venue is about as warm as it gets.",
      },
      {
        type: "tip",
        title: "Look for the Women-led badge",
        text: "Three in five providers on Tijarah are women running businesses from home. The Women-led hub surfaces them first, and many of the most-loved kitchens and studios in the app are there.",
      },
      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "Is Tijarah only for the Bohra community?",
            a: "Tijarah is built around the Dawoodi Bohra community's trust network, which is why EJamat verification is part of onboarding. Customers from any background are welcome to discover and book providers.",
          },
          {
            q: "Which cities does Tijarah cover?",
            a: "Tijarah is active in Mumbai, Pune, Surat, Ahmedabad, Hyderabad, Indore, Udaipur and Kolkata, with providers in dozens of smaller towns. Set your location in the app to see who is nearby.",
          },
          {
            q: "Does it cost anything to book through Tijarah?",
            a: "No. Tijarah charges customers nothing and takes no commission from providers, so the price you agree in chat is the full price.",
          },
          {
            q: "Can I use Tijarah in Gujarati or Urdu?",
            a: "Yes. The app is available in English, Hindi, Urdu, Arabic, Bengali, Gujarati, Marathi, Tamil, Telugu and French.",
          },
        ],
      },
    ],
  },
  {
    slug: "tijarah-vs-whatsapp-groups",
    title: "Tijarah vs WhatsApp Groups: A Better Way to Find Help in Your Community",
    description:
      "WhatsApp groups built our communities, but they make a poor directory. See how Tijarah keeps the trust of a mohalla group chat while adding verified profiles, real reviews and private booking.",
    keywords: [
      "WhatsApp group alternative",
      "community app for Bohras",
      "mohalla group chat",
      "find services in my community",
      "trusted local services app India",
      "Bohra business directory",
      "community marketplace",
    ],
    category: "Community",
    published: "2026-08-19",
    cover: {
      src: "/blog/tijarah-vs-whatsapp-groups.jpg",
      alt: "A smiling woman in a pink hijab with mehndi on her hands reading a message on her phone",
      credit: { name: "Fotos", url: "https://unsplash.com/photos/a-person-wearing-a-pink-head-scarf-and-holding-a-phone-zyknFyw6T4A" },
    },
    excerpt:
      "The group chat is where the community lives. It is also where good recommendations go to get lost. Here's what changes when the directory gets its own home.",
    blocks: [
      {
        type: "p",
        text: "Tijarah began in a group chat. Somebody asked for a tailor near Bhendi Bazaar, three people answered, and the thread was buried under forty messages about a jaman by dinner time. The same question came up again a month later. We eventually started a spreadsheet, the spreadsheet became an app, and the app is what you can download today.",
      },
      {
        type: "p",
        text: "So we are not here to tell you to leave your WhatsApp groups. They are where the community lives, and we love them. But a group chat is a terrible **community business directory**, and this post explains why, and what a purpose-built app does differently.",
      },
      { type: "h2", text: "Where WhatsApp groups fall short" },
      {
        type: "h3",
        text: "Recommendations disappear" },
      {
        type: "p",
        text: "A great answer posted on Tuesday is unreachable by Friday. Search inside WhatsApp only finds exact words, so \"tiffin\" won't surface the message that said \"dabba wali\". Every recommendation is effectively single-use.",
      },
      { type: "h3", text: "There is no way to check who you're hiring" },
      {
        type: "p",
        text: "A forwarded phone number carries no history. You can't see whether other families booked this person, whether they turned up on time, or whether the number even belongs to the same provider anymore.",
      },
      { type: "h3", text: "Providers get buried too" },
      {
        type: "p",
        text: "For the home cook or tutor on the other side, a group is exhausting. Posting your menu every week feels like spam. Replying to every enquiry, including the ones that were never serious, eats the hours that should go into the work.",
      },
      { type: "h3", text: "Privacy is an afterthought" },
      {
        type: "p",
        text: "To ask about a service you have to share your number with a group of 250 people, and providers have to publish theirs to everyone. Screenshots of prices and addresses travel further than anyone intended.",
      },
      { type: "h2", text: "What Tijarah keeps from the group chat" },
      {
        type: "p",
        text: "The reason group recommendations work at all is trust: the person answering is your neighbour, your cousin, or someone from the same jamaat. Tijarah is designed around that same trust, made durable.",
      },
      {
        type: "ul",
        items: [
          "**Verified community members.** Every provider clears Aadhaar and EJamat ID checks before a profile goes live. It is the digital version of \"I know their family\".",
          "**Reviews from real bookings only.** Nobody can leave a review without having booked, so the feedback is the same honest word-of-mouth you'd get in the group, just written down and searchable.",
          "**Moderated by neighbours.** Disputes and reports are read by community moderators who understand context, not an offshore queue.",
          "**Your language.** Ten languages, so the app reads the way your family actually talks.",
        ],
      },
      { type: "h2", text: "What Tijarah adds" },
      {
        type: "ul",
        items: [
          "**A directory that stays put.** Search by service and distance from any saved location. Results are there tomorrow, next month and next Ramadan.",
          "**Private one-to-one chat.** Ask about prices and dates without sharing your number with the whole mohalla. Contact details are never scraped or resold.",
          "**Booking and payments in one place.** Pay by UPI, card or wallet, or in cash, with no commission added by Tijarah.",
          "**Deals from providers you follow.** Offers appear in the app instead of as forwards you have to scroll back to find.",
          "**A fair shake for providers.** Lead scoring tells a provider which enquiries are serious, analytics show what is working, and they keep 100% of what they earn.",
        ],
      },
      { type: "h2", text: "A side-by-side look" },
      {
        type: "ul",
        items: [
          "**Finding a provider:** scroll and hope, versus search by category and distance.",
          "**Checking them out:** ask around, versus verified badges plus reviews from completed bookings.",
          "**Contacting them:** post your number to the group, versus a private in-app chat.",
          "**Paying:** cash or a screenshot of a UPI transfer, versus tracked payment with a receipt, still with zero commission.",
          "**Remembering them:** search your chat history, versus saved providers and booking history.",
        ],
      },
      {
        type: "quote",
        text: "This is the third time this month we've asked for a tailor in the group.",
        by: "The message that started Tijarah",
      },
      { type: "h2", text: "Keep the group. Move the directory." },
      {
        type: "p",
        text: "The healthiest setup we've seen is simple: the group chat stays for news, announcements and jokes, and when somebody asks \"does anyone know a good caterer?\", the answer is a Tijarah profile link instead of a phone number. The recommendation is now permanent, verifiable and private. [Download Tijarah](/login/) and try it the next time the question comes up.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Can I share a Tijarah provider in my WhatsApp group?",
            a: "Yes. Every provider profile has a share button that creates a link. Anyone who opens it sees the verified profile, reviews and a chat button.",
          },
          {
            q: "Do providers have to pay to be found on Tijarah?",
            a: "No. Listing is free and Tijarah takes no commission on bookings. Providers who want extra reach can opt into sponsored placement, but it is never required.",
          },
          {
            q: "Is my chat with a provider private?",
            a: "Yes. Chats are one-to-one inside the app and your phone number is not shown unless you choose to share it.",
          },
        ],
      },
    ],
  },
  {
    slug: "zero-commission-app-for-home-businesses-india",
    title: "Zero Commission: How Home Businesses Keep 100% of Their Earnings on Tijarah",
    description:
      "Most marketplaces take 15 to 30 percent of every order. Tijarah takes nothing. Learn how home caterers, tailors, tutors and artists list for free, get quality leads, and keep every rupee.",
    keywords: [
      "zero commission marketplace India",
      "list my home business online free",
      "home caterer app",
      "home business app India",
      "sell services online without commission",
      "get customers for home business",
      "Bohri women entrepreneurs",
      "provider app India",
    ],
    category: "For providers",
    published: "2026-08-05",
    cover: {
      src: "/blog/zero-commission-app-for-home-businesses-india.jpg",
      alt: "A woman in a hijab preparing food behind a counter of bowls at her home kitchen business",
      credit: { name: "Izzuddin Azzam", url: "https://unsplash.com/photos/a-woman-standing-in-front-of-a-table-filled-with-bowls-of-food-ScnLTynhvF4" },
    },
    excerpt:
      "Marketplaces usually charge the people doing the work. Here's why Tijarah doesn't, how it stays free for providers, and what you get instead of an invoice.",
    blocks: [
      {
        type: "p",
        text: "If you cook, sew, teach or decorate from home, you have probably done the maths on the big platforms. A ₹600 order becomes ₹450 after commission. A ₹1,200 tuition package loses ₹300 to a booking fee. The platform brings customers, and then charges you for every one of them, forever.",
      },
      {
        type: "p",
        text: "Tijarah is a **zero-commission marketplace for home businesses in India**. Listing is free, booking is free, and providers keep 100% of what customers pay them. This post explains how that works, what you get, and how to get your first bookings.",
      },
      { type: "h2", text: "What zero commission actually means" },
      {
        type: "p",
        text: "It means exactly what it says. Tijarah does not take a percentage of any booking, does not charge a per-lead fee, and does not add a service charge on the customer's side that comes out of your price. If a customer pays ₹2,500 for a thaal, ₹2,500 reaches you.",
      },
      {
        type: "p",
        text: "Payments run through Razorpay, so customers can pay by UPI, card or wallet, and you get a clear record for every order. If you prefer cash on delivery, that works too. The only deductions are the standard payment-gateway charges that apply to any online payment in India, and those are shown transparently before you accept a payout.",
      },
      { type: "h2", text: "So how does Tijarah stay free?" },
      {
        type: "p",
        text: "Fair question. Tijarah is funded by optional **sponsored listings**: providers who want extra visibility for a launch or the wedding season can pay to appear higher in search for a while. It is opt-in, clearly labelled, and it never affects your reviews or your badges. Providers who never sponsor anything still get the full app.",
      },
      {
        type: "p",
        text: "We also don't sell advertising to outside companies, and we don't sell your data or your customers' data. That is a deliberate choice: an advertising business would eventually tempt us to change the rules, and the whole point of Tijarah is that the rules don't change on the people doing the work.",
      },
      { type: "h2", text: "What you get instead of a commission bill" },
      {
        type: "ul",
        items: [
          "**A verified profile** with your Aadhaar and EJamat checks done once, plus photos of your work, your menu or price list, and your service area.",
          "**Lead scoring.** Every enquiry is tagged hot, warm or cold based on how ready the customer is to book, so you answer the serious ones first and stop losing evenings to window-shoppers.",
          "**Analytics.** See how many people viewed your profile, where they searched from, and which items or services get the most interest.",
          "**Deals.** Publish a Ramadan menu, a back-to-school tuition offer or a monsoon discount, and it goes straight to customers who saved you.",
          "**Reviews that build.** Because only real bookings can leave a review, a good record on Tijarah is something you own, not something a platform can reset.",
          "**Private chat and saved locations,** so customers can find you by distance and talk to you without exchanging numbers up front.",
        ],
      },
      { type: "h2", text: "How to list your home business on Tijarah" },
      {
        type: "ol",
        items: [
          "**Install the app** on iPhone or Android and choose \"Become a provider\".",
          "**Verify your identity.** Upload your Aadhaar and EJamat ID and confirm your phone number with an OTP. Most profiles are approved within a day.",
          "**Build your profile.** Add a short description in your own words, five to ten photos of real work, and your prices or a starting-from figure. Profiles with prices get far more enquiries.",
          "**Set your service area.** Choose the neighbourhoods you serve or how far you will travel, so you only get leads you can actually fulfil.",
          "**Share your link.** Post your Tijarah profile in your family and mohalla groups once. From then on the profile does the reminding for you.",
        ],
      },
      {
        type: "tip",
        title: "Reply fast to hot leads",
        text: "Customers on Tijarah are usually messaging two or three providers at once. Hot leads answered within an hour convert far more often than ones answered the next morning. Turn on notifications for the categories you care about.",
      },
      { type: "h2", text: "Who is already earning on Tijarah" },
      {
        type: "p",
        text: "Home caterers and tiffin services are the largest group, followed by tailors and rida makers, mehndi and beauty artists, tutors, and cake and dessert makers. Three in five providers are women, many of them running their first business, and most of them started with a single profile and one shared link. Read more in our guide to [women-led businesses on Tijarah](/blog/women-led-businesses-bohra-community-guide/).",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is Tijarah really free for providers?",
            a: "Yes. There is no listing fee, no commission and no per-lead charge. Sponsored placement is optional and clearly labelled.",
          },
          {
            q: "Do I need a GST number or a registered company to list?",
            a: "No. Tijarah is built for home-based and individual providers. You need an Aadhaar card, an EJamat ID and a phone number that can receive an OTP.",
          },
          {
            q: "How do I get paid?",
            a: "Customers can pay by UPI, card or wallet through Razorpay, or in cash if you allow it. Online payments are settled to your bank account and shown in the app with a receipt.",
          },
          {
            q: "Can I list more than one service?",
            a: "Yes. A single profile can offer several services, for example catering and cake orders, each with its own pricing and photos.",
          },
        ],
      },
    ],
  },
  {
    slug: "women-led-businesses-bohra-community-guide",
    title: "Women-Led Businesses in the Bohra Community: How to Start and Grow on Tijarah",
    description:
      "From home kitchens to boutiques, women run three in five businesses on Tijarah. A practical guide to launching, pricing and growing a women-led business with the Women-led hub.",
    keywords: [
      "women-led businesses India",
      "Bohra women entrepreneurs",
      "home kitchen business",
      "women home business app",
      "start a business from home India",
      "Women-led hub Tijarah",
      "women entrepreneurs community app",
    ],
    category: "Women-led hub",
    published: "2026-07-22",
    cover: {
      src: "/blog/women-led-businesses-bohra-community-guide.jpg",
      alt: "A smiling Indian woman in a red bandhani dupatta showing mehndi art on her palms",
      credit: { name: "Mr Catographer", url: "https://unsplash.com/photos/smiling-woman-with-glasses-showing-henna-art-on-her-hands-BcN_VPX32ys" },
    },
    excerpt:
      "Most of the best-loved kitchens, studios and classrooms on Tijarah are run by women from home. A practical guide to joining them.",
    blocks: [
      {
        type: "p",
        text: "Walk through any Bohri mohalla and the economy is obvious once you look for it. The kitchen that sends out sixty dabbas a day. The bedroom that became a tailoring studio. The living room where twelve children learn Quran after school. Most of these businesses are run by women, most of them from home, and most of them have never had a listing anywhere.",
      },
      {
        type: "p",
        text: "Tijarah's **Women-led hub** exists to change that last part. This guide covers what the hub is, how to set up a women-led business on Tijarah, and what we've learned from the providers who have grown fastest on the app.",
      },
      { type: "h2", text: "What the Women-led hub is" },
      {
        type: "p",
        text: "The hub is a dedicated home inside the app for businesses owned and run by women. It is not a filter hidden in a menu. Customers see it on the home screen, and women-led profiles carry a badge everywhere they appear in search. Providers in the hub also get tools built for the way home businesses actually run: payouts, simple invoicing, and repeat-customer reminders.",
      },
      {
        type: "p",
        text: "The design choice is deliberate. Three in five providers on Tijarah are women, and a great deal of the community's most trusted work happens in their homes. Putting them first is simply accurate.",
      },
      { type: "h2", text: "Businesses that thrive on Tijarah" },
      {
        type: "ul",
        items: [
          "**Home kitchens and tiffin services:** daily dabba, Bohri thaal for gatherings, Ramadan and Eid specials, and pre-cooked meals for new parents and students.",
          "**Rida and tailoring studios:** custom ridas, alterations, children's occasion wear and embroidery.",
          "**Mehndi, beauty and bridal services:** henna, makeup and hair, often travelling to the venue.",
          "**Tuition and classes:** school subjects, Quran and Lisan al-Dawat, art and craft, and cooking classes.",
          "**Baking and desserts:** custom cakes, mithai and festival boxes.",
        ],
      },
      { type: "h2", text: "Setting up: a checklist" },
      {
        type: "ol",
        items: [
          "**Verify once.** Aadhaar plus EJamat ID and an OTP on your phone. This is what lets customers trust a profile they have never met, and it is done in a few minutes.",
          "**Choose the Women-led badge** during setup so your profile appears in the hub.",
          "**Write it in your voice.** A short description in Gujarati, Urdu, Hindi or English. Say what you make, who it is for, and what makes yours different. The app supports ten languages, so write in the one your customers use.",
          "**Add real photos.** Phone photos of actual dishes, garments or classrooms outperform stock images every time. Natural light, plain background, five to ten pictures.",
          "**Publish prices.** A starting-from price is enough. Profiles with prices receive many more enquiries because customers know they can afford to ask.",
          "**Set hours and service area.** If you only take orders three days a week, say so. Customers respect clear boundaries, and lead scoring will keep the wrong enquiries away.",
        ],
      },
      { type: "h2", text: "Pricing without underselling yourself" },
      {
        type: "p",
        text: "The most common mistake we see is pricing to the group chat, where everyone competes to be cheapest. On Tijarah your reviews and badges carry weight, so you can price for the quality you deliver. Count your ingredients or materials, add your time at an hourly rate you would be happy to tell your daughter, and remember there is no commission to build into the number. Everything the customer pays is yours.",
      },
      {
        type: "tip",
        title: "Use Deals for seasons, not discounts",
        text: "Instead of a permanent discount, publish a Ramadan menu, an Eid rida collection or a summer-holiday class batch as a Deal. Customers who saved you get notified, and the offer ends when the season does.",
      },
      { type: "h2", text: "Growing from the first ten customers" },
      {
        type: "p",
        text: "Providers who grow fastest on Tijarah do three unglamorous things. They reply to hot leads within the hour. They ask every happy customer to leave a review from the completed booking, which is the only kind of review the app allows. And they post their profile link in their family groups once, then let the profile do the reminding. Analytics in the app show you which of your services get the most views, so you can double down on what is working.",
      },
      {
        type: "quote",
        text: "I used to send my menu to eleven groups every Sunday. Now I send one link, once, and the orders come to me.",
        by: "A home caterer in Pune",
      },
      { type: "h2", text: "Safety and privacy for home-based providers" },
      {
        type: "p",
        text: "Running a business from home raises fair questions about privacy. On Tijarah your phone number is not shown to customers unless you share it, chat stays inside the app, and your home address is only revealed to a confirmed booking if you choose. Reports and disputes are handled by community moderators who understand the context. Read more about [how verification and moderation work](/blog/how-tijarah-verifies-providers-aadhaar-ejamat/).",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is there a fee to join the Women-led hub?",
            a: "No. The hub is free, like the rest of Tijarah. There is no listing fee and no commission on bookings.",
          },
          {
            q: "Can a business be women-led if my husband or son helps?",
            a: "Yes. The badge is for businesses owned and run by a woman. Family members helping with delivery or accounts does not change that.",
          },
          {
            q: "Do I need to share my home address?",
            a: "Only if you want to. You can set a service area instead, and reveal your address to confirmed bookings only.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-tijarah-verifies-providers-aadhaar-ejamat",
    title: "How Tijarah Verifies Every Provider: Aadhaar, EJamat and Real Reviews",
    description:
      "No anonymous sellers, no ghost listings. A look inside Tijarah's verification: Aadhaar identity checks, EJamat community ID, OTP contact confirmation, and reviews only from real bookings.",
    keywords: [
      "EJamat verified",
      "Aadhaar verified service providers",
      "trusted service providers app",
      "fake reviews",
      "verified local services India",
      "safe way to hire in community",
      "Tijarah verification",
    ],
    category: "Trust & safety",
    published: "2026-07-08",
    cover: {
      src: "/blog/how-tijarah-verifies-providers-aadhaar-ejamat.jpg",
      alt: "Men in white kurtas and topis seated together at a community gathering",
      credit: { name: "ibrahim abdullah", url: "https://unsplash.com/photos/crowd-sitting-on-floor-during-daytime-kJ62-olTYHk" },
    },
    excerpt:
      "Trust is the whole product. Here is exactly what happens between a provider signing up and a customer seeing their profile, and why reviews on Tijarah can't be bought.",
    blocks: [
      {
        type: "p",
        text: "When you hire someone to cook for your family, teach your child or come to your home, \"verified\" has to mean something. On many platforms it means an email address was confirmed. On Tijarah it means a real person, known to the community, with a phone number that answers and a record you can read.",
      },
      {
        type: "p",
        text: "This post explains each step of **Tijarah provider verification**, what the badges on a profile mean, how reviews work, and what happens when something goes wrong.",
      },
      { type: "h2", text: "Step 1: Aadhaar identity verification" },
      {
        type: "p",
        text: "Every provider begins by verifying their Aadhaar. This establishes that the profile belongs to a real, named individual, and that the same person cannot run several profiles under different names. Aadhaar details are used for verification only; they are not displayed on the profile and are never shared with customers or third parties.",
      },
      { type: "h2", text: "Step 2: EJamat ID" },
      {
        type: "p",
        text: "Aadhaar proves identity. EJamat proves community. The EJamat card confirms that a provider is a member in good standing of the Dawoodi Bohra jamaat, which is the closest digital equivalent to the \"I know their family\" recommendation that our communities have always relied on. Together, the two checks are what let a customer in Surat book a rida maker they have never met with the same confidence as a neighbour.",
      },
      { type: "h2", text: "Step 3: OTP contact confirmation" },
      {
        type: "p",
        text: "A surprising number of listings on the internet are attached to phone numbers that no longer work. Tijarah confirms the provider's number with a one-time password at signup, and periodically afterwards, so the contact on the profile is the one that will actually pick up.",
      },
      { type: "h2", text: "Step 4: Google Place matching" },
      {
        type: "p",
        text: "For providers with a shop, studio or classroom, we match the address on the profile against Google's place data. If the location on the map doesn't exist or belongs to someone else, the profile doesn't go live until it is corrected. Home-based providers can choose to list a service area instead of an address.",
      },
      { type: "h2", text: "What the badges mean" },
      {
        type: "ul",
        items: [
          "**Verified:** all four checks above have been completed. No profile is visible without it.",
          "**Trusted:** a consistent record of completed bookings with strong reviews over time.",
          "**Top rated:** among the highest-reviewed providers in their category and city.",
          "**Rising star:** a newer provider whose first customers rated them highly.",
          "**Women-led:** a business owned and run by a woman, featured in the Women-led hub.",
        ],
      },
      {
        type: "p",
        text: "Badges are earned automatically from booking and review data. They cannot be purchased, and sponsored placement does not affect them.",
      },
      { type: "h2", text: "Why reviews on Tijarah can't be faked" },
      {
        type: "p",
        text: "Fake reviews are the quiet problem behind most listing sites. On Tijarah the rule is simple: **only a completed booking can leave a review**. There is no way to review a provider you haven't booked, no way for a provider to review themselves, and no way to buy a batch of five-star ratings. A review also can't be deleted by the provider. Because of that, a long list of good reviews on Tijarah is worth reading, and a single bad one is worth taking seriously.",
      },
      { type: "h2", text: "Moderation by people who know the context" },
      {
        type: "p",
        text: "Reports and disputes are read by community moderators, not an anonymous overseas queue. They know the difference between a genuine problem and a misunderstanding about how a thaal is served, and they can reach both sides directly. Serious or repeated issues lead to a profile being suspended, and the Aadhaar check means a suspended provider can't simply sign up again under a new name.",
      },
      { type: "h2", text: "What we do with your data" },
      {
        type: "p",
        text: "Verification documents are used for verification and nothing else. Chats are private. Contact details are never scraped, sold or shared with advertisers, because Tijarah has no advertising business that would want them. You can read more about our commitments on the [About page](/about/).",
      },
      {
        type: "tip",
        title: "For customers: what to check on a profile",
        text: "Look for the Verified badge, read the two most recent reviews, and check that the photos show real work rather than stock images. Then open a chat. A provider who answers clearly about dates and prices is usually one who delivers the same way.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Can a provider be listed without EJamat verification?",
            a: "No. Both Aadhaar and EJamat verification are required before a profile becomes visible to customers.",
          },
          {
            q: "Is my Aadhaar information visible to customers?",
            a: "No. Aadhaar is used only to verify identity during onboarding. It is not shown on the profile or shared with anyone.",
          },
          {
            q: "Can a provider delete a negative review?",
            a: "No. Reviews come only from completed bookings and cannot be removed by the provider. Reviews that break community rules can be reported to moderators.",
          },
          {
            q: "What should I do if a booking goes wrong?",
            a: "Report it from the booking screen in the app. A community moderator will review the chat and booking details and contact both sides.",
          },
        ],
      },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) =>
  b.published.localeCompare(a.published)
);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const postPath = (slug: string) => `/blog/${slug}/`;

/** Rough reading time from the block text, at ~220 wpm. */
export function readingMinutes(post: Post) {
  const words = post.blocks
    .flatMap((b) => {
      switch (b.type) {
        case "ul":
        case "ol":
          return b.items;
        case "faq":
          return b.items.flatMap((i) => [i.q, i.a]);
        case "tip":
          return [b.title, b.text];
        default:
          return [b.text];
      }
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
