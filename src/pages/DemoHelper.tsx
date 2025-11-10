import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { 
  ChevronLeft,
  ChevronRight,
  CheckCircle2, 
  AlertCircle,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import stormwindLogo from "@/assets/stormwind-logo.png";

interface DemoStep {
  id: string;
  phase: 'discovery' | 'navigation' | 'close';
  icon: string;
  title: string;
  tag: string;
  description: string;
  keyActions: string[];
  proTips?: string[];
  talkTracks?: string[];
  triggers?: string[];
}

const demoSteps: DemoStep[] = [
  {
    id: "discovery-1",
    phase: "discovery",
    icon: "🎯",
    title: "Discovery & Understanding",
    tag: "Ask Questions",
    description: "Start by understanding their current training situation, team size, and specific challenges. Take notes on what technologies they use and what certifications or skills they're targeting.",
    keyActions: [
      "Ask what training tools they currently use (if any)",
      "Find out team size and roles (IT, developers, helpdesk, etc.)",
      "Identify specific technologies they work with (Microsoft, AWS, Cisco, etc.)",
      "Ask about upcoming certifications or skill goals"
    ],
    proTips: [
      "Build rapport and avoid playing 20 questions, you don't need to get all the info up front",
      "If they mention specific cert exams, write them down",
      "LISTEN CLOSELY and focus on understanding what they are saying, this is ESSENTIAL for running an effective demo."
    ],
    talkTracks: [
      "What do you think we can do to help when it comes to training?",
      "Are there any specific certifications your team is working toward?",
      "What's the biggest challenge with your current training approach?",
      "How many people would be using the platform?"
    ]
  },
  {
    id: "discovery-2",
    phase: "discovery",
    icon: "🔀",
    title: "Prioritize If Multiple Interests",
    tag: "Stay Focused",
    description: "If they mention several different areas (Enterprise IT training, Phishing awareness, Compliance training, etc.), help them pick the top priority for this demo so you can show real depth.",
    keyActions: [
      "List out all the areas they mentioned",
      "Ask which one is most urgent or impactful",
      "Commit to focusing the demo on that area",
      "Offer to schedule a follow-up for other areas"
    ],
    proTips: [
      "Better to go deep on 1-2 areas than shallow on 5+",
      "Book the follow-up demo right now while you have momentum",
      "It is okay to set the expectation that we can't cover everything in our offering in one 30 minute call"
    ],
    talkTracks: [
      "I heard you mention [list areas]. Which one would have the biggest impact for your team right now?",
      "Let's focus this demo on [priority area], and I can show you [other areas] in a quick follow-up session.",
      "Would next week work for a 20-minute follow-up on [other topics]?"
    ]
  },
  {
    id: "nav-1",
    phase: "navigation",
    icon: "⚙️",
    title: "Select Technologies & Platform Features",
    tag: "Build Demo",
    description: "On the StormWind homepage, select the technology tiles and platform features that match what they told you in discovery. This builds your custom demo.",
    keyActions: [
      "Click relevant technology tiles based on discovery notes (Microsoft, Cloud, Cybersecurity, etc.)",
      "Select platform features - easiest: click 'Select All' button",
      "Or hand-pick features based on their pain points",
      "Say out loud why you're selecting each one"
    ],
    proTips: [
      "These selections will auto-open in tabs in the next step",
      "This shows them you were listening and customizing for them",
      "If in doubt, just click 'Select All' for features"
    ],
    talkTracks: [
      "Based on what you told me about [specific tech], I'm selecting [technology]...",
      "Since you mentioned [pain point], I want to make sure we cover [specific feature]...",
      "Let me build a custom demo based on your needs..."
    ]
  },
  {
    id: "nav-3",
    phase: "navigation",
    icon: "🚀",
    title: "Launch Your Custom Demo Tabs",
    tag: "Open Links",
    description: "Click 'Submit Selection' and then 'Open All Links' - this will open all your selected pages in new tabs. Now you have a personalized demo ready to go.",
    keyActions: [
      "Click the 'Submit Selection' button",
      "Click 'Open All Links' button on the results page",
      "All your selected pages open in separate tabs automatically"
    ],
    proTips: [
      "Close any tabs you won't use to avoid confusion",
      "Keep this Demo Helper visible on a second monitor"
    ],
    talkTracks: [
      "Let me open up everything we discussed...",
      "This will create a custom tour based on your needs...",
      "Give me one second to organize these tabs..."
    ]
  },
  {
    id: "nav-4",
    phase: "navigation",
    icon: "🎯",
    title: "Tour Tabs & Deep Dive When Interest Shows",
    tag: "Navigate & Engage",
    description: "Click through tabs giving quick context (15-30 seconds each). When the client shows interest OR you know from discovery a tab is critical for them, STOP immediately and deep dive on that tab for 3-5 minutes before moving to the next one.",
    keyActions: [
      "Start clicking through tabs, briefly explaining each one",
      "Watch for client reactions: questions, leaning forward, or engagement",
      "STOP and deep dive immediately when you see interest or hit a priority topic",
      "Spend 3-5 minutes showing specific examples and clicking through features",
      "After deep dive, continue with remaining tabs using the same approach"
    ],
    proTips: [
      "Deep dive on 2-3 tabs maximum - quality over quantity",
      "If they seem bored with a topic, move on quickly (10-15 seconds max)",
      "Use your discovery notes to predict which tabs deserve deep dives",
      "It's okay to skip tabs entirely if they're not relevant"
    ],
    talkTracks: [
      "Here's [feature] - this is what your team would see...",
      "This relates to [something from discovery] - want to see more detail here?",
      "Since you mentioned [pain point], let me show you how this works in detail...",
      "I'll quickly show the others unless something catches your eye..."
    ]
  },
  {
    id: "close-1",
    phase: "close",
    icon: "🔍",
    title: "Deep Dive Guide (Use During Tour)",
    tag: "Show Details",
    description: "When you stop to deep dive during the tab tour, spend 3-5 minutes showing specific examples and clicking through features. This card provides deep dive triggers and talk tracks to use in the moment.",
    keyActions: [
      "Show actual content, not just overview pages",
      "Click into specific courses, labs, or reports",
      "Open a course from the technology the prospect is most interested in and explain how our courses work/look",
      "Use real examples: 'Here's what your Azure admin would see...'",
      "Demonstrate 2-3 specific features before moving to the next tab"
    ],
    proTips: [
      "Common deep dive areas: Ranges (hands-on labs), Learning Paths (cert prep), Enterprise Reporting (tracking)",
      "Show specific examples rather than explaining broadly",
      "If they mention a specific certification, show that exact learning path",
      "After deep dive, return to the tab tour unless they want to continue exploring"
    ],
    triggers: [
      "If they said 'need hands-on practice' → Show a Range lab in detail, click through the environment",
      "If they said 'preparing for certifications' → Open a specific Learning Path for their cert",
      "If they said 'need to track progress' → Show the Enterprise Reporting dashboard with real data",
      "If they said 'team doesn't have time' → Show Bytes (microlearning) and how quick each lesson is",
      "If they said 'want instructor support' → Show Live Courses schedule and Mentoring options"
    ],
    talkTracks: [
      "You mentioned [their pain point] - let me show you exactly how this solves that...",
      "Here's what your [specific role] would see when they open this...",
      "This is a real [Azure/Security/etc.] lab - click here and you're in a live environment...",
      "Notice how [specific feature] directly addresses the [problem they mentioned]..."
    ]
  },
  {
    id: "close-2",
    phase: "close",
    icon: "📊",
    title: "Recap What You Showed",
    tag: "Summarize",
    description: "Quickly summarize the 2-3 key things you showed that match their specific needs. Use their exact words from the discovery phase to connect the dots.",
    keyActions: [
      "Reference your discovery notes",
      "Summarize: 'So we covered [area 1], [area 2], and [area 3]'",
      "Connect each area back to their specific situation",
      "Confirm they saw what they needed: 'Did this address your questions about [topic]?'"
    ],
    proTips: [
      "Keep it brief - 60-90 seconds max",
      "Use the same words they used in discovery",
      "Example: If they said 'team struggling with Azure', say 'This gives your team the Azure training they need'"
    ],
    talkTracks: [
      "So we looked at [features shown] based on your need for [their goals]...",
      "You mentioned [their pain point] earlier - we showed how [feature] solves that with [specific example]...",
      "The key things for your team are [benefit 1], [benefit 2], and [benefit 3]...",
      "Did what I showed you address your main concerns about [topic they asked about]?"
    ]
  },
  {
    id: "close-3",
    phase: "close",
    icon: "💰",
    title: "Pricing",
    tag: "Discuss Investment",
    description: "Transition to pricing discussion after demonstrating value. Connect pricing to their specific team size and the features they showed most interest in during the demo.",
    keyActions: [
      "Ask about their team size if not already discussed",
      "Explain pricing is based on number of users",
      "Highlight the features they showed most interest in",
      "Address budget questions openly and honestly"
    ],
    proTips: [
      "Lead with value, not price - remind them of the specific problems this solves",
      "If they have budget concerns, focus on ROI and cost of NOT training",
      "Be prepared to discuss payment terms and contract length"
    ],
    talkTracks: [
      "Let's talk about what this would look like for your team...",
      "Our pricing is straightforward - it's based on the number of users you have...",
      "For a team of [size], you'd be looking at [pricing tier]...",
      "Given what you saw today, especially [feature they liked], does this fit within your budget?",
      "What kind of budget are you working with for training this year?"
    ]
  },
  {
    id: "close-4",
    phase: "close",
    icon: "✅",
    title: "Agree on Next Steps",
    tag: "Schedule Follow-Up",
    description: "Don't end the call without a clear next step. Book a follow-up meeting, schedule a trial setup call, or get commitment on when you'll talk again.",
    keyActions: [
      "Ask: 'What makes sense as a next step?'",
      "Offer specific options: trial setup, pricing call, deeper dive on another topic",
      "Book the next meeting RIGHT NOW before ending the call",
      "Send calendar invite while still on the call"
    ],
    proTips: [
      "Suggest a specific date/time - don't leave it vague",
      "If they need to involve others, ask when you can present to them",
      "Keep follow-up calls focused and brief - 20-30 minutes max"
    ],
    talkTracks: [
      "What would you like to do as a next step?",
      "Would it make sense to schedule a quick call to cover [other topic they mentioned]?",
      "When would be a good time to walk through pricing options for your team size?",
      "I have availability on [specific dates] - does [specific time] work for a follow-up?",
      "Let me send you a calendar invite right now while we're on the call...",
      "Who else from your team should I include in our next conversation?"
    ]
  }
];

const DemoHelper = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    document.title = "Demo Helper";
  }, []);

  const currentStep = demoSteps[currentStepIndex];

  const goToNext = () => {
    if (currentStepIndex < demoSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const goToStep = (stepId: string) => {
    const index = demoSteps.findIndex(s => s.id === stepId);
    if (index !== -1) {
      setCurrentStepIndex(index);
    }
  };

  const getPhaseBadgeColor = (stepId: string) => {
    // Blue for nav-1 (Select Technologies & Platform Features)
    if (stepId === 'nav-1') {
      return 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    }
    // Green for deep dive step
    if (stepId === 'close-1') {
      return 'bg-accent-green/20 text-primary dark:bg-accent-green/10 border-accent-green/30';
    }
    // Default colors for other steps
    const step = demoSteps.find(s => s.id === stepId);
    if (!step) return '';
    
    switch (step.phase) {
      case 'discovery':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'navigation':
        return 'bg-accent-green/20 text-primary dark:bg-accent-green/10 border-accent-green/30';
      case 'close':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <img 
            src={stormwindLogo} 
            alt="StormWind Studios" 
            className="h-10 object-contain cursor-pointer" 
            onClick={() => navigate('/')}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Demo Navigation Guide
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Your step-by-step playbook for delivering compelling StormWind demos. Follow the flow, hit the key points, and close with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Card Selector and Navigation */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm font-medium whitespace-nowrap">Select Step:</span>
                <Select value={currentStep.id} onValueChange={goToStep}>
                  <SelectTrigger className="w-full sm:w-[400px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    {demoSteps.map((step) => (
                      <SelectItem key={step.id} value={step.id}>
                        {step.icon} {step.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrevious}
                  disabled={currentStepIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground px-2">
                  {currentStepIndex + 1} / {demoSteps.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  disabled={currentStepIndex === demoSteps.length - 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Single Card */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="transition-all duration-300 shadow-card-hover">
              <CardHeader>
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-5xl">{currentStep.icon}</span>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3">{currentStep.title}</CardTitle>
                    <Badge className={`${getPhaseBadgeColor(currentStep.id)} text-sm`}>
                      {currentStep.tag}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {currentStep.description}
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Key Actions
                  </p>
                  {currentStep.keyActions.map((action, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-base">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>

                {currentStep.proTips && currentStep.proTips.length > 0 && (
                  <div className="pt-6 border-t border-border space-y-3">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Pro Tips
                    </p>
                    {currentStep.proTips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-base bg-muted/50 p-3 rounded-lg">
                        <span className="text-primary font-bold">💡</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                )}

                {currentStep.talkTracks && currentStep.talkTracks.length > 0 && (
                  <div className="pt-6 border-t border-border space-y-3">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Talk Tracks
                    </p>
                    {currentStep.talkTracks.map((track, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-base bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                        <span className="text-primary font-bold">💬</span>
                        <span className="italic">"{track}"</span>
                      </div>
                    ))}
                  </div>
                )}

                {currentStep.triggers && currentStep.triggers.length > 0 && (
                  <div className="pt-6 border-t border-border space-y-3">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Deep Dive Triggers
                    </p>
                    {currentStep.triggers.map((trigger, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-base bg-accent-green/10 p-3 rounded-lg border-l-4 border-accent-green">
                        <span className="font-bold">→</span>
                        <span>{trigger}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StormWind Studios. Internal Sales Tool - Confidential</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoHelper;
