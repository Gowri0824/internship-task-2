import { defineConfig } from 'vite';
import nunjucks from '@macropygia/vite-plugin-nunjucks';

export default defineConfig({
    plugins: [
        nunjucks({
            templatesDir: 'src/templates'
        })
    ]
});
