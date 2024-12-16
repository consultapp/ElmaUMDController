import { defineConfig } from 'vite'

const libName = 'ElmaUMDController'
const useHash = false

export default defineConfig({
  plugins: [],
  define: {
    'process.env': { NODE_ENV: 'production' },
  },

  build: {
    lib: {
      entry: './src/ElmaUMDController.ts',
      name: libName,
      formats: ['umd'],
      fileName: (format) =>
        `${libName}${useHash ? '-[hash]' : ''}.${format}.js`,
    },
  },
})
