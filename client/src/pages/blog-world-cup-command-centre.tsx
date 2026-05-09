import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const questions = [
  "Where are we today?",
  "What is next?",
  "What time is kickoff in local time and back home?",
  "Where are we sleeping?",
  "Who still needs to do admin goblin work?",
  "What has this magnificent circus cost us?",
  "Where did we put the booking reference?",
  "Are we about to miss something expensive?",
];

const features = [
  ["Today / Trip Ops", "what matters now, not what looked neat three months ago"],
  ["Trip timeline", "the route spine across cities and match days"],
  ["Bookings", "hotels, flights, references, and the fragile paper trail of civilisation"],
  ["Risks ledger", "the “this could bite us later” section, because future pain should be labelled early"],
  ["Budget", "costs in AUD, because pretending exchange rates are friendly is how the spreadsheet demons win"],
  ["Places board", "useful stops, things to do, match-day targets, food, bars, transport points"],
  ["Expenses", "shared costs without needing a forensic accounting team in the group chat"],
  ["Wallet references", "the important little numbers and links that always vanish when roaming data gets spicy"],
  ["Offline/PWA bones", "because stadium Wi-Fi is not infrastructure, it is a rumour"],
];

const needs = [
  "the next action",
  "the right booking",
  "the right address",
  "the shared cost",
  "the crew status",
  "the match-day plan",
  "the thing we must not forget",
];

const next = [
  ["Match Day Mode", "run-sheet, ticket links, venue notes, transport, meetup points"],
  ["Travel Day Runbooks", "airport, hotel, transfer, check-in, and “do not forget this” steps"],
  ["Decision Mode for risks", "turn vague worry into clear options and deadlines"],
  ["Crew Readiness Matrix", "who has documents, tickets, insurance, payments, and app access sorted"],
  ["Ground Transfer Planner", "because “we’ll figure it out there” is how money catches fire"],
  ["Offline Wallet upgrades", "better cached documents, references, and search"],
  ["Expense settlement", "less “who owes what?” and more “pay Steve before he becomes feral”"],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-6 tracking-tight">{title}</h2>
      <div className="space-y-5 text-lg leading-8 text-gray-700">{children}</div>
    </section>
  );
}

export default function BlogWorldCupCommandCentre() {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Navigation />

      <main className="pt-24">
        <article>
          <header className="relative overflow-hidden bg-neutral-gray text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.25),_transparent_35%)]" />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
              <div className="flex flex-wrap gap-2 mb-8">
                {["World Cup 2026", "PWA", "Home Lab", "Trip Planning", "Mild Operational Panic"].map((tag) => (
                  <Badge key={tag} className="bg-white/10 text-white border border-white/20 hover:bg-white/15">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-blue-200 font-semibold mb-4">Published May 9, 2026</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
                We Built a World Cup Trip Command Centre Because Chaos Was Getting Ideas
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-blue-50 max-w-3xl leading-relaxed">
                A pocket mission board for football, flights, hotels, costs, documents, and the ancient group-trip ritual of someone asking a question answered three messages ago.
              </p>
              <div className="mt-10">
                <Button asChild className="bg-primary-blue hover:bg-accent-blue text-white px-6 py-6 text-base rounded-xl">
                  <a href="https://wc.integrate.network/wc2026/" target="_blank" rel="noopener noreferrer">
                    Open the trip companion <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="space-y-5 text-lg leading-8 text-gray-700">
              <p>There is a moment in every big group trip where the spreadsheet stops being a planning tool and becomes a haunted filing cabinet.</p>
              <p>You know the one.</p>
              <p>Flights in one tab. Hotels in another. Match dates somewhere else. Someone has a screenshot. Someone else has “the updated version”. A booking confirmation is buried in Gmail under a subject line written by a robot with no love in its heart. The group chat contains useful information, technically, in the same way a landfill contains jewellery.</p>
              <p>That was the early shape of the 2026 World Cup trip.</p>
              <p className="text-2xl font-semibold text-gray-950">So we built an app.</p>
              <p>Not a startup. Not a lifestyle platform. Not some venture-funded rectangle called Triply or VaycayPilot or whatever fresh nonsense is currently stalking Product Hunt.</p>
              <p>We built a small, specific, slightly over-engineered travel ops console for a bunch of Australians crossing North America in pursuit of football, chaos, and probably several deeply questionable airport meals.</p>
            </div>

            <Section title="The Beast We Were Trying to Tame">
              <p>The trip is not a weekend away.</p>
              <p>It is a multi-city World Cup migration across Canada, the United States, and Mexico. Sydney to Vancouver. Seattle. Vegas. San Jose. San Francisco. New Orleans. Miami. Cancun. Los Angeles. Matches, flights, hotels, ferries, transfers, tickets, budgets, documents, bags, risks, and humans.</p>
              <p>Especially humans.</p>
              <p>Humans are the problem software has been trying to patch since the Bronze Age.</p>
              <ul className="grid gap-3 my-8">
                {questions.map((item) => (
                  <li key={item} className="rounded-xl border border-blue-100 bg-light-blue px-5 py-3 text-gray-800">{item}</li>
                ))}
              </ul>
              <p>A spreadsheet can answer those questions, if you enjoy pinching and zooming in a hotel lobby while your soul quietly leaves through the emergency exit.</p>
              <p>I do not.</p>
            </Section>

            <Section title="Less Trip Planner, More Mission Board">
              <p>The app became a World Cup trip command centre.</p>
              <p>Not a generic travel planner. Generic travel planners are built for imaginary people called “users” who take clean stock photos of cappuccinos beside passports.</p>
              <p>This is for actual people on an actual trip, tired, roaming, sunburnt, full of stadium food, trying to work out whether the next critical action is “get an Uber”, “find the hotel”, “scan the ticket”, or “stop Adrian from opening another tab called final-final-v3”.</p>
              <p>The goal was simple: put the trip brain in one place. On the phone. Fast. Clear. Offline-tolerant. Low fuss. No ceremony. No login maze guarded by a SaaS goblin.</p>
            </Section>

            <Section title="What It Does">
              <p>The World Cup app now acts like a little field console for the trip.</p>
              <p>It tracks the route, the days, the bookings, the risks, the budget, the places, the notes, the expenses, and the useful wallet-type references that future-us will absolutely need at the worst possible time.</p>
              <div className="grid gap-4 my-8">
                {features.map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-950 mb-1">{title}</h3>
                    <p className="text-gray-700 leading-7">{body}</p>
                  </div>
                ))}
              </div>
              <p>It is not trying to be beautiful in the fake Dribbble sense. It is trying to be useful while someone is walking through an airport with 7kg of carry-on, 18 percent battery, and the emotional texture of a boiled sock.</p>
              <p>That is the design brief.</p>
            </Section>

            <Section title="The Tech Stack, Mercifully Not Dramatic">
              <p>The first version is a PWA: web tech, phone-first, installable, cheap to host, quick to change.</p>
              <p>Static frontend where possible. SQLite-backed API where shared mutable data actually matters. Local/offline behaviour where reality requires it. Hosted in the lab, served out like a tiny travel goblin with a clipboard.</p>
              <p>
                Public home: <a href="https://wc.integrate.network/wc2026/" className="font-semibold text-primary-blue hover:text-secondary-blue underline" target="_blank" rel="noopener noreferrer">https://wc.integrate.network/wc2026/</a>
              </p>
              <p>There is no grand architecture astronauting here. The app exists to survive contact with travel. The stack has one job: answer the question before the group chat becomes a crime scene.</p>
            </Section>

            <Section title="Why Not Just Use Google Sheets?">
              <p>Because Google Sheets is where trip enthusiasm goes to become admin mulch.</p>
              <p>Sheets are great when planning. They are less great when you are outside a stadium trying to work out which booking applies to tonight, whether the next city has a transfer gap, and why the hotel confirmation is in someone else’s inbox under “Reservation confirmed”.</p>
              <p>The app is not replacing the planning source of truth. It is turning that source of truth into something usable in motion.</p>
              <blockquote className="my-8 border-l-4 border-primary-blue bg-light-blue p-6 rounded-r-2xl text-2xl font-semibold text-gray-950">
                A spreadsheet is a warehouse. This thing is the forklift.
              </blockquote>
            </Section>

            <Section title="The Best Feature Is Trust">
              <p>The quiet trick with this kind of app is not feature count. It is trust.</p>
              <p>Can I open it and immediately know what matters? Can I use it while tired? Can someone else in the crew understand it without a guided tour and a whiteboard?</p>
              <p>Can it help us avoid the dumb expensive mistakes, missed transfers, lost booking references, forgotten documents, double-paid nonsense, and “wait, who booked that?” moments?</p>
              <p>If yes, it is working.</p>
              <p>A travel app does not need to be clever. It needs to be calmly useful while the humans are becoming less clever by the hour.</p>
            </Section>

            <Section title="The Fun Part">
              <p>The fun part is that it feels less like building software and more like building a tiny control room for an adventure.</p>
              <p>The match schedule is not just sport data. It is the drumbeat of the trip.</p>
              <p>The route is not just cities. It is a trail of future stories, airport benches, questionable diners, and one or two moments where everyone stands around saying “surely this is the right terminal”.</p>
              <p>The budget is not just maths. It is the grim little oracle that tells us how much joy costs in Australian dollars.</p>
              <p>The risk ledger is my favourite sort of grim practicality: a labelled shelf for future problems, so they stop lurking in the walls.</p>
              <p>And the offline wallet is pure travel superstition made useful. Keep the important stuff close. Assume networks will fail. Assume batteries will die. Assume the one PDF you need is hiding behind a loading spinner with the moral character of a raccoon.</p>
            </Section>

            <Section title="What We Learned">
              <p>A good trip app is not about travel content. It is about reducing panic.</p>
              <p>Nobody needs another generic list of “top 10 things to do in Miami”. The internet is already screaming that at us through a megaphone.</p>
              <ul className="grid gap-2 list-disc pl-6">
                {needs.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>That is the difference between a travel guide and a trip brain.</p>
              <p>Also, mobile-first is not optional. If the app only feels good on a laptop, it has already failed. Nobody is opening a laptop in a rideshare to check the hotel address unless the trip has entered its cursed phase.</p>
            </Section>

            <Section title="What Comes Next">
              <p>The current version has the bones. The next evolution is making it more like a proper field companion.</p>
              <div className="grid gap-4 my-8">
                {next.map(([title, body]) => (
                  <div key={title} className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
                    <h3 className="font-bold text-gray-950 mb-1">{title}</h3>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
              <p>This is the good kind of feature list: all of it exists because travel will generate the problem whether we build for it or not.</p>
            </Section>

            <Section title="Final Whistle">
              <p>The World Cup app started as a way to make the trip less messy.</p>
              <p>It is becoming something better: a pocket-sized mission board for a once-in-a-lifetime football pilgrimage across North America.</p>
              <p>It will not prevent delayed flights, weird hotel carpets, stadium queues, roaming issues, or the ancient group-trip ritual of someone asking a question answered three messages ago.</p>
              <p>But it will give us one trusted place to look.</p>
              <p>And sometimes that is the whole game.</p>
              <p className="pt-8 italic text-gray-600">Built in the lab. Powered by football, travel anxiety, and the ancient engineering principle that every group chat eventually needs a database.</p>
            </Section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
