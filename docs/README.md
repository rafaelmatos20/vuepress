---
home: true
heroImage: https://vuepress.vuejs.org/hero.png
actionText: Get Started →
actionLink: /guide/
features:
  - title: Simplicity First

    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered

    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant

    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: Copyright © 2019 - Peter Mbanugo
---

### As Easy as 1, 2, 3

```bash
# install
yarn global add vuepress
# OR npm install -g vuepress

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build
```
We’re using the default theme that comes with VuePress. It provides a default home page layout, which we can customize by specifying some predefined variables in the YAML front matter of the file. Setting the home variable to true tells it to style the page using the default home page style. What this default style renders is a hero image with text and a features section. The text is gotten from the title and description you set in .vuepress/config.js. Anything after the YAML front matter will be parsed as normal Markdown and rendered after the features section. Let’s see how what we have so far looks like in the browser. Open the command line and run npm run docs:dev. This should start the local dev server and you can access the website at localhost:8080 by default.
