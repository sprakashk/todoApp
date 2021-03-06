const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/about.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/blogs.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/resume.js"))),
  "component---src-pages-snippets-js": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/snippets.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/using-typescript.tsx"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/satyaprakash/Documents/learn/sprakashk.github.io/src/pages/work.js")))
}

