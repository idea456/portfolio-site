import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    define: {
        "import.meta.env.CONTENTFUL_SPACE_ID": JSON.stringify(
            process.env.CONTENTFUL_SPACE_ID,
        ),
        "import.meta.env.CONTENTFUL_TOKEN": JSON.stringify(
            process.env.CONTENTFUL_TOKEN,
        ),
    },
});
