import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Target,
  Sparkles,
  Route,
  FastForward,
  Clock,
  ShieldCheck,
  Quote,
  BookOpen,
  FlaskConical,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import nathanMielke from "@/assets/nathan-mielke.jpg.asset.json";
import ijRosenblum from "@/assets/ij-rosenblum.jpg.asset.json";

const capabilities = [
  {
    icon: Target,
    label: "Assess",
    solution: "Skill Atlas & Assessments",
    friction: "Searching for relevant content",
    description:
      "Pinpoints each role's skill gaps through assessments and exams, so learners start where they actually need to.",
    hours: "1–2 hrs / mo",
  },
  {
    icon: Sparkles,
    label: "Build",
    solution: "StormAI Studio",
    friction: "Generic training not tied to role",
    description:
      "Generates custom, role-specific lessons — or whole programs — in minutes.",
    hours: "1–2 hrs / mo",
  },
  {
    icon: Route,
    label: "Guide",
    solution: "Guided Paths + LXP",
    friction: "Managers guiding learners manually",
    description:
      "Auto-assigns paths and due dates with full manager visibility, tracked and reported end to end.",
    hours: "2–5 hrs / mo",
  },
  {
    icon: FastForward,
    label: "Learn",
    solution: "Fast Track",
    friction: "Sitting through known material",
    description:
      "Skips material a learner already knows and adapts to their level and goals.",
    hours: "1–3 hrs / mo",
  },
];

const caseStudies = [
  {
    id: "mielke",
    name: "Nathan Mielke",
    image: nathanMielke.url,
    role: "K-12 Educational Technology Consultant & Director of Technology Services",
    org: "Public school district",
    location: "Milwaukee, WI",
    since: "Student since 2016",
    industry: "Education Technology",
    headline: "We've been able to see real results in real time.",
    quotes: [
      {
        q: "What made you look for IT training?",
        a: "We've had a lot of turnover. It's hard to say, \"Okay, someone's got to leave for a week and learn about deployment.\" That's a week. I love that my guys can go do training for half a day or a day and then come back. They're not gone for a week and we're not paying for a hotel. The flexibility is ideal.",
      },
      {
        q: "How did StormWind compare to other vendors you considered?",
        a: "StormWind has a logical scope and sequence of the information. For example, the CISSP training — the instructor takes you through all the domains. Whereas someone may do several hours of training on YouTube that's not going to be that much content, and you don't know their level of expertise either. StormWind's product is much more real-world applicable.",
      },
      {
        q: "What's been your favorite thing about the courses?",
        a: "Knowing that the instructor has real-world experience. They've managed people, they've managed systems. They've been in the trenches doing the work, and there's a lot of value to that.",
      },
      {
        q: "How has this training affected your department?",
        a: "We've been able to see real results in real time. Our operations specialist wanted to learn PowerShell. He learned the commands through StormWind's training, then applied them to deployment. We were able to use those things in real time. We saw a good return on investment.",
      },
      {
        q: "What did you think of the instructors and course experience?",
        a: "It's clear they're experts delivering real-world content, not just someone reading off a PowerPoint. This is a tool we're always going to use to find out the latest and greatest.",
      },
    ],
  },
  {
    id: "rosenblum",
    name: "IJ Rosenblum",
    image: ijRosenblum.url,
    role: "Director of IT",
    org: "SMG — Philadelphia Convention Center",
    location: "Philadelphia, PA",
    since: "Student since 2016",
    industry: "Venue Management",
    headline: "With StormWind, we're getting more bang for our buck.",
    quotes: [
      {
        q: "How did you hear about StormWind?",
        a: "We had been using a competitor at the time. Our StormWind reps provided a couple of sample courses for myself and my staff. When we looked at the combination of everything that was offered and the price, it was a little hard to pass up.",
      },
      {
        q: "How did StormWind compare to your previous training provider?",
        a: "I found the offering of classes to be more complete for what I was looking for — not just for myself, but for my staff as well. I could offer my Cisco and network staff courses like Microsoft server and desktop training, and vice versa. All of this was included in that same package. I was also able to start offering my staff management and non-technical training at the same time.",
      },
      {
        q: "What immediate results did you find?",
        a: "My staff and I have a better grasp of what we're asking consultants and integrators to help us with. We have a better idea on a day-to-day basis of problem solving, and how to do more of the work on our own.",
      },
      {
        q: "What's been your favorite thing about the courses?",
        a: "StormWind is a jack-of-all-trades training program. There is Windows desktop, server, and security. There's Cisco switching, design, voicemail systems — all of the different things that we end up doing on a day-to-day basis. Whether you're a small facility or a larger, more specialized one, there's something there for everyone.",
      },
      {
        q: "What advice would you have for other IT directors?",
        a: "With StormWind, we're getting more bang for our buck. Plus, you don't have to worry about missing a day. I've gone back into courses I've taken, missed a day or two, and been able to watch the video of that class. I could pick up at my own speed while still reading the dialogue from the class discussion.",
      },
      {
        q: "How did you find time to train?",
        a: "I can look at the course calendar ahead of time and find courses up to about three months out. I put it on my calendar and block time out. It's not like somebody comes up to you and says, \"Hey, we're sending you to an off-site course tomorrow through Thursday.\"",
      },
    ],
  },
];

const ROICaseStudies = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0].id);

  useEffect(() => {
    document.title = "Training ROI & Client Case Studies | StormWind Studios";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "See how StormWind training reclaims up to 12 hours per learner each month, and read case studies from IT leaders in education and venue management."
      );
    }
  }, []);

  return (
    <PageLayout
      title="ROI & Client Case Studies"
      description="Training's real cost is time — employee, manager, and opportunity. StormWind gives it back: not more training, but better training time, with more skill gained per hour."
      breadcrumbs={[{ label: "ROI & Case Studies" }]}
      titleIcon={TrendingUp}
      backgroundVariant="gradient"
      heroActions={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/training-samples">
              <FlaskConical className="mr-2 h-5 w-5" />
              Try Training Samples
            </Link>
          </Button>
        </div>
      }
    >
      {/* Section A — Time reclaimed */}
      <section className="mb-20 animate-fade-in">
        <div className="flex items-center gap-3 mb-3">
          <Clock className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Time reclaimed, hour by hour</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Four capabilities working together remove the recurring friction that quietly eats a
          training program: hunting for content, sitting through material you already know, and
          managers shepherding learners by hand.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="group p-6 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                <cap.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{cap.label}</h3>
              <p className="text-sm font-medium text-primary mb-3">{cap.solution}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {cap.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Solves: {cap.friction}
                </p>
                <p className="text-sm font-semibold text-primary">Saves {cap.hours}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
            Total time reclaimed
          </p>
          <p className="text-4xl font-bold text-primary mb-2">
            Up to 12 hours per learner, every month
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Not more training — better training time, with more skill gained per hour.
          </p>
        </div>

        <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-4xl">
          Time and productivity figures are industry estimates for a typical team and will vary by
          team size, role mix, program maturity, and blended labor rate. StormWind presents
          recovered training time as a conservative, defensible baseline — the capability and
          risk-reduction value of better-trained teams is additional.
        </p>
      </section>

      {/* Section B — Phishing program admin ROI */}
      <section className="mb-20 animate-fade-in">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Phishing program ROI for admins</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          A phishing program's real cost is administrator time. StormAI automates the campaigns,
          scoring, and follow-up that used to run three to five hours a month by hand — so your
          team manages outcomes instead of the platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300">
            <p className="text-4xl font-bold text-primary mb-2">~24 hrs</p>
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
              Admin time recovered per year
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Roughly two hours a month handed back to your security team, with no manual roster,
              scoring, or follow-up to run.
            </p>
          </div>
          <div className="p-8 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300">
            <p className="text-4xl font-bold text-primary mb-2">20–35% → 2–5%</p>
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
              Initial click rate vs. mature program
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The benchmark range many phishing simulation vendors report as a program matures.
            </p>
          </div>
          <div className="p-8 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300">
            <p className="text-4xl font-bold text-primary mb-2">40–50%</p>
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
              Fewer employees click in year one
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Organizations running continuous, adaptive simulations typically see click rates fall
              this far within the first year.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/phishing">See how StormAI Phishing works</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-4xl">
          Time and labor figures are conservative industry estimates for a typical organization and
          vary by team size, environment, program maturity, and sector. Administrative efficiency is
          presented as a defensible baseline; reduced phishing risk is additional value.
        </p>
      </section>

      {/* Section C — Case studies */}
      <section className="mb-16 animate-fade-in">
        <div className="flex items-center gap-3 mb-3">
          <Quote className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Client case studies</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          IT leaders describing, in their own words, what changed after switching to StormWind.
        </p>

        <Tabs value={activeCase} onValueChange={setActiveCase} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 h-auto gap-2 bg-transparent p-0 mb-8">
            {caseStudies.map((study) => (
              <TabsTrigger
                key={study.id}
                value={study.id}
                className="flex items-center gap-4 p-4 rounded-lg border-2 border-border bg-card data-[state=active]:border-primary/50 data-[state=active]:bg-card data-[state=active]:shadow-lg transition-all duration-300 h-auto justify-start text-left"
              >
                <img
                  src={study.image}
                  alt={`${study.name}, ${study.role}`}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                />
                <span className="min-w-0">
                  <span className="block font-semibold truncate">{study.name}</span>
                  <span className="block text-xs text-muted-foreground truncate">
                    {study.industry} · {study.location}
                  </span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {caseStudies.map((study) => (
            <TabsContent key={study.id} value={study.id} className="mt-0 animate-fade-in">
              <div className="p-8 rounded-lg border-2 border-border bg-card">
                <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                  <img
                    src={study.image}
                    alt={`Portrait of ${study.name}`}
                    loading="lazy"
                    className="w-28 h-28 rounded-xl object-cover border-2 border-primary/30 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{study.name}</h3>
                    <p className="text-primary font-medium mb-1">{study.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {study.org} · {study.location} · {study.since}
                    </p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-6 mb-8">
                  <p className="text-xl font-semibold italic leading-relaxed">
                    “{study.headline}”
                  </p>
                </blockquote>

                <div className="space-y-6">
                  {study.quotes.map((item, index) => (
                    <div key={index}>
                      <p className="font-semibold mb-2">{item.q}</p>
                      <p className="text-muted-foreground leading-relaxed">“{item.a}”</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-8">
                  Interview edited for length and clarity.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </PageLayout>
  );
};

export default ROICaseStudies;
