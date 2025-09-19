import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export function Hero() {
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-background');
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10" />
      <Image
        src={heroBg?.imageUrl || "https://picsum.photos/seed/anika-bg/1920/1080"}
        alt="Abstract background"
        fill
        className="object-cover"
        data-ai-hint={heroBg?.imageHint || "abstract watercolor"}
        priority
      />
      <div className="container relative z-20 flex flex-col items-center gap-6 px-4 md:px-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-primary-foreground">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczP7NIawPQ5fzu_mzD5CVGZP5o4lCb3cronA4xJUi2w_5oPK7TOVP8j7GVE1IJMeXx1eKIh6ToG7Z85Rk7s3xFnUVpY1i31AmqH71TUVeQiWXW-81WI8JI4Msz0sL-Gc9nbS0bQEv1PHcx_bTB0GiG9S-g=w256-h256-s-no-gm"
            alt="Anika Saima Tanisha"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-foreground">
          Anika Saima Tanisha
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Journalism Student, Storyteller, and Photographer. Capturing the narratives that shape our world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#portfolio">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
