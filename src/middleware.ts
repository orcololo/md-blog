import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware((context, next) => {
  const response = next()

  return response.then((res) => {
    res.headers.set('Access-Control-Allow-Origin', '*')
    res.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    )
    res.headers.set('Access-Control-Allow-Headers', '*')
    res.headers.set('X-Content-Type-Options', 'nosniff')
    res.headers.set('X-Frame-Options', 'SAMEORIGIN')
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

    return res
  })
})
