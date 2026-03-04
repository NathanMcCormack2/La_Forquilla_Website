// ============================================================
//  CONFIG.JS — Edit this file for each new client project
//  This is the only file you need to change for most projects
// ============================================================

const config = {

  // --- BUSINESS INFO ---
  restaurant: {
    name: "La Forquilla",
    tagline: "Cocció a llenya, ingredients honestos, nits inoblidables.",
    description:
      "Restaurant familiar al cor de Ginestar.",
    founded: "2012",
    cuisine: "Català clàssic",
    phone: "+353 555 555 5555",
    email: "example@laforquilla.es",
    address: {
      street: "Plaça del pou, 7, 43748 Ginestar",
      city: "Tarragona",
      country: "Spain",
    },
  },

  // --- OPENING HOURS ---
  hours: [
    { day: "Lunes",    open: "Cerrado",   close: "" },
    { day: "Martes",   open: "12:00",    close: "22:00" },
    { day: "Miercoles", open: "12:00",    close: "22:00" },
    { day: "Jueves",  open: "12:00",    close: "22:30" },
    { day: "Viernes",    open: "12:00",    close: "23:00" },
    { day: "Sabados",  open: "11:00",    close: "23:00" },
    { day: "Domingo",    open: "11:00",    close: "21:00" },
  ],

  // --- MENU ---
  // Add/remove sections and items as needed
  menu: [
    {
      section: "Entsants",
      items: [
        { name: "Veal Ribs",      price: "€14", description: "Seared Scallops" },
        { name: "Chicken Liver Parfait",price: "€11", description: "Chicken Liver Parfait" },
        { name: "Roasted Beetroot",     price: "€10", description: "Roasted Beetroot" },
        { name: "Soup of the Day",      price: "€8",  description: "Soup of the Day" },
      ],
    },
    {
      section: "Tapas",
      items: [
        { name: "Patatas Bravas",      price: "€6" },
        { name: "Bunyols de bacalla",price: "€6", description: "Cod Fritters" },
        { name: "Croquetes de pernil", price: "€5.50", description: "Ham Croquettes" },
        { name: "Croquetes de rabo de toro",      price: "€7.50" },
        { name: "Nachos", price: "€7" },
        { name: "Calamars", price: "€6", description: "Roman style squid" },
        { name: "Rabas de calamar",price: "€7", description: "Squid Rings" },
        { name: "Aros de ceba",price: "€5.50", description: "Onion Rings" },
        { name: "Tempura de verdura",price: "€9" },
      ],
    },
    {
      section: "Plats Combinats",
      items: [
        { name: "Ou + bacó + patates", price: "€9", description: "Eggs + Bacon + Chips"  },
        { name: "Calamars + Patates",price: "€10", description: "Roman Squid + Chips" },
        { name: "Escalopa + Patates", price: "€10", description: "Chicken Scalope + Chips" },
        { name: "Croquetes + Patates", price: "€7.50",  description: "Ham Croquette + Chips" },
        { name: "Ous Estrellats", price: "€8",  description: "Eggs + Ham + Chips" },
        { name: "Lluç arrebossat + Patates", price: "€10", description: "Baled Hake + Chips" },
      ],
    },
    {
      section: "Carns a la brasa",
      items: [
        { name: "Xurrasco", price: "€12.50", description: "Veal Ribs" },
        { name: "Llonganissa", price: "€9.50", description: "Sausage" },
        { name: "Corder",price: "€13", description: "Lamb" },
        { name: "Pollastre",   price: "€8", description: "Chicken" },
        { name: "Llom", price: "€7.50", description: "Pork Tendorloin" },
        { name: "Xistorra", price: "€7.50", description: "Red Sausage" },
        { name: "Botifarra d'arrós", price: "€8", description: "Rice Sausage" },
        { name: "Bistec", price: "€11.50", description: "Veal Steak" },
        { name: "Entrecot", price: "€19", description: "Beef Steak" },
        { name: "Conill", price: "€11", description: "Rabbit" },
      ],
    },
    {
      section: "Postres",
      items: [
        { name: "Coulant de Xocolata", price: "€5.50", description: "Chocolate Souffle" },
        { name: "Pastís de Formatge",           price: "€5.50", description: "Cheesecake" },
        { name: "Seasonal Cheeseboard",   price: "€5.80", description: "Lemon Sorbet in Lemon Shell" },
        { name: "Affogato",               price: "€4.50", description: "Vanilla & Chocolate Icecream with Almond" },
        { name: "Crème Brûlée",           price: "€4.50", description: "Honey & Curd" },
        { name: "Crème Brûlée",           price: "€4", description: "Flan with Cream" },
        { name: "Crème Brûlée",           price: "€4.50", description: "Chocalate Truffles with Cream" },
        { name: "Crème Brûlée",           price: "€5.50", description: "Nuts with Mitsela" },
      ],
    },
  ],

  // --- SOCIAL MEDIA ---
  social: {
    instagram: "https://www.instagram.com/braserialaforquilla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    //facebook:  "https://facebook.com/emberandoak",
    // twitter: "https://twitter.com/yourhandle",  // uncomment if needed
  },

  // --- GOOGLE MAPS EMBED ---
  // Get this from: maps.google.com → Share → Embed a map → copy the src URL only
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2269453458084!2d0.6321106760422293!3d41.042165921345834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a127e57d3fe3c5%3A0xdd23c7983e33f0f1!2sBar%20restaurante%20La%20Forquilla!5e0!3m2!1sen!2sie!4v1772662478480!5m2!1sen!2sie",

  // --- FORMSPREE CONTACT FORM ---
  // Sign up at formspree.io, create a form, paste the endpoint here
  formspreeEndpoint: "https://formspree.io/f/xdalqqbq",

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
