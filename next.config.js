const API_URL = "https://api.themoviedb.org/3/movie"
const API_KEY = process.env.API_KEY;
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `${API_URL}/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies:id',
        destination: `${API_URL}/:id?api_key=${API_KEY}`,
      },
    ]
  },
}
