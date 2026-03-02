import { SITE } from '@/consts'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getAllPosts } from '@/lib/data-utils'

export async function GET(context: APIContext) {
  try {
    const posts = await getAllPosts('pt')

    return rss({
      title: `${SITE.title} — Português`,
      description: SITE.description,
      site: context.site ?? SITE.href,
      items: posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/pt/blog/${post.id}/`,
      })),
    })
  } catch (error) {
    console.error('Erro ao gerar feed RSS:', error)
    return new Response('Erro ao gerar feed RSS', { status: 500 })
  }
}
