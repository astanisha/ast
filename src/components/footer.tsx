import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const socialLinks = [
  {
    href: 'https://facebook.com/anikasaimatanisha',
    src: 'https://img.icons8.com/color/48/facebook-new.png',
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/anikasaimatanisha',
    src: 'https://img.icons8.com/color/48/instagram-new--v1.png',
    alt: 'Instagram',
  },
  {
    href: 'https://www.pinterest.com/anikasaimatanisha',
    src: 'https://img.icons8.com/color/48/pinterest--v1.png',
    alt: 'Pinterest',
  },
  {
    href: 'https://github.com/RaisaAnika',
    src: 'https://img.icons8.com/ios-filled/50/000000/github.png',
    alt: 'GitHub',
  },
  {
    href: 'https://astanisha.web.app',
    src: 'https://img.icons8.com/ios-glyphs/30/000000/globe.png',
    alt: 'Blog/Portfolio',
  },
  {
    href: 'https://maps.app.goo.gl/h3boAmUELAorLtT26',
    src: 'https://img.icons8.com/ios-filled/50/marker.png',
    alt: 'Location',
  },
];

export function Footer() {
  const anikaProfilePic = PlaceHolderImages.find(
    p => p.id === 'anika-profile'
  );
  return (
    <footer id="contact" className="w-full border-t relative overflow-hidden">
        <Image
          src="https://picsum.photos/seed/contact-bg/1920/1080"
          alt="Abstract background for contact section"
          fill
          className="object-cover object-center"
          data-ai-hint="desk stationery"
        />
        <div className="absolute inset-0 animated-gradient bg-background/80 backdrop-blur-sm" />
        <div className="container relative z-10 py-12 px-4 md:px-6">
        <div className="bg-card/80 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-2xl border max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <Image
                    src={
                    anikaProfilePic?.imageUrl ||
                    'https://picsum.photos/seed/anika-profile/96/96'
                    }
                    alt="Anika Saima Tanisha"
                    width={96}
                    height={96}
                    className="rounded-full mb-4 shadow-lg"
                    data-ai-hint={anikaProfilePic?.imageHint || 'woman smiling'}
                />
                <h3
                    style={{
                    fontFamily:
                        "'Brush Script MT', 'Brush Script Std', 'Lucida Calligraphy', 'Lucida Handwriting', cursive",
                    }}
                    className="text-4xl text-primary leading-tight drop-shadow-md">
                    Anika Saima Tanisha
                </h3>
                <p className="mt-2 text-lg text-muted-foreground">
                    B.A. Journalism & Mass Communication
                </p>
                <p className="text-md text-muted-foreground">
                    University of Dhaka | Class of 2026
                </p>
            </div>

            <div className="flex flex-col items-center">
                 <h4 className="text-2xl font-headline mb-4 text-center">Get In Touch</h4>
                 <a
                  href="mailto:astanisha@duck.com"
                  className="text-lg text-green-800 font-bold hover:underline mb-6">
                  astanisha@duck.com
                </a>
                
                <div className="flex items-center gap-4">
                    {socialLinks.map(link => (
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={link.href}
                        className="transition-transform hover:scale-110 p-2 bg-background/50 rounded-full shadow-md">
                        <img
                        src={link.src}
                        width="24"
                        height="24"
                        alt={link.alt}
                        className={
                            link.alt === 'GitHub' ||
                            link.alt === 'Blog/Portfolio' ||
                            link.alt === 'Location'
                            ? 'dark:invert'
                            : ''
                        }
                        />
                    </a>
                    ))}
                </div>
            </div>

          </div>
        </div>
        <div className="text-center mt-12 text-sm text-background/80">
          <p>
            &copy; {new Date().getFullYear()} Anika Saima Tanisha. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
