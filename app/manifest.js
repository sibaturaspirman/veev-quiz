export default function manifest() {
    return {
      name: 'VEEV QUIZ',
      short_name: 'VEEV QUIZ',
      description: 'VEEV QUIZ',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
}