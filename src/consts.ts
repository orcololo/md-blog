import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Orcololo',
  description:
    'Just a blog about programming, technology, and other things that interest me.',
  href: 'https://orcololo.vercel.app',
  author: 'orcololo',
  locale: 'en-US',
  featuredPostCount: 3,
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

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
