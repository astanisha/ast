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
    <footer id="contact" className="bg-secondary/20 border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="max-w-md mx-auto bg-card p-4 sm:p-6 rounded-lg shadow-lg border">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src={
                  anikaProfilePic?.imageUrl ||
                  'https://picsum.photos/seed/anika-profile/96/96'
                }
                alt="Anika Saima Tanisha"
                width={70}
                height={70}
                className="rounded-full"
                data-ai-hint={anikaProfilePic?.imageHint || 'woman smiling'}
              />
            </div>
            <div className="border-l border-primary/50 pl-4 flex-grow">
              <p
                style={{
                  fontFamily:
                    "'Brush Script MT', 'Brush Script Std', 'Lucida Calligraphy', 'Lucida Handwriting', cursive",
                }}
                className="text-2xl text-violet-800 leading-tight">
                Anika Saima Tanisha
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                B.A. Journalism & Mass Communication
              </p>
              <p className="text-xs text-muted-foreground">
                University of Dhaka | Class of 2026
              </p>
              <p className="mt-2">
                <a
                  href="mailto:astanisha@duck.com"
                  className="text-sm text-accent hover:underline">
                  astanisha@duck.com
                </a>
              </p>
              <div className="mt-2 flex items-center gap-2">
                {socialLinks.map(link => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.href}
                    className="transition-transform hover:scale-110">
                    <img
                      src={link.src}
                      width="20"
                      height="20"
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
          <p className="max-w-md mx-auto mt-1">
            An elegant portfolio to showcase professional journey and skills.
          </p>
        </div>
      </div>
    </footer>
  );
}
