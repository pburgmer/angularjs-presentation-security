'use strict';

angular.module('app', [
  'app.templates',
  'w11k.slides',
  'w11k.slides.template'
]);

angular.module('app').config (function (slidesConfig) {
  slidesConfig.slides = [
    'title',

    'overview',

    'situation/architecture',
    'situation/technologies',
    'situation/concept/overview',
    'situation/concept/login',
    'situation/concept/user-roles',
    'situation/concept/user-roles-resolve',
    'situation/concept/user-roles-service',

    'problems/top10',
    'problems/owasp',
    'problems/defenses',
    'problems/insufficient-defenses',

    'problems/injection/title',
    'problems/injection/example-sql',
    'problems/injection/description',
    'problems/injection/test',
    'problems/injection/defenses',
    'problems/injection/example-sql-prepared-statement',


    'problems/session/title',

    'problems/xss/title',

    'problems/xsrf/title',

    'end'
  ];

  slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
  slidesConfig.slideTemplateSuffix = '.html';

  slidesConfig.masters = {
    'regular': '@@cacheBustingDir/masters/regular.html',
    'section-title': '@@cacheBustingDir/masters/section-title.html',
    'section-overview': '@@cacheBustingDir/masters/section-overview.html'
  };
});
