import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Facebook, Star, ArrowRight, Menu, X } from 'lucide-react';

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/528773046_122117617628936959_5361244164662348902_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=FDgswCPVFcwQ7kNvwH3_-D6&_nc_oc=AdpqQoJeTVcFA48xfXK8pNOC-1H5D4uU-oYkear0DlwJjFDT5qJdd0Tfxu7eQHzN488&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=DUULyfLCcfMQ2beqDgQVwg&_nc_ss=7b2a8&oh=00_Af5fg-MnxH7Vtn4nitt9dg7cpRaE65SRm_NkDr6gaqOhqw&oe=69FB83EF",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/529254512_122117617622936959_8418865859194414829_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=yinrPAmB9bUQ7kNvwFTGQ_X&_nc_oc=AdoLx_wyqrbYNFiAl8Eg29RJA1ZJEfUut-2-RiqK_UHc5s1p236xJwoAHVa4em1Yvag&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=eJaQ5vt8WJakPWA5ZY0EKw&_nc_ss=7b2a8&oh=00_Af5gjSSpca0cPmY_kDuWiJLD41QDB1KbFWGasOB0XXwxyA&oe=69FB820B",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/530093981_122117617520936959_2906288243354613251_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=Bwqyktupm8MQ7kNvwFNKY7e&_nc_oc=Adq4ujVQPPJLsWBhLIXrD0RAW7imsm2GGrFCcugzS_qO5a-_Dd-k97HbI-6etar72Y0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=1w_C9yEU3iuNw2uKtEIWoA&_nc_ss=7b2a8&oh=00_Af5glXs1Oy_9ZyDBDBAGRSuFy97O-TaZ5suexuk0d9kdjA&oe=69FB755D",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/529937442_122117617514936959_8153372063157695295_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=iRg7YUwC5a8Q7kNvwFFvQ49&_nc_oc=AdregyIBD4g-wqCvCMimJ0daVaOwZMr5Cjf0LioswZrvCcMnlZDVspzmEeD-1QLrNB4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CRSuMBJvqwP28n3l-ktlWw&_nc_ss=7b2a8&oh=00_Af6-fIx48RE7Z_b3FzrO-BQnV5fWm06CKZj0rpNHHiz5zg&oe=69FB9A9B",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/528723361_122117617508936959_9173615639948468970_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=-CVKE0pBTPMQ7kNvwET3Y8q&_nc_oc=AdoS_W5lpLiVypNwkiYIRuNaHarKs-hl1hHn8G8as1evINitqSf87P7hd7AyuRWPjf4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=5kiN3_6IJ5x9MMJpcViKig&_nc_ss=7b2a8&oh=00_Af7y75x41MwH-2b5CYSstbiHlZVSB2OOJpL_8iDzot8Y9w&oe=69FB79CA",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/528675552_122117613692936959_4238235416622352689_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=--sM2iAQJdoQ7kNvwHbmr9m&_nc_oc=AdoakXoxLS8G1S4Z9IINEHgwtc4sPXkp09dITBF8c-XSRwH0xonLp8DAcZQKpLWNryM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=HVCFU-qYQzuyeP4rlKqflg&_nc_ss=7b2a8&oh=00_Af4F2fQeYN_KcoZl_CBCC83Y9FKGbvoukoAjJ_spHXM7Ug&oe=69FB8835"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "#o-nas", label: "O nas" },
    { href: "#galeria", label: "Galeria zdjęć" },
    { href: "#lokalizacja", label: "Lokalizacja" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-beige/95 backdrop-blur px-8 md:px-16 py-6 flex justify-between items-center border-b border-black/5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
          <h1 className="text-4xl font-light italic leading-none tracking-tighter text-brand-dark">LuTa</h1>
          <span className="font-sans text-[8px] uppercase tracking-[0.4em] opacity-60">Sala Bankietowa</span>
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex gap-12 font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-gold transition-colors">{link.label}</a>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="text-right hidden sm:block">
          <span className="font-sans text-[9px] uppercase tracking-widest opacity-40 block mb-1">Kontakt</span>
          <a href="tel:+48514946114" className="text-md font-medium hover:text-brand-gold transition-colors">+48 514 946 114</a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 text-brand-dark hover:text-brand-gold transition-colors"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-beige pt-32 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={closeMenu}
                  className="text-4xl font-light italic tracking-tighter text-brand-dark hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-8 border-t border-black/5 mt-4">
                <p className="font-sans text-[10px] uppercase tracking-widest opacity-40 mb-4">Kontakt</p>
                <a href="tel:+48514946114" className="text-2xl font-light block mb-2">+48 514 946 114</a>
                <p className="text-sm opacity-60">Słowiańska 3, Lubin</p>
              </div>
            </div>
            
            <button 
              onClick={closeMenu}
              className="absolute top-8 right-8 p-2 text-brand-dark"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle?: string, number: string }) => (
  <div className="mb-16 space-y-6">
    <div className="flex items-center gap-4">
      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">{number}</span>
      <div className="h-px flex-1 bg-brand-gold opacity-20"></div>
    </div>
    <div className="max-w-2xl">
      <h2 className="text-6xl md:text-8xl font-light leading-none tracking-tighter text-brand-dark mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-xl italic opacity-60 text-brand-dark leading-relaxed">{subtitle}</p>}
    </div>
  </div>
);

const Hero = () => (
  <section className="min-h-screen pt-32 pb-16 flex flex-col justify-center">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-12"
      >
        <h2 className="text-[12vw] font-light italic leading-[0.8] tracking-tighter text-brand-dark mb-12">
          Przytulna sala na Twoje <br />
          <span className="not-italic text-brand-gold">wyjątkowe</span> chwile!
        </h2>
      </motion.div>
      
      <div className="lg:col-span-8 overflow-hidden rounded-3xl aspect-[16/9] lg:aspect-[21/9]">
        <img 
          src={IMAGES[1]} 
          alt="Sala Bankietowa LuTa" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="lg:col-span-4 space-y-8 pb-4">
        <p className="font-sans text-sm leading-relaxed opacity-70 border-l border-brand-gold pl-6 ml-2">
          Organizujemy chrzciny, komunie, urodziny, stypy oraz inne imprezy okolicznościowe. 
          Nasza sala to połączenie elegancji z domowym ciepłem w samym sercu Lubina.
        </p>
        <a 
          href="#kontakt" 
          className="group inline-flex items-center gap-4 border border-black/10 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 w-full justify-between"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Zarezerwuj termin</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="o-nas" className="py-24 border-t border-black/5">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <SectionHeader title="O nas" subtitle="Historia pasji do goscinnosci" number="01" />
        <div className="space-y-6 font-sans text-lg font-light leading-relaxed opacity-80">
          <p>
            Sala Bankietowa LuTa powstała z marzenia o stworzeniu miejsca, w którym każda uroczystość nabiera szczególnego blasku. Nasza przestrzeń to nie tylko mury, ale przede wszystkim atmosfera, którą tworzymy z myślą o naszych gościach.
          </p>
          <p>
            Dbamy o każdy detal – od starannie dobranych dekoracji, po wyśmienitą, domową kuchnię. Słowiańska 3 to adres, pod którym świętujemy radość, celebrujemy ważne chwile i spotykamy się w gronie najbliższych.
          </p>
        </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-2 gap-4">
        <div className="rounded-3xl overflow-hidden aspect-[3/4]">
          <img src={IMAGES[0]} alt="LuTa Interior" className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
        </div>
        <div className="rounded-3xl overflow-hidden aspect-[3/4] translate-y-12">
          <img src={IMAGES[2]} alt="LuTa Detail" className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const GallerySection = () => (
  <section id="galeria" className="py-24 border-t border-black/5">
    <SectionHeader title="Galeria zdjęć" subtitle="Nasza sala w obiektywie" number="02" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {IMAGES.map((src, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-sm"
        >
          <img 
            src={src} 
            alt={`Galeria ${i}`} 
            className="w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-115" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

const LocationSection = () => (
  <section id="lokalizacja" className="py-24 border-t border-black/5">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-4">
        <SectionHeader title="Lokalizacja" subtitle="Łatwy dojazd w centrum miasta" number="03" />
        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="text-brand-gold w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-sans text-xs uppercase tracking-widest opacity-40 mb-1">Adres</p>
              <p className="text-2xl font-light">Słowiańska 3, Lubin</p>
              <p className="text-sm opacity-60">59-300 Lubin, Polska</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 h-[500px] rounded-3xl overflow-hidden border border-black/5 shadow-2xl relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.2808181740447!2d16.2101512128299!3d51.397894671670976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f7b614cfcef%3A0x68a001539d714c30!2sS%C5%82owia%C5%84ska%203%2C%2059-300%20Lubin!5e0!3m2!1spl!2spl!4v1776765452205!5m2!1spl!2spl" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 pointer-events-none border-[12px] border-brand-beige/50 rounded-3xl"></div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="kontakt" className="py-24 border-t border-black/5">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-12">
        <SectionHeader title="Kontakt" subtitle="Jesteśmy do Twojej dyspozycji" number="04" />
      </div>
      
      <div className="lg:col-span-6 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-sans">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Telefon</p>
            <a href="tel:+48514946114" className="text-3xl font-light hover:text-brand-gold transition-colors">+48 514 946 114</a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">E-mail</p>
            <a href="mailto:luiza.marszalek60@gmail.com" className="text-xl font-light hover:text-brand-gold transition-colors">luiza.marszalek60@gmail.com</a>
          </div>
        </div>

        <div className="space-y-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Słoneczni na social mediach</p>
          <a 
            href="https://www.facebook.com/profile.php?id=61578108795748" 
            target="_blank" 
            className="group flex items-center justify-between border border-black/10 p-6 rounded-2xl hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <Facebook className="w-6 h-6 group-hover:text-white transition-colors" />
              <div className="group-hover:text-white">
                <p className="text-sm font-semibold tracking-wide">Sala Bankietowa LuTa</p>
                <p className="text-[9px] uppercase tracking-widest opacity-60">Odwiedź nasz profil</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:text-white translate-x-0 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 flex items-center justify-center p-12 bg-white/40 rounded-3xl border border-black/5">
        <div className="text-center space-y-6">
          <Star className="w-12 h-12 text-brand-gold mx-auto opacity-30" />
          <h4 className="text-3xl font-serif italic">Zapraszamy do rezerwacji</h4>
          <p className="font-sans text-sm opacity-60 max-w-xs mx-auto">Zachęcamy do kontaktu telefonicznego w celu ustalenia szczegółów Twojej imprezy.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-black/5 font-sans text-[9px] uppercase tracking-[0.4em] opacity-30">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <span className="font-serif text-lg italic tracking-tighter opacity-100">LuTa</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="flex gap-12">
        <span>Wedding & Events</span>
        <span>Lubin, Poland</span>
        <span>Słowiańska 3</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige relative selection:bg-brand-dark selection:text-white">
      {/* Editorial Frame Layout */}
      <div className="editorial-frame hidden lg:block" />
      
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-8 md:px-16 pt-8 relative z-10">
        <Hero />
        <About />
        <GallerySection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
