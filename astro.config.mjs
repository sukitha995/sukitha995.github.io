import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://sukitha995.github.io',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    icon({
      include: {
        lucide: [
          'mail',
          'menu',
          'x',
          'arrow-down',
          'arrow-up',
          'download',
          'external-link',
          'phone-call',
          'pie-chart',
          'heart-pulse',
          'utensils',
          'newspaper',
          'bar-chart-3',
          'graduation-cap',
          'trophy',
          'sparkles',
          'code-2',
          'layers',
          'cloud',
          'brain'
        ]
      }
    })
  ]
})