"use client";

import { useState, useEffect } from "react";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { Card, CardContent } from "components/ui/card";

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent opacity-30" />
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent opacity-20" />
    </div>
  );
}

function FloatingShape({ className, delay }: { className?: string; delay?: string }) {
  return (
    <div 
      className={`absolute opacity-20 ${className}`}
      style={{ animationDelay: delay }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="animate-float">
        <rect x="10" y="10" width="20" height="20" stroke="#3a3a3a" strokeWidth="1" />
        <circle cx="20" cy="20" r="8" stroke="#3a3a3a" strokeWidth="1" />
      </svg>
    </div>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <GridBackground />
      
      <FloatingShape className="top-1/4 left-[10%]" delay="0s" />
      <FloatingShape className="top-1/3 right-[15%]" delay="2s" />
      <FloatingShape className="bottom-1/4 left-[20%]" delay="4s" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#6b6b6b] mb-6">
            Desarrollo Web
          </span>
        </div>

        <h1 className={`font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          Software que <br />
          <span className="text-[#6b6b6b]">define el futuro</span>
        </h1>

        <p className={`text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto mb-12 leading-relaxed ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          Creamos experiencias digitales que transforman negocios. 
          Desarrollo web de alto impacto para startups y empresas que buscan destacar.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <Button 
            size="lg" 
            className="bg-[#fafafa] text-[#050505] hover:bg-[#e0e0e0] px-8 h-12 text-sm tracking-wide uppercase"
          >
            Comenzar Proyecto
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#2a2a2a] text-[#fafafa] hover:bg-[#1a1a1a] hover:border-[#3a3a3a] px-8 h-12 text-sm tracking-wide uppercase bg-transparent"
          >
            Ver Trabajos
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-[#6b6b6b]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#6b6b6b] to-transparent" />
      </div>
    </section>
  );
}

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios y aplicaciones web a medida, optimizados para rendimiento y conversión.",
    icon: "◈"
  },
  {
    title: "E-commerce",
    description: "Tiendas online modernas con experiencias de compra fluidas y seguras.",
    icon: "◉"
  },
  {
    title: "MVP Startup",
    description: "Validación rápida de tu idea con productos mínimos viables de alta calidad.",
    icon: "◇"
  },
  {
    title: "Consultoría Tech",
    description: "Asesoría técnica para arquitectura, escalabilidad y mejores prácticas.",
    icon: "◆"
  }
];

function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-20 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-[#6b6b6b]">Servicios</span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-medium mt-4">
            Lo que hacemos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#2a2a2a]">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-[#0a0a0a] border-none hover:bg-[#0f0f0f] transition-all duration-500 group ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <CardContent className="p-10">
                <span className="text-2xl text-[#3a3a3a] group-hover:text-[#6b6b6b] transition-colors">
                  {service.icon}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium mt-6 mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "50+", label: "Proyectos" },
  { value: "98%", label: "Satisfacción" },
  { value: "5+", label: "Años" },
  { value: "24h", label: "Respuesta" }
];

function Stats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className="relative py-24 px-6 border-y border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-medium mb-2">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    title: "Mínimalismo funcional",
    description: "Cada elemento tiene un propósito. Eliminamos lo innecesario para destacar lo esencial."
  },
  {
    title: "Código limpio",
    description: "Arquitectura escalable y mantenible. Tecnologías modernas que future-proof tu producto."
  },
  {
    title: "Enfoque negocio",
    description: "No solo escribimos código, entendemos tu modelo de negocio y optimizamos para resultados."
  }
];

function WhyUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-[#6b6b6b]">Por qué nosotros</span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-medium mt-4 mb-6">
              Filosofía de trabajo
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed mb-8">
              Creemos que el mejor software es aquel que pasa desapercibido. 
              Funcional, elegante, invisible. Enfoque en lo que importa: hacer crecer tu negocio.
            </p>
            <Button 
              className="bg-[#fafafa] text-[#050505] hover:bg-[#e0e0e0] px-6 h-11 text-sm tracking-wide uppercase"
            >
              Conocer más
            </Button>
          </div>

          <div className="space-y-px bg-[#2a2a2a]">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-all duration-300 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section className="relative py-32 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-[#6b6b6b]">Contacto</span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-medium mt-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-[#6b6b6b] mt-4">
            Cuéntanos sobre tu idea y te responderemos en menos de 24 horas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-6 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">Nombre</label>
              <Input 
                placeholder="Tu nombre"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="bg-[#0a0a0a] border-[#2a2a2a] text-[#fafafa] placeholder:text-[#4a4a4a] focus:border-[#6b6b6b] h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">Email</label>
              <Input 
                type="email"
                placeholder="tu@email.com"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="bg-[#0a0a0a] border-[#2a2a2a] text-[#fafafa] placeholder:text-[#4a4a4a] focus:border-[#6b6b6b] h-12"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">Mensaje</label>
            <Textarea 
              placeholder="Cuéntanos sobre tu proyecto..."
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
              className="bg-[#0a0a0a] border-[#2a2a2a] text-[#fafafa] placeholder:text-[#4a4a4a] focus:border-[#6b6b6b] min-h-[150px] resize-none"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#fafafa] text-[#050505] hover:bg-[#e0e0e0] h-12 text-sm tracking-wide uppercase"
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-[family-name:var(--font-heading)] text-xl font-medium tracking-tight">
              DRASKINT
            </span>
            <p className="text-sm text-[#6b6b6b] mt-2">
              Software que define el futuro
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-[#6b6b6b]">
            <a href="#" className="hover:text-[#fafafa] transition-colors">Trabajos</a>
            <a href="#" className="hover:text-[#fafafa] transition-colors">Servicios</a>
            <a href="#" className="hover:text-[#fafafa] transition-colors">Contacto</a>
          </div>

          <div className="text-xs text-[#4a4a4a]">
            © 2026 Draskint. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}