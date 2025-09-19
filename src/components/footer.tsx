import Image from 'next/image';
import Link from 'next/link';
import {PlaceHolderImages} from '@/lib/placeholder-images';

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
    <footer id="contact" className="bg-background border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-lg border">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0">
              <Image
                src={
                  anikaProfilePic?.imageUrl ||
                  'https://picsum.photos/seed/anika-profile/96/96'
                }
                alt="Anika Saima Tanisha"
                width={96}
                height={96}
                className="rounded-full border-4 border-secondary"
                data-ai-hint={anikaProfilePic?.imageHint || 'woman smiling'}
              />
            </div>
            <div className="flex-grow text-center sm:text-left border-t sm:border-t-0 sm:border-l border-border pt-6 sm:pt-0 sm:pl-8 w-full">
              <p
                style={{
                  fontFamily:
                    "'Brush Script MT', 'Brush Script Std', 'Lucida Calligraphy', 'Lucida Handwriting', cursive",
                }}
                className="text-3xl text-primary leading-tight">
                Anika Saima Tanisha
              </p>
              <p className="mt-1 text-base text-muted-foreground">
                B.A. Journalism & Mass Communication
              </p>
              <p className="text-sm text-muted-foreground">
                University of Dhaka | Class of 2026
              </p>
              <p className="mt-2">
                <a
                  href="mailto:astanisha@duck.com"
                  className="text-base text-accent hover:underline">
                  astanisha@duck.com
                </a>
              </p>
              <div className="mt-4 flex justify-center sm:justify-start gap-3">
                {socialLinks.map(link => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.href}
                    className="transition-transform hover:scale-110">
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
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anika Saima Tanisha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
