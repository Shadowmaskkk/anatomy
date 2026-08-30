import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomy Atelier — একজন শিল্পীর মতো অ্যানাটমি শিখুন",
    description:
      "একটি সুন্দর, ইন্টারেক্টিভ অ্যানাটমি স্টুডিওর মাধ্যমে হৃদয়, মস্তিষ্ক, ফুসফুস, যকৃত, কিডনি, চোখ, অন্ত্র, অগ্ন্যাশয় এবং ত্বক — মেডিক্যালি বিস্তারিত 3D অঙ্গগুলো অন্বেষণ করুন।",
    ogTitle: "Anatomy Atelier — একজন শিল্পীর মতো অ্যানাটমি শিখুন",
    ogDescription: "আকর্ষণীয়, মেডিক্যালি বিস্তারিত 3D নমুনার মাধ্যমে অ্যানাটমি শিখুন।",
    imageAlt: "অ্যানাটমি অ্যাটেলিয়ার ওয়ার্ডমার্কের পাশে একটি প্লিন্থের উপরে ভাসমান একটি অ্যানাটমিক্যাল হার্ট নমুনা",
  },
  brand: { tagline: "একজন শিল্পীর মতো অ্যানাটমি শিখুন", home: "Anatomy Atelier হোম" },
  nav: { explore: "অন্বেষণ করুন", systems: "সিস্টেমসমূহ", lessons: "পাঠসমূহ", library: "লাইব্রেরি", notes: "নোটসমূহ" },
  search: { placeholder: "অঙ্গ, বিষয় অনুসন্ধান করুন…" },
  profile: { open: "লার্নার প্রোফাইল খুলুন" },
  language: { label: "ভাষা", choose: "একটি ভাষা নির্বাচন করুন" },
  library: {
    title: "অঙ্গ লাইব্রেরি", open: "অঙ্গ লাইব্রেরি খুলুন", close: "লাইব্রেরি বন্ধ করুন", saved: "সংরক্ষিত অঙ্গসমূহ",
    viewAll: "সমস্ত অঙ্গ দেখুন",
    quoteLine1: "শেখা হলো", quoteLine2: "কৌতূহলের একটি কাজ।", quoteSign: "অন্বেষণ চালিয়ে যান!",
  },
  tools: {
    label: "3D ভিউয়ার টুলস", rotate: "ঘোরান", zoom: "জুম করুন", isolate: "আলাদা করুন",
    section: "প্রস্থচ্ছেদ", layers: "স্তরসমূহ", compare: "তুলনা করুন", reset: "রিসেট করুন",
  },
  viewer: {
    title: "{organ} ইন্টারেক্টিভ ভিউয়ার",
    canvas: "ইন্টারেক্টিভ 3D অ্যানাটমি মডেল। ঘোরাতে ড্র্যাগ করুন, জুম করতে স্ক্রোল করুন, এবং একটি কাঠামো সম্পর্কে পড়তে একটি বিন্দুতে ক্লিক করুন।",
    tip: "টিপস", tipDrag: "ঘোরাতে ড্র্যাগ করুন", tipScroll: "জুম করতে স্ক্রোল করুন", tipClick: "আরও জানতে একটি বিন্দুতে ক্লিক করুন",
    loading: "{organ} প্রস্তুত করা হচ্ছে", autoRotate: "স্বয়ংক্রিয়ভাবে ঘোরান",
    caption: "3D নমুনা · অন্বেষণ করতে একটি বিন্দুতে ক্লিক করুন", structures: "এই নমুনার কাঠামোগুলো",
  },
  info: {
    kicker: "{organ}", keyFacts: "মূল তথ্যসমূহ", size: "আকার", weight: "ওজন", daily: "প্রতিদিন",
    location: "অবস্থান", bloodSupply: "রক্ত সরবরাহ", function: "কাজ",
    medical: "চিকিৎসা গুরুত্ব", didYouKnow: "আপনি কি জানেন", viewLesson: "পাঠ দেখুন",
    animate: "অ্যানিমেট করুন", quiz: "কুইজ", compare: "তুলনা করুন",
  },
  compare: {
    title: "অঙ্গের তুলনা", comparing: "তুলনা করা হচ্ছে", reference: "রেফারেন্স",
    primaryRole: "প্রাথমিক ভূমিকা", scale: "স্কেল", vs: "বনাম", close: "তুলনা বন্ধ করুন",
  },
  cards: {
    resources: "{organ} শেখার রিসোর্স",
    microscopic: "অণুবীক্ষণিক দৃশ্য", compareOrgans: "অঙ্গগুলোর তুলনা করুন", functionAnimation: "কাজের অ্যানিমেশন",
    clinicalNotes: "ক্লিনিক্যাল নোটসমূহ", whereItWorks: "এটি যেখানে কাজ করে", commonConditions: "সাধারণ অবস্থা",
    exploreTissue: "টিস্যু অন্বেষণ করুন", openComparison: "তুলনা খুলুন", playAnimation: "অ্যানিমেশন চালান",
    seeAll: "সব দেখুন", seeSystem: "সিস্টেম দেখুন",
    playAria: "{organ} কাজের অ্যানিমেশন চালান", systemAria: "শরীরে {organ} কোথায় থাকে তা দেখুন",
  },
  quiz: {
    start: "লেবেলিং কুইজ শুরু করুন", find: "খুঁজে বের করুন", progress: "{total}-এর মধ্যে {current}",
    correct: "সঠিক", wrong: "সঠিক নয়", reveal: "এটি হলো {label}", answer: "{label} সবুজ রঙে চিহ্নিত করা হয়েছে",
    done: "কুইজ সম্পন্ন", score: "{total}-এর মধ্যে {score} সঠিক", retry: "আবার চেষ্টা করুন",
    exit: "কুইজ থেকে প্রস্থান করুন", hint: "মডেলের উপর মিলে যাওয়া বিন্দুতে ক্লিক করুন",
  },
  modal: {
    guided: "গাইডেড অন্বেষণ", close: "বন্ধ করুন", continueExploring: "অন্বেষণ চালিয়ে যান",
    quizTitle: "{organ} দ্রুত কুইজ", motionTitle: "চলমান {organ}",
    bodyTitle: "শরীরে {organ}", insideTitle: "{organ}-এর ভেতরে",
    quizPrompt: "কোন বিবৃতিটি {organ}-এর সবচেয়ে ভালো বর্ণনা দেয়?",
    quizA: "এটি শরীর বজায় রাখতে একটি বিশেষ ভূমিকা পালন করে",
    quizB: "এটি সম্পূর্ণ স্বাধীনভাবে কাজ করে",
    quizC: "এটি কেবল ঘুমের সময় সক্রিয় থাকে",
    lessonBody:
      "আলোকিত কাঠামোগুলো অনুসরণ করুন, নমুনাটি ঘোরান, এবং রূপের সাথে কাজকে সংযুক্ত করুন। এই সংক্ষিপ্ত অধ্যয়নের মুহূর্তটি একটি টেকসই মানসিক মডেল তৈরির জন্য ডিজাইন করা হয়েছে।",
    systemIntro: "{location}। লক্ষ করুন কীভাবে {organ} শরীরের বাকি অংশের সাথে সংযুক্ত হয়।",
    system: "সিস্টেম", primaryRole: "প্রাথমিক ভূমিকা", bloodSupply: "রক্ত সরবরাহ",
  },
};
