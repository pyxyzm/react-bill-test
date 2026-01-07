import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
  // 删掉所有 server.proxy 配置（代理会触发 OSS 防盗链）
});