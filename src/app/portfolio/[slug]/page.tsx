import { portfolioArticles } from '@/lib/portfolio-data';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function PortfolioArticlePage({ params }: { params: { slug: string } }) {
  const article = portfolioArticles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
            <div className="space-y-4 not-prose">
                <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-foreground">{article.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>By {article.author}</span>
                    <span>{article.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <p className="text-xl text-muted-foreground">{article.description}</p>
            </div>

            <div className="mt-8">
              {article.body.map((block, index) => {
                switch (block.type) {
                  case 'heading':
                    const Tag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
                    return <Tag key={index} className="font-headline">{block.content}</Tag>;
                  case 'paragraph':
                    return <p key={index}>{block.content}</p>;
                  case 'image':
                    return (
                      <div key={index} className="my-8 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={block.content}
                          alt={block.alt || article.title}
                          width={800}
                          height={500}
                          className="w-full object-cover"
                          data-ai-hint={block.imageHint}
                        />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(portfolioArticles).map((slug) => ({
    slug,
  }));
}
