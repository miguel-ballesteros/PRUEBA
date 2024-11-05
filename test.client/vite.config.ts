import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/api/': {
        target: 'http://localhost:5000',
        secure: false,
        ws: true,
      }
    },
    port: 5173,
  },
  define: {
    // Some libraries use the global object, even though it doesn't exist in the browser.
    // Alternatively, we could add <script>window.global = window;</script> to index.html.
    // https://github.com/vitejs/vite/discussions/5912
    global: {},
  },

})
