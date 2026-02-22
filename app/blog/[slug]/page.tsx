import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
    return {
        title: `${post.title} | IsJuanDev`,
        description: post.excerpt,
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
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: '1s' }}
                    />
                </div>

                <div className="container mx-auto relative z-10 max-w-3xl">
                    {/* Back button */}
                    <Button asChild variant="ghost" className="mb-8 gap-2 -ml-3">
                        <Link href="/blog">
                            <ArrowLeft className="h-4 w-4" />
                            Volver al blog
                        </Link>
                    </Button>

                    {/* Category + tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="default">{post.category}</Badge>
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {post.excerpt}
                    </p>

                    {/* Meta */}
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

            {/* Cover image placeholder */}
            <div className="px-4">
                <div className="container mx-auto max-w-3xl">
                    {post.image ? (
                        <div className="aspect-video rounded-xl overflow-hidden mb-12">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-12" />
                    )}
                </div>
            </div>

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
