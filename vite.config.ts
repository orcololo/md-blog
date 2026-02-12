import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    cors: true,
    allowedHosts: [
      '.tucujulabs.com',
      'vwww84ckc08owskcwcgksc8k.tucujulabs.com',
    ],
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    cors: true,
    allowedHosts: [
      '.tucujulabs.com',
      'vwww84ckc08owskcwcgksc8k.tucujulabs.com',
    ],
  },
})
