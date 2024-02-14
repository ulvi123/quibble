import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default {
  integrations: [tailwind(), compress()],
};