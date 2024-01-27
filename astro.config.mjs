import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "master",
        },
        logo_url:
          "https://globerunner.com/wp-content/uploads/2020/09/globerunner-active.svg",
        media_folder: "public/assets/images/blog",
        public_folder: "/assets/images/blog",
        site_url: "https://fanciful-cupcake-ac3050.netlify.app",
        collections: [
          {
            name: "blog",
            label: "Blog",
            folder: "src/content/blog",
            create: true,
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Description",
                name: "description",
                widget: "string",
              },
              {
                label: "Author",
                name: "author",
                widget: "string",
              },
              {
                label: "Date",
                name: "date",
                widget: "datetime",
              },
              {
                label: "Tags",
                name: "tags",
                widget: "list",
                default: ["post"],
              },
              {
                label: "Featured Image",
                name: "image",
                widget: "image",
              },
              {
                label: "Image Caption",
                name: "imageAlt",
                widget: "string",
              },
              {
                label: "Body",
                name: "body",
                widget: "markdown",
              },
            ],
          },
        ],
      },
    }),
    sitemap(),
  ],
  output: "server",
  adapter: netlify(),
});
