import { createFileRoute } from "@tanstack/react-router";
import { Plane, ShieldCheck, FileText, Check, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import rio from "@/assets/rio.jpg";
import lisboa from "@/assets/lisboa.jpg";
import cancun from "@/assets/cancun.jpg";

// Troque pelo seu link de pagamento
const CHECKOUT = "#";
const PRICE = "R$ 19,90";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Caminho das Milhas — Um Guia para Viajantes" },
      { name: "description", content: "Guia em PDF para iniciantes: use os pontos do seu cartão para emitir passagens." },
      { property: "og:title", content: "O Caminho das Milhas — Um Guia para Viajantes" },
      { property: "og:description", content: "Transforme os pontos do seu cartão em passagens aéreas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ label = `COMPRAR O GUIA — ${PRICE}` }: { label?: string }) {
  return (
    <a href={CHECKOUT} className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 font-extrabold text-primary-foreground shadow-cta transition hover:scale-[1.02]">
      <Plane className="h-5 w-5" /> {label}
    </a>
  );
}

const banks = ["Itaú", "Bradesco", "Banco do Brasil", "Santander", "Nubank", "Inter", "C6 Bank", "Caixa", "BTG Pactual", "XP"];
const programs = ["Livelo", "Esfera", "Smiles", "LATAM Pass", "Azul Fidelidade", "TAP Miles&Go"];
const topics = [
  ["Escolha do cartão ideal", "Descubra qual cartão combina com sua renda e rotina."],
  ["Acúmulo acelerado", "Táticas fáceis para render mais pontos com os mesmos gastos."],
  ["Transferências bonificadas", "Como usar campanhas para multiplicar o saldo."],
  ["Comprar pontos compensa?", "Saiba identificar a boa oferta e evitar armadilhas."],
  ["Emitindo sua passagem", "Roteiro completo para voos no Brasil e no exterior."],
  ["Do banco para a aérea", "Envie seus pontos para o programa certo, sem perder valor."],
];
const trips = [
  { img: rio, city: "Rio de Janeiro", route: "São Paulo ⇄ Rio", pts: "7.600", prog: "Azul Fidelidade" },
  { img: cancun, city: "Cancún", route: "São Paulo ⇄ Cancún", pts: "31.400", prog: "LATAM Pass" },
  { img: lisboa, city: "Lisboa", route: "São Paulo ⇄ Lisboa", pts: "63.200", prog: "LATAM Pass" },
];
const faq = [
  ["Preciso de um cartão premium?", "Não. Há opções para todos os bolsos, inclusive sem anuidade."],
  ["Como recebo?", "O PDF chega no seu e-mail assim que o pagamento é aprovado."],
  ["Nunca usei milhas. Serve pra mim?", "Sim, o conteúdo começa do básico."],
  ["Vale para voos internacionais?", "Sim, há um capítulo só sobre isso."],
  ["E se eu não gostar?", "Você tem 7 dias para pedir reembolso integral."],
];

function Index() {
  return (
    <main className="font-sans">
      <section className="relative min-h-[680px] overflow-hidden text-secondary-foreground">
        <img src={hero} alt="Casal com malas no aeroporto" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-center gap-2 text-xl font-extrabold"><Plane className="text-sun" /> <span>O Caminho das Milhas<span className="block text-xs font-semibold opacity-80">Um Guia para Viajantes</span></span></div>
          <div className="ml-auto mt-20 max-w-xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-sun"><Sparkles className="h-4 w-4" /> Guia para iniciantes</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight">Um Caminho <span className="text-sun">Prático</span> para Saber</h1>
            <p className="mt-6 text-lg opacity-90">Onde e como resgatar os seus pontos dos cartões.</p>
            <div className="mt-8"><Cta /></div>
            <div className="mt-5 flex gap-8 text-sm opacity-90">
              <span className="flex items-center gap-1"><FileText className="h-4 w-4 text-sun" /> PDF completo</span>
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-sun" /> 7 dias de garantia</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold">Compatível com o seu cartão atual</h2>
        <p className="mt-2 text-muted-foreground">Clientes destes bancos e programas já podem começar hoje.</p>
        {[banks, programs].map((list, i) => (
          <div key={i} className="mt-8 flex flex-wrap justify-center gap-3">
            {list.map((b) => <span key={b} className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground">{b}</span>)}
          </div>
        ))}
        <p className="mt-6 text-xs text-muted-foreground">Marcas mencionadas apenas como referência.</p>
      </section>

      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-extrabold">O que está no guia</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {topics.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-secondary-foreground/15 p-6">
                <Check className="text-sun" /><h3 className="mt-3 font-bold">{t}</h3><p className="mt-1 text-sm opacity-80">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Cta /></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-extrabold">Exemplos de passagens em milhas</h2>
        <p className="mt-2 text-center text-muted-foreground">Ida e volta, econômica, valores "a partir de" + taxas</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trips.map((t) => (
            <div key={t.city} className="overflow-hidden rounded-xl bg-card shadow-lg">
              <img src={t.img} alt={t.city} loading="lazy" width={944} height={704} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold">{t.city}</h3>
                <p className="text-sm text-muted-foreground">{t.route}</p>
                <p className="mt-3 text-3xl font-extrabold text-primary">{t.pts} <span className="text-base text-foreground">milhas</span></p>
                <p className="text-xs text-muted-foreground">{t.prog}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">Preços e disponibilidade variam conforme a data.</p>
      </section>

      <section className="bg-secondary py-20 text-center text-secondary-foreground">
        <h2 className="text-3xl font-extrabold">Guia + bônus de prompts de IA</h2>
        <p className="mt-4 opacity-80">de <s>R$ 47</s> por</p>
        <p className="text-6xl font-extrabold text-sun">{PRICE}</p>
        <p className="mt-2 text-sm opacity-80">pagamento único · acesso imediato</p>
        <div className="mt-8"><Cta label="QUERO O MEU AGORA" /></div>
        <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-sm opacity-90"><ShieldCheck className="text-sun" /> Garantia de 7 dias: não gostou, devolvemos tudo.</p>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="text-center text-3xl font-extrabold">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className="rounded-lg border bg-card p-4">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-2 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center"><Cta /></div>
      </section>
    </main>
  );
}
