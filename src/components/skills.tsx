import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages, Brush, Terminal } from "lucide-react";

const skillsData = {
  languages: [
    "Bengali (Native)",
    "English (Fluent)",
    "Spanish",
    "French",
    "Arabic",
    "Hindi",
    "Malayalam",
    "Indonesian",
    "Vietnamese",
  ],
  technical: [
    "Journalistic Research & Interviewing",
    "Content Creation (Writing & Editing)",
    "Basic Audio/Video Editing",
    "Digital Publishing (WordPress, Medium)",
    "Basic Social Media Analytics",
    "Fact-checking",
  ],
  creative: [
    "Narrative Construction & Storytelling",
    "Compelling Headline Writing",
    "Color Theory & Composition (Painting)",
    "Photojournalism & Framing",
    "Digital Storytelling",
  ],
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 animated-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The tools and talents I use to craft compelling narratives.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Languages className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Terminal className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.technical.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Brush className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Creative Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.creative.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
