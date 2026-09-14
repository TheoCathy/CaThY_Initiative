import {
  Code2,
  Palette,
  Search,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export const ROLES = [
  {
    id: "builder",
    codename: "THE BUILDER",
    job: "Software Developer",
    icon: Code2,
    tagline: "Writes the code. Builds the fix.",
    brief:
      "The homepage is broken. Find the 3 log lines that show what the hacker actually did.",
    avatarAccent: "#6366F1",
    info: {
      does: "Writes the code that builds and runs the apps and sites you use every day — from TikTok to your school portal.",
      gcse: "Computer Science, Maths",
      path: "A-levels in Computer Science/Maths → a Computer Science degree, OR a Software Engineering Degree Apprenticeship (earn while you train, no student debt).",
      pay: ["£24,000 – £32,000", "£45,000 – £65,000+"],
      demand:
        "One of the most in-demand roles in the UK — nearly every industry needs developers, not just tech companies.",
      next: "Try a free intro to coding on Scratch or code.org.",
    },
  },
  {
    id: "designer",
    codename: "THE DESIGNER",
    job: "UX / UI Designer",
    icon: Palette,
    tagline: "Makes people trust it again.",
    brief:
      "The app is fixed. Now design the moment that makes everyone trust it again.",
    avatarAccent: "#EC4899",
    info: {
      does: "Decides how an app or website feels to use — why a button feels satisfying to press, or why an app is easy to navigate.",
      gcse: "Art & Design, Computer Science",
      path: "A-level Art/Graphics helps but isn't essential → a UX bootcamp, or a degree in Design, Psychology or Computer Science.",
      pay: ["£22,000 – £28,000", "£45,000 – £70,000+"],
      demand:
        "Growing fast — every company with an app or website needs someone thinking about the user's experience.",
      next: "Try redesigning one app icon or screen you use daily, just for fun.",
    },
  },
  {
    id: "detective",
    codename: "THE DETECTIVE",
    job: "Data Analyst",
    icon: Search,
    tagline: "Finds the story in the numbers.",
    brief:
      "Somewhere in this login data is the evidence. Find the row that doesn't belong.",
    avatarAccent: "#F59E0B",
    info: {
      does: "Finds the story hidden in numbers — like why your For You page seems to know you too well.",
      gcse: "Maths, Computer Science",
      path: "A-level Maths (strongly recommended) → a degree in Maths, Computer Science, Economics or Data Science, or a Data Analyst apprenticeship.",
      pay: ["£23,000 – £26,000", "£35,000 – £50,000+"],
      demand:
        "High and rising — nearly every sector (health, sport, retail, government) now hires data analysts.",
      next: "Try a free beginner course in Excel or Google's Data Analytics course.",
    },
  },
  {
    id: "guardian",
    codename: "THE GUARDIAN",
    job: "Cyber Security Analyst",
    icon: ShieldCheck,
    tagline: "Thinks like a hacker. Works for the good guys.",
    brief: "Two of these six emails let the hacker in. Spot the fakes.",
    avatarAccent: "#10B981",
    info: {
      does: "Thinks like a hacker — but works for the good guys, so the hackers lose. Spots threats before they cause damage.",
      gcse: "Computer Science, Maths",
      path: "A-levels in Computer Science/Maths, or a Cyber Security Apprenticeship. Certifications (like CompTIA Security+) matter as much as a degree here.",
      pay: ["£25,000 – £35,000", "£45,000 – £80,000+"],
      demand:
        "Very high — the UK has an ongoing shortage of skilled cyber professionals, so this field genuinely needs more people.",
      next: "Try the free CyberFirst courses from the National Cyber Security Centre (built for students).",
    },
  },
  {
    id: "storyteller",
    codename: "THE STORYTELLER",
    job: "Product / Tech Communicator",
    icon: MessageSquare,
    tagline: "Translates tech into human.",
    brief:
      "Parents are worried. Pick the sentence that tells them the truth without causing panic.",
    avatarAccent: "#06B6D4",
    info: {
      does: "Translates between the people who build the tech and the humans who use it — writing the words that explain what's happening and why it matters.",
      gcse: "English, Media Studies, Computer Science",
      path: "A-level English/Media helps → a degree in English, Communications, Journalism or Marketing, or a Marketing/Content apprenticeship.",
      pay: ["£24,000 – £27,000", "£35,000 – £56,000+"],
      demand:
        "Growing — as tech products multiply, companies need people who can explain them clearly to non-technical audiences.",
      next: "Try writing a 3-sentence explanation of any app for someone who's never used a smartphone.",
    },
  },
];

export function getRole(id) {
  return ROLES.find((r) => r.id === id);
}
