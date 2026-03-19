import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { researchPosts } from "@/data/research";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return researchPosts
    .filter((p) => p.published)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = researchPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Omer Coskun"],
    },
  };
}

export default function ResearchPostPage({ params }: Props) {
  const post = researchPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = researchPosts
    .filter((p) => p.published && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="pt-24">
      <Section>
        <article className="max-w-3xl mx-auto">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm text-viper-gray hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Research
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-viper-green/10 text-viper-green">
                {post.category}
              </span>
              <time className="text-sm text-viper-gray">{post.date}</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-sm text-viper-gray">
              By <span className="text-foreground">Omer Coskun</span>
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-viper-gray-light leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="rounded-lg border border-viper-dark-border bg-viper-dark-card p-8 text-center my-12">
              <p className="text-viper-gray font-mono text-sm">
                Full article coming soon.
              </p>
              <p className="text-xs text-viper-gray mt-2">
                This is a placeholder for the full research write-up.
              </p>
            </div>
          </div>
        </article>
      </Section>

      {relatedPosts.length > 0 && (
        <Section className="border-t border-viper-dark-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6">Related Research</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/research/${related.slug}`}
                  className="group rounded-lg border border-viper-dark-border bg-viper-dark-card p-4 transition-all hover:border-viper-green/30"
                >
                  <span className="text-xs font-mono text-viper-green">{related.category}</span>
                  <h3 className="text-sm font-semibold text-foreground mt-1 group-hover:text-viper-green transition-colors leading-snug">
                    {related.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-viper-green mt-2 group-hover:gap-1.5 transition-all">
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
