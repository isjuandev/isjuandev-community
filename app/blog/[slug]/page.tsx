import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { blogPosts, formatDate } from '@/lib/data/content'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) return {}
    const url = `https://isjuandev.com/blog/${post.slug}`
    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            type: 'article',
            title: post.title,
            description: post.excerpt,
            url,
            siteName: 'IsJuanDev',
            locale: 'es_ES',
            publishedTime: post.date,
            authors: ['IsJuanDev'],
            tags: post.tags,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) notFound()

    const paragraphs = post.body.split('\n\n').filter(Boolean)

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero */}
            <section className="section" data-line="post">
                <div className="container mx-auto max-w-3xl">
                    <Button asChild variant="ghost" className="mb-8 gap-2 -ml-3">
                        <Link href="/blog">
                            <ArrowLeft className="h-4 w-4" />
                            Volver al blog
                        </Link>
                    </Button>

                    <div className="section-label">{post.category.toLowerCase().replace(/\s+/g, '.')}.nota</div>

                    <h1 className="font-display font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mb-6">
                        {post.title}<span className="text-primary">.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {post.readTime} min de lectura
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.date)}
                        </span>
                    </div>
                </div>
            </section>

            {/* Article body */}
            <article className="px-4 pb-24">
                <div className="container mx-auto max-w-3xl">
                    <div className="space-y-6 text-base sm:text-lg leading-relaxed text-foreground/90">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-muted-foreground text-sm">
                            ¿Te gustó este artículo? Compártelo con alguien que lo necesite.
                        </p>
                        <Button asChild variant="outline" className="gap-2">
                            <Link href="/blog">
                                <ArrowLeft className="h-4 w-4" />
                                Ver todos los artículos
                            </Link>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    )
}