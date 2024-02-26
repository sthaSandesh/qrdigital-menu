import { Config } from 'tailwindcss';
import twedge from '@edge-ui/react/tailwind-plugin';

const config: Config = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        // include edge-ui components in the content path
        twedge.getContentPath()
    ],
    // register the plugin
    plugins: [twedge()]
};

export default config;