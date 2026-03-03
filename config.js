// ============================================================
//  CONFIG.JS — Edit this file for each new client project
//  This is the only file you need to change for most projects
// ============================================================

const config = {

  // --- BUSINESS INFO ---
  restaurant: {
    name: "Ember & Oak",
    tagline: "Wood-fired cooking, honest ingredients, unforgettable evenings.",
    description:
      "Nestled in the heart of Dublin, Ember & Oak has been bringing people together around great food since 2018. We source everything locally, cook everything over fire, and pour our hearts into every plate.",
    founded: "2018",
    cuisine: "Modern Irish",
    phone: "+353 1 234 5678",
    email: "hello@emberandoak.ie",
    address: {
      street: "14 Drury Street",
      city: "Dublin 2",
      country: "Ireland",
    },
  },

  // --- OPENING HOURS ---
  hours: [
    { day: "Monday",    open: "Closed",   close: "" },
    { day: "Tuesday",   open: "12:00",    close: "22:00" },
    { day: "Wednesday", open: "12:00",    close: "22:00" },
    { day: "Thursday",  open: "12:00",    close: "22:30" },
    { day: "Friday",    open: "12:00",    close: "23:00" },
    { day: "Saturday",  open: "11:00",    close: "23:00" },
    { day: "Sunday",    open: "11:00",    close: "21:00" },
  ],

  // --- MENU ---
  // Add/remove sections and items as needed
  menu: [
    {
      section: "Starters",
      items: [
        { name: "Seared Scallops",      price: "€14", description: "Cauliflower purée, crispy capers, brown butter" },
        { name: "Chicken Liver Parfait",price: "€11", description: "Toasted brioche, pickled shallots, chutney" },
        { name: "Roasted Beetroot",     price: "€10", description: "Whipped goat's cheese, candied walnuts, aged balsamic" },
        { name: "Soup of the Day",      price: "€8",  description: "Freshly made, served with sourdough bread" },
      ],
    },
    {
      section: "Mains",
      items: [
        { name: "Dry-Aged Ribeye",      price: "€34", description: "28-day aged, chimichurri, triple-cooked chips" },
        { name: "Roast Hake",           price: "€26", description: "Saffron broth, samphire, crushed new potatoes" },
        { name: "Wild Mushroom Risotto",price: "€22", description: "Truffle oil, aged parmesan, crispy shallots" },
        { name: "Roast Half Chicken",   price: "€24", description: "Confit leg, smoked butter mash, braised greens" },
      ],
    },
    {
      section: "Desserts",
      items: [
        { name: "Warm Chocolate Fondant", price: "€9", description: "Vanilla ice cream, honeycomb" },
        { name: "Crème Brûlée",           price: "€8", description: "Classic vanilla, shortbread biscuit" },
        { name: "Seasonal Cheeseboard",   price: "€13", description: "Selection of Irish cheeses, crackers, chutney" },
        { name: "Affogato",               price: "€7", description: "Espresso, vanilla gelato, amaretti" },
      ],
    },
    {
      section: "Drinks",
      items: [
        { name: "House Red / White",   price: "€8",  description: "125ml glass, ask for today's selection" },
        { name: "Craft Beer",          price: "€6",  description: "Rotating local selection on draught" },
        { name: "Soft Drinks",         price: "€3",  description: "Coke, 7Up, sparkling / still water" },
        { name: "Irish Coffee",        price: "€8",  description: "Jameson, fresh cream, brown sugar" },
      ],
    },
  ],

  // --- SOCIAL MEDIA ---
  social: {
    instagram: "https://instagram.com/emberandoak",
    facebook:  "https://facebook.com/emberandoak",
    // twitter: "https://twitter.com/yourhandle",  // uncomment if needed
  },

  // --- GOOGLE MAPS EMBED ---
  // Get this from: maps.google.com → Share → Embed a map → copy the src URL only
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.9!2d-6.2603!3d53.3418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDIwJzMwLjUiTiA2wrAxNSc0MS4xIlc!5e0!3m2!1sen!2sie!4v1234567890",

  // --- FORMSPREE CONTACT FORM ---
  // Sign up at formspree.io, create a form, paste the endpoint here
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  // --- THEME COLOURS ---
  // These map to CSS variables in globals.css
  // You can override these per-client
  theme: {
    primary:    "#C9A96E", // Gold accent
    background: "#111111", // Near black
    surface:    "#1A1A1A", // Slightly lighter for cards
    text:       "#F5F0E8", // Warm cream
    muted:      "#888888", // Secondary text
    border:     "#2A2A2A", // Subtle borders
  },
};

export default config;
