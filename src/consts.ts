import type { IconMap, SocialLink, Site } from '@/types'
import type { Lang } from '@/i18n/translations'

export const SITE: Site = {
  title: 'Orcololo',
  description:
    'Just a blog about programming, technology, and other things that interest me.',
  href: 'https://orcololo.vercel.app',
  author: 'orcololo',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const NAV_LINKS_PT: SocialLink[] = [
  {
    href: '/pt/blog',
    label: 'blog',
  },
  {
    href: '/pt/authors',
    label: 'autores',
  },
  {
    href: '/pt/about',
    label: 'sobre',
  },
]

export function getNavLinks(lang: Lang): SocialLink[] {
  return lang === 'pt' ? NAV_LINKS_PT : NAV_LINKS
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/orcololo',
    label: 'GitHub',
  },
  {
    href: 'mailto:rhi.castro@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/rhian-castro',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

/**
 * Set to an object to show an announcement bar.
 * Set to null to hide it.
 */
export const ANNOUNCEMENT: { text: string; href: string } | null = {
  text: 'New post: Mobile Navigation & Subposts',
  href: '/blog/mobile-nav-and-subposts',
}

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
