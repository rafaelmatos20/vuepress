const readPkgUp = require('read-pkg-up');
const pkgjson = (readPkgUp.sync()).pkg;

module.exports = {
  title: 'Marvel Hello VuePress',
  description: 'Just playing around!!!!!!!!!!!',
  themeConfig: {
    //displayAllHeaders: true,
    //sidebar: ["/guide/", "/guide/getting-started"]
	search: true,
	navbar: true,
	nav: [
		{text: 'Home',link: '/'},
		{text: 'Github',link: 'GITHUB_REPO_LINK'},
	],
	sidebar: [['/', 'Tabe of contents']], // Assumes GitHub. Can also be a full GitLab url.
	repo: 'https://github.com/rafaelmatos20/vuepress'
  }
}
