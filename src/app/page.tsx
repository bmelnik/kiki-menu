"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

// Menu data
const tapBeer = [
  { name: "Heineken", glass: "8.5", "1/3": "9.5", "1/2": "38.0" },
  { name: "Goldstar", glass: "8.5", "1/3": "9.5", "1/2": "38.0" },
  { name: "Poulaner", glass: "8.5", "1/3": "9.5", "1/2": "38.0" },
  { name: "Shapira pale ale", glass: "7.5", "1/3": "8.4", "1/2": "34.0" },
  { name: "Murphy's", glass: "14", "1/3": "", "1/2": "" },

];

const bottledBeer = [
  { name: "Corona", price: "10.0" },
  { name: "Heineken", price: "11.0" },
  { name: "Goldstar", price: "11.0" },
  { name: "Guinness", price: "13.0" }
];


const rtds = [
  { name: "Smirnoff Red", price: "9.5" },
  { name: "Smirnoff Black", price: "10.0" },
  { name: "Jim Beam and Cola", price: "11.0" },
  { name: "Coruba and Cola", price: "9.5" },
  { name: "Smirnoff Soda Pineapple & Lime", price: "9.5" },
  { name: "Smirnoff Soda Peach & Lime", price: "9.5" },
  { name: "Gordon's Pink Gin", price: "10.0" },
  { name: "Gordon's Passionfruit Gin", price: "10.0" },
  { name: "Hyoketsu Pineapple", price: "10.0" },
  { name: "Hyoketsu Peach", price: "10.0" },
  { name: "Hyoketsu Green Apple", price: "10.0" },
];

const whiteWine = [
  { name: "Kopiko Bay Sauvignon Blanc", glass: "9.5", bottle: "45.0" },
  { name: "Wither Hills Sauvignon Blanc", glass: "11.0", bottle: "57.0" },
  { name: "The Ned Sauvignon Blanc", glass: "11.5", bottle: "58.0" },
  { name: "", glass: "", bottle: "" },
  { name: "Kopiko Bay Pinot Gris", glass: "9.5", bottle: "45.0" },
  { name: "The Ned Pinot Gris", glass: "11.5", bottle: "58.0" },
  { name: "", glass: "", bottle: "" },
  { name: "Wither Hills Riesling", glass: "11.0", bottle: "57.0" },
  { name: "", glass: "", bottle: "" },
  { name: "Kopiko Bay Chardonnay", glass: "9.5", bottle: "45.0" },
  { name: "Oyster Bay Chardonnay", glass: "11.5", bottle: "58.0" },
  { name: "", glass: "", bottle: "" },
  { name: "Wither Hills Early Light", glass: "10.0", bottle: "" },
  { name: "Pinot Gris 9.5% abv", glass: "", bottle: "" },
];

const rose = [
  { name: "Kopiko Bay Rose", glass: "9.5", bottle: "45.0" },
  { name: "The Ned Rose", glass: "11.5", bottle: "58.0" },
];

const redWine = [
  { name: "Kopiko Bay Merlot", glass: "9.5", bottle: "45.0" },
  { name: "Huntaway Merlot", glass: "11.0", bottle: "55.0" },
  { name: "", glass: "", bottle: "" },
  { name: "Graham Norton Shiraz", glass: "11.0", bottle: "55.0" },
  { name: "", glass: "", bottle: "" },
  { name: "Wither Hills Syrah", glass: "11.5", bottle: "58.0" },
  { name: "", glass: "", bottle: "" },
  { name: "Kopiko Bay Pinot Noir", glass: "9.5", bottle: "45.0" },
  { name: "Dashwood Pinot Noir", glass: "11.0", bottle: "57.0" },
  { name: "Marisco Kings Wrath Pinot Noir", glass: "-", bottle: "75.0" },
];

const sparkling = [
  { name: "Lindauer Prosecco", glass: "9.5", bottle: "48.0" },
  { name: "Te Hana Reserve Brut", glass: "", bottle: "52.0" },
  { name: "Deutz Cuvee Brut NV", glass: "", bottle: "85.0" },
  { name: "Lindauer Brut", glass: "10.5", bottle: "47.0" },
  { name: "Lindauer Sauvignon Blanc", glass: "10.5", bottle: "-" },
  { name: "Lindauer Pinot Gris", glass: "10.5", bottle: "-" },
  { name: "Lindauer Fraise", glass: "10.5", bottle: "-" },
];

const classicCocktails = [
  { name: "Margarita", description: "tequila, triple sec, lime juice, sugar syrup\nwant it flavoured? just ask our team!", price: "18" },
  { name: "Mojito", description: "bacardi, lime juice, sugar, mint soda\nwant it flavoured? just ask our team!", price: "16" },
  { name: "Espresso Martini", description: "vodka, coffee liqueur and fresh espresso\nserved chilled and frothy", price: "18" },
  { name: "Negroni", description: "gin, campari and sweet vermouth\na bitter-sweet italian classic", price: "19" },
  { name: "Old Fashioned", description: "bourbon whiskey, bitters and sugar\nstirred over ice with an orange twist", price: "20" },
  { name: "Aperol Spritz", description: "aperol, prosecco and soda water\nlight, refreshing and bubbly", price: "16" },

];

const mocktails = [
  { name: "Nonalcoholic Mojito", description: "fresh mint, lime juice, sugar syrup and soda\nall the flavor, none of the alcohol", price: "10" },
  { name: "Cranberry Spritzer", description: "cranberry juice, sparkling cider and soda\nwith fresh cranberries and orange", price: "10" },
  { name: "Apple Cooler", description: "apple juice, grenadine, mint and\nsoda water", price: "9" },
];

const signatures = [
  { name: "Basil Smash", description: "gin, lemon juice, sugar syrup and fresh basil\nvibrant, herbaceous and refreshing", price: "18" },
  { name: "Berry Mojito", description: "light rum, fresh blackberries, raspberries and strawberries,\nmint, lime juice, sugar and soda", price: "18" },
  { name: "Summer's Nectar", description: "malibu, peach liqueur, vodka,\ncranberry and pineapple juice", price: "14" },
  { name: "White Wine Sangria", description: "sauvignon blanc, orange juice, peach\niced tea, pineapple juice, lemonade", price: "14" },
  { name: "Paloma", description: "tequila, grapefruit soda and lime juice\nwant it spicy? just ask our team!", price: "17" },
  { name: "Cocktail of the month", description: "", price: "POA" },
];

const nonAlcoholic = [
  { name: "Coca Cola or Zero Sugar", price: "4.5" },
  { name: "Sprite or Zero Sugar", price: "4.5" },
  { name: "Fanta", price: "4.5" },
  { name: "Iced Tea", price: "4.5" },
  { name: "Water", price: "5.0" },
  { name: "Soda Water", price: "1.0" },
  { name: "Red Bull", price: "6.5" },
  { name: "Orange Juice", price: "5.0" },
  { name: "Cranberry Juice", price: "5.0" },
  { name: "Apple Juice", price: "5.0" },
  { name: "Tomato Juice", price: "5.0" },
  { name: "Lemon Juice", price: "5.0" },
  { name: "Pineapple Juice", price: "5.0" },
  { name: "Grapefruit Soda", price: "5.0" },
];

const spirits = [
  { name: "Vodka", price: "12.0" },
  { name: "Gin", price: "12.0" },
  { name: "Rum", price: "12.0" },
  { name: "Tequila", price: "13.0" },
  { name: "Whiskey", price: "14.0" },
  { name: "Bourbon", price: "14.0" },
];

const liqueurs = [
  { name: "Baileys", price: "10.0" },
  { name: "Kahlua", price: "10.0" },
  { name: "Amaretto", price: "11.0" },
  { name: "Triple Sec", price: "10.0" },
  { name: "Campari", price: "11.0" },
];

// Components
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menus", href: "#", dropdown: true },
    { name: "Reservations", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <header className="bg-[#1d1a18] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0">
            <Image
              src="/kiki-logo.png"
              alt="Kiki"
              width={200}
              height={200}
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium hover:text-[#7e6444] transition-colors font-body uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Phone icon */}
            <Link href="tel:0547668877" className="text-white hover:text-[#7e6444] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>

            {/* Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#7e6444] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1d1a18] border-t border-[#333]">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white text-sm font-medium hover:text-[#7e6444] transition-colors font-body uppercase tracking-wide py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[300px] md:h-[350px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/471743189/1834863273.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="font-script text-white text-5xl md:text-7xl">Drinks Menu</h1>
      </div>
    </section>
  );
}

function MenuDivider() {
  return <div className="border-t border-dashed border-gray-300 my-6" />;
}

function BeerWineSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-[#1d1a18] tracking-wider mb-12">
          BEER & WINE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {/* Left Column - Beer */}
          <div>
            {/* Tap Beer */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">TAP BEER</h3>
            <div className="mb-2 flex justify-end text-xs text-gray-500 font-body space-x-6 pr-2">
              <span className="w-10 text-right">1/3</span>
              <span className="w-10 text-right">1/2</span>
            </div>
            {tapBeer.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <div className="flex space-x-6">
                  <span className="w-10 text-right font-medium">{item["1/3"]}</span>
                  <span className="w-10 text-right font-medium">{item["1/2"]}</span>
                </div>
              </div>
            ))}

            <MenuDivider />

            {/* Bottled Beer */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">BOTTLED BEER</h3>
            {bottledBeer.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}

            <MenuDivider />

            {/* RTD's */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">RTD'S</h3>
            {rtds.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Right Column - Wine */}
          <div>
            {/* White Wine */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">WHITE WINE</h3>
            <div className="mb-2 flex justify-end text-xs text-gray-500 font-body space-x-6 pr-2">
              <span className="w-10 text-right">glass</span>
              <span className="w-12 text-right">bottle</span>
            </div>
            {whiteWine.map((item, index) => (
              item.name ? (
                <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                  <span className="text-[#1d1a18]">{item.name}</span>
                  <div className="flex space-x-6">
                    <span className="w-10 text-right font-medium">{item.glass}</span>
                    <span className="w-12 text-right font-medium">{item.bottle}</span>
                  </div>
                </div>
              ) : <div key={index} className="h-2" />
            ))}

            <MenuDivider />

            {/* Rose */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">ROSE</h3>
            {rose.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <div className="flex space-x-6">
                  <span className="w-10 text-right font-medium">{item.glass}</span>
                  <span className="w-12 text-right font-medium">{item.bottle}</span>
                </div>
              </div>
            ))}

            <MenuDivider />

            {/* Red Wine */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">RED WINE</h3>
            {redWine.map((item, index) => (
              item.name ? (
                <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                  <span className="text-[#1d1a18]">{item.name}</span>
                  <div className="flex space-x-6">
                    <span className="w-10 text-right font-medium">{item.glass}</span>
                    <span className="w-12 text-right font-medium">{item.bottle}</span>
                  </div>
                </div>
              ) : <div key={index} className="h-2" />
            ))}

            <MenuDivider />

            {/* Sparkling */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">SPARKLING</h3>
            {sparkling.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <div className="flex space-x-6">
                  <span className="w-10 text-right font-medium">{item.glass}</span>
                  <span className="w-12 text-right font-medium">{item.bottle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CocktailsSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center text-[#1d1a18] tracking-wider mb-12">
          COCKTAILS &<br />NON ALCOHOLICS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {/* Left Column */}
          <div>
            {/* Classic Cocktails */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">CLASSIC COCKTAILS</h3>
            {classicCocktails.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <span className="text-[#1d1a18] font-semibold font-body">{item.name}</span>
                  <span className="font-medium font-body">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-gray-500 text-xs italic font-body whitespace-pre-line">{item.description}</p>
                )}
              </div>
            ))}

            <MenuDivider />

            {/* Our Signatures */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">OUR SIGNATURES</h3>
            {signatures.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <span className="text-[#1d1a18] font-semibold font-body">{item.name}</span>
                  <span className="font-medium font-body">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-gray-500 text-xs italic font-body whitespace-pre-line">{item.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {/* Mocktails */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">MOCKTAILS</h3>
            {mocktails.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <span className="text-[#1d1a18] font-semibold font-body">{item.name}</span>
                  <span className="font-medium font-body">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-gray-500 text-xs italic font-body whitespace-pre-line">{item.description}</p>
                )}
              </div>
            ))}

            <MenuDivider />

            {/* Non Alcoholic */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">NON ALCOHOLIC</h3>
            {nonAlcoholic.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-0.5 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AlcoholicBeveragesSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center text-[#1d1a18] tracking-wider mb-12">
          ALCOHOLIC BEVERAGES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {/* Left Column */}
          <div>
            {/* Spirits */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">SPIRITS</h3>
            {spirits.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {/* Liqueurs */}
            <h3 className="font-heading text-xl md:text-2xl text-[#7e6444] mb-4 tracking-wider">LIQUEURS</h3>
            {liqueurs.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1 font-body text-sm">
                <span className="text-[#1d1a18]">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1d1a18] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/kiki-logo.png"
              alt="Kiki"
              width={200}
              height={200}
              className="h-32 w-auto opacity-80"
            />
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-sm tracking-widest mb-4 text-[#7e6444]">CONTACT</h4>
            <div className="font-body text-sm text-gray-300 space-y-2">
              <p>Address: Rafael Eitan 5<br />Em HaMoshavot<br />Petah Tikva</p>
              <p className="pt-2">Phone: <Link href="tel:0547668877" className="hover:text-[#7e6444] transition-colors">054-7668877</Link></p>
              <p className="pt-2">Email:<br /><Link href="mailto:admin@kiki.rest.co.il" className="hover:text-[#7e6444] transition-colors">admin@kiki.rest.co.il</Link></p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-sm tracking-widest mb-4 text-[#7e6444]">OPENING HOURS</h4>
            <div className="font-body text-sm text-gray-300">
              <p>Currently Open</p>
              <p>Closes 10:00PM</p>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-sm tracking-widest mb-4 text-[#7e6444]">CONNECT WITH US</h4>
            <div className="font-body text-sm text-gray-300 space-y-2">
              <p>[Social Media Links]</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function DrinksMenuPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BeerWineSection />
      <CocktailsSection />
      <AlcoholicBeveragesSection />
      <Footer />
    </main>
  );
}
