const Solid = require("vite-plugin-solid")
const solidSvg = require("vite-plugin-solid-svg");

module.exports = {

  core: {
    builder: "storybook-builder-vite"
  },

  framework: "@storybook/html",

  stories: [
    "../src/**/*.stories.tsx",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  async viteFinal(config, {configType}){
		config.plugins.unshift(
			Solid({hot:false}),
      solidSvg(),
		)

    return config
  },

}
