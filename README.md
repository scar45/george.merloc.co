# George Merlocco @ https://george.merloc.co

My personal website/portfolio, rebuilt from scratch in 2020, using a [Retro CRT Terminal theme](https://github.com/scar45/retro-crt-startpage) that I've designed and developed.

It uses the [Eleventy](https://11ty.dev) static site generator, and is boilerplated from [ ianrose / deventy ](https://github.com/ianrose/deventy), which is a minimal 11ty starting point for building static websites with modern tools.

Features:
- [11ty](https://www.11ty.io/)
- [Sass/SCSS](https://github.com/sass/node-sass)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [light-server](https://github.com/txchen/light-server)
- [PostCSS](https://postcss.org/)
- [CSSnano](https://cssnano.co/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

## Getting Started

Install all dependencies using npm:

```
$ nvm use
$ npm install
```

### Develop

```
$ npm run dev
```
 And in debug mode:

```
$ npm run dev:debug
```

You can view the website at the given [access URL](http://localhost:4000):
```
$ light-server is listening at http://localhost:4000
```

The local url is configured in `.lightserverrc`

### Build

```
npm run build
```

-----
.end