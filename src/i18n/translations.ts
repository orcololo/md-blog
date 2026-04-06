export const languages = {
  en: 'English',
  pt: 'Português',
} as const

export type Lang = keyof typeof languages
export const defaultLang: Lang = 'en'

export const translations = {
  en: {
    // Nav
    'nav.blog': 'blog',
    'nav.authors': 'authors',
    'nav.about': 'about',

    // Home
    'home.latestPosts': 'Latest Posts',
    'home.viewAll': 'View all posts',
    'home.ctaAbout': 'About me',
    'home.bio':
      'Writing about programming, technology, and whatever catches my curiosity.',

    // Blog
    'blog.title': 'Blog',
    'blog.page': 'Page',

    // About
    'about.title': 'About',
    'about.intro': "Hey, I'm",
    'about.description':
      '— a developer passionate about building things for the web.',
    'about.bio':
      'I write about programming, technology, and whatever catches my curiosity. This is my corner of the internet where I share what I learn along the way.',
    'about.builtWith': 'Built with',
    'about.projects': 'Projects',

    // 404
    '404.error': 'Error 404: page not found',
    '404.description':
      "The page you were looking for doesn't exist or has been moved.",
    '404.backHome': 'Back to home',
    '404.viewBlog': 'View blog',

    // Authors
    'authors.title': 'Authors',
    'authors.none': 'No authors found.',
    'authors.author': '(Author)',
    'authors.profileOf': 'Profile of',
    'authors.postsBy': 'Posts by',
    'authors.noPosts': 'No posts available from this author.',
    'authors.avatarOf': 'Avatar of',

    // Tags
    'tags.title': 'Tags',
    'tags.postsTagged': 'Posts tagged with',
    'tags.collection': 'A collection of posts tagged with',

    // Post
    'post.total': 'total',
    'post.subpost': 'subpost',
    'post.subposts': 'subposts',
    'post.scrollToTop': 'Scroll to top',

    // Navigation
    'nav.previousSubpost': 'Previous Subpost',
    'nav.previousPost': 'Previous Post',
    'nav.nextSubpost': 'Next Subpost',
    'nav.nextPost': 'Next Post',
    'nav.parentPost': 'Parent Post',
    'nav.noOlderSubpost': 'No older subpost',
    'nav.oldestPost': "You're at the oldest post!",
    'nav.noNewerSubpost': 'No newer subpost',
    'nav.newestPost': "You're at the newest post!",
    'nav.noParentPost': 'No parent post',

    // TOC
    'toc.overview': 'Overview',
    'toc.tableOfContents': 'Table of Contents',
    'toc.subposts': 'Subposts',

    // Theme
    'theme.toggle': 'Toggle theme',

    // RSS
    'rss.error': 'Error generating RSS feed',
  },
  pt: {
    // Nav
    'nav.blog': 'blog',
    'nav.authors': 'autores',
    'nav.about': 'sobre',

    // Home
    'home.latestPosts': 'Últimos Posts',
    'home.viewAll': 'Ver todos os posts',
    'home.ctaAbout': 'Sobre mim',
    'home.bio':
      'Escrevendo sobre programação, tecnologia e o que mais me der curiosidade.',

    // Blog
    'blog.title': 'Blog',
    'blog.page': 'Página',

    // About
    'about.title': 'Sobre',
    'about.intro': 'E aí, eu sou',
    'about.description':
      '— um desenvolvedor apaixonado por construir coisas para a web.',
    'about.bio':
      'Escrevo sobre programação, tecnologia e o que mais me der curiosidade. Esse é meu cantinho da internet onde compartilho o que aprendo pelo caminho.',
    'about.builtWith': 'Feito com',
    'about.projects': 'Projetos',

    // 404
    '404.error': 'Erro 404: página não encontrada',
    '404.description': 'A página que você procura não existe ou foi movida.',
    '404.backHome': 'Voltar ao início',
    '404.viewBlog': 'Ver blog',

    // Authors
    'authors.title': 'Autores',
    'authors.none': 'Nenhum autor encontrado.',
    'authors.author': '(Autor)',
    'authors.profileOf': 'Perfil de',
    'authors.postsBy': 'Posts de',
    'authors.noPosts': 'Nenhum post disponível deste autor.',
    'authors.avatarOf': 'Avatar de',

    // Tags
    'tags.title': 'Tags',
    'tags.postsTagged': 'Posts com a tag',
    'tags.collection': 'Uma coleção de posts com a tag',

    // Post
    'post.total': 'total',
    'post.subpost': 'subpost',
    'post.subposts': 'subposts',
    'post.scrollToTop': 'Voltar ao topo',

    // Navigation
    'nav.previousSubpost': 'Subpost Anterior',
    'nav.previousPost': 'Post Anterior',
    'nav.nextSubpost': 'Próximo Subpost',
    'nav.nextPost': 'Próximo Post',
    'nav.parentPost': 'Post Principal',
    'nav.noOlderSubpost': 'Sem subpost anterior',
    'nav.oldestPost': 'Você está no post mais antigo!',
    'nav.noNewerSubpost': 'Sem próximo subpost',
    'nav.newestPost': 'Você está no post mais recente!',
    'nav.noParentPost': 'Sem post principal',

    // TOC
    'toc.overview': 'Visão Geral',
    'toc.tableOfContents': 'Índice',
    'toc.subposts': 'Subposts',

    // Theme
    'theme.toggle': 'Alternar tema',

    // RSS
    'rss.error': 'Erro ao gerar feed RSS',
  },
} as const
