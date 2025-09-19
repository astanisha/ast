import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const educationData = [
  {
    institution: "University of Dhaka",
    degree: "Bachelor of Arts in Journalism and Mass Communication",
    years: "2020 - 2026 (Expected)",
    details: "Consistently maintaining a strong academic record (CGPA of 3.85/4.00). Major projects include an investigative report on urban waste management and a documentary on street vendors.",
  },
  {
    institution: "Holy Cross College, Dhaka",
    degree: "Higher Secondary Certificate (HSC), Humanities",
    years: "2018 - 2020",
    details: "Achieved a GPA of 5.00 (Golden A+). Recognized for outstanding performance in English literature.",
  },
  {
    institution: "Viqarunnisa Noon School and College",
    degree: "Primary & Secondary School",
    years: "2007 - 2018",
    details: "Key member of the school's debate club and a regular contributor to the school magazine, 'Shishu Barta', which sparked her interest in journalism.",
  },
];

export function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <Image
        src="https://picsum.photos/seed/education-bg/1920/1080"
        alt="Abstract background for education section"
        fill
        className="object-cover"
        data-ai-hint="university campus"
      />
      <div className="absolute inset-0 animated-gradient bg-background/80 backdrop-blur-sm" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Education</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic journey in pursuit of knowledge and storytelling.
            </p>
          </div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 w-0.5 h-full bg-border -translate-x-1/2" />
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-12 mb-12">
               <div className="absolute -left-1.5 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-headline">{item.institution}</CardTitle>
                  <CardDescription>{item.degree} | {item.years}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
