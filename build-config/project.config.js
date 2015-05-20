'use strict';

module.exports = {

  export: {
    pdfCrowd: {
      user: undefined,
      apiKey: undefined
    }
  },
  build: {
    bless: {
      enabled: false
    },
    less: {
      enabled: false
    },
    tests: {
      spec: {
        runInDev: false
      },
      e2e: {
        runInDev: false,
        runInDist: false
      }
    },
    server: {
      runInDist: true,
      port: 8000
    }
  },

  app: {
    files: {
      templates2js: [
        'slides/**/*.html'
      ],
      translations: [ ],
      translations2js: [ ]
    }
  },

  vendor: {
    files: {
      js: [
        'angular/angular.js',
        'angular-sanitize/angular-sanitize.js',
        'google-code-prettify/src/prettify.js',
        'w11k-slides/dist/w11k-slides.js',
        'w11k-slides/dist/w11k-slides.tpl.js'
      ],
      js_mock: [
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
      ],
      assets: [
      ]
    }
  }
};
