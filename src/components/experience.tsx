import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experienceData = [
  {
    company: "The Daily Star",
    role: "Intern, City Desk",
    years: "Summer 2023",
    details: "Assisted senior journalists with fact-checking, conducted preliminary interviews, and contributed several published articles on community events.",
  },
  {
    company: "Dhaka Kaleidoscope (Online Magazine)",
    role: "Freelance Content Writer",
    years: "2022 - Present",
    details: "Writes engaging articles on various cultural topics, including traditional Bangladeshi arts, emerging music scenes, and local culinary traditions.",
  },
  {
    company: "Radio Shadhin 92.4 FM",
    role: "Volunteer",
    years: "Community Engagement",
    details: "Assists with program production, scriptwriting for PSAs, and reporting on local community events. Actively promotes media literacy.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 animated-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Putting storytelling into practice through professional and volunteer work.
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experienceData.map((item, index) => (
            <Card key={index} className="h-full bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="font-headline">{item.company}</CardTitle>
                    <CardDescription>{item.role}</CardDescription>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.years}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-headline font-bold mb-4">Journalistic Philosophy</h3>
            <blockquote className="max-w-3xl mx-auto text-lg italic text-foreground border-l-4 border-primary pl-6 text-left">
            "I believe profoundly in the power of ethical, unbiased journalism to inform, challenge, and inspire positive societal change. I am committed to presenting balanced perspectives, giving voice to underrepresented communities, and holding power accountable through meticulous reporting."
            </blockquote>
        </div>
      </div>
    </section>
  );
}
