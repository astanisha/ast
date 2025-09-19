import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const portfolioData = [
  {
    id: "portfolio-waste",
    slug: "urban-waste-management",
    title: "Investigative Report: Urban Waste Management",
    description: "An in-depth look into the challenges and potential solutions for waste management in Dhaka.",
    tags: ["Investigative Journalism", "Social Justice"],
  },
  {
    id: "portfolio-vendors",
    slug: "resilience-of-street-vendors",
    title: "Documentary Short: The Resilience of Street Vendors",
    description: "A multimedia project capturing the daily struggles and perseverance of Dhaka's street vendors.",
    tags: ["Documentary", "Photojournalism"],
  },
  {
    id: "portfolio-arts",
    slug: "traditional-bangladeshi-arts",
    title: "Feature: Traditional Bangladeshi Arts",
    description: "An article exploring the rich history and modern revival of traditional arts and crafts in Bangladesh.",
    tags: ["Cultural Reporting", "Writing"],
  },
  {
    id: "portfolio-dhaka",
    slug: "expressions-of-dhaka",
    title: "Photo Essay: Expressions of Dhaka",
    description: "A collection of street photography that tells the stories of the people of Dhaka through their expressions.",
    tags: ["Photography", "Storytelling"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <Image
        src="https://picsum.photos/seed/portfolio-bg/1920/1080"
        alt="Abstract background for portfolio section"
        fill
        className="object-cover object-center"
        data-ai-hint="art gallery"
      />
      <div className="absolute inset-0 animated-gradient bg-background/80 backdrop-blur-sm" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Portfolio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work in journalism, writing, and photography.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.map((item) => {
            const imageData = PlaceHolderImages.find(p => p.id === item.id);
            return (
              <Link href={`/portfolio/${item.slug}`} key={item.id} className="group block">
                <Card className="overflow-hidden h-full flex flex-col transition-all group-hover:shadow-xl group-hover:-translate-y-1 bg-card/95 backdrop-blur-sm">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={imageData?.imageUrl || 'https://picsum.photos/600/400'}
                      alt={item.title}
                      fill
                      className="object-cover"
                      data-ai-hint={imageData?.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex-wrap gap-2">
                    {item.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                     <ArrowUpRight className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
