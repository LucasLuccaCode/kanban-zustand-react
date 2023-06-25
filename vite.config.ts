import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        'name': 'Kanban',
        'short_name': 'Kanban',
        'start_url': '/',
        'lang': 'pt-BR',
        'display': 'standalone',
        'background_color': '#161616',
        'description': 'Uma aplicação para gerenciamento de tarefas.',
        'icons': [
          {
            'src': 'icons/logo.png',
            'sizes': '32x32',
            'type': 'image/png'
          }
        ]
      }
    })
  ],
  base: '/'
})
