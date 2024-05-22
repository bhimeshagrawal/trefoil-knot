import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/trefoil-knot/',
    plugins: [glsl()]
});