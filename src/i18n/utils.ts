import { translations, defaultLang, type Lang } from './translations'

/**
 * Extract the language from the current URL path.
 * If the path starts with a known locale prefix (e.g. /pt/), return that locale.
 * Otherwise, return the default language.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/')
  if (lang in translations) return lang as Lang
  return defaultLang
}

/**
 * Returns a translation function for the given language.
 */
export function useTranslations(lang: Lang) {
  return function t(
    key: keyof (typeof translations)[typeof defaultLang],
  ): string {
    return translations[lang]?.[key] ?? translations[defaultLang][key]
  }
}

/**
 * Get the localized path for a given path.
 * For the default language (en), paths have no prefix.
 * For other languages, the locale is prepended.
 */
export function getLocalePath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (lang === defaultLang) return cleanPath
  return `/${lang}${cleanPath}`
}

/**
 * Get the path to switch to the other language.
 * Strips or adds the locale prefix as needed.
 */
export function getLanguageSwitchPath(url: URL): string {
  const currentLang = getLangFromUrl(url)

  if (currentLang === defaultLang) {
    // Switch to Portuguese: add /pt/ prefix
    return `/pt${url.pathname}`
  }

  // Switch to English: remove the /pt prefix
  const pathWithoutLang = url.pathname.replace(/^\/pt/, '') || '/'
  return pathWithoutLang
}

/**
 * Get the label for the language switch button (shows the OTHER language).
 */
export function getLanguageSwitchLabel(url: URL): string {
  const currentLang = getLangFromUrl(url)
  return currentLang === 'en' ? 'PT' : 'EN'
}
