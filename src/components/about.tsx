import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Camera, Heart, Lightbulb, MapPin, Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 animated-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A curious and empathetic storyteller with a passion for truth and social awareness.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Heart className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Interests & Personality</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Reading classic literature, watercolor painting of Dhaka's daily life, experimenting with Bangladeshi recipes, and street photography focusing on human expressions. Highly curious, creative, empathetic, and observant.
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Values & Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              "Knowledge is meant to be shared, and kindness is its best expression. Stories connect us, and truth empowers us, especially for those whose voices are often unheard."
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Quote className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Favorite Quote</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              "The more I learn, the more I realize how much I don't know." - A reflection of her continuous quest for understanding.
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Favorite Subjects</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Investigative journalism (social justice), media ethics, digital storytelling, photojournalism, and cultural anthropology of urban Bangladesh.
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <MapPin className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Favorite Places</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              The dusty sections of Nilkhet book market, quiet tea stalls in Old Dhaka for observing life, and the vibrant chaos of Karwan Bazar wholesale market.
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Camera className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Community</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Volunteers at Radio Shadhin 92.4 FM, promotes media literacy, and maintains a personal blog with photography and cultural essays.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
