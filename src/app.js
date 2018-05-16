'use strict';

angular.module('app', [
  'app.templates',
  'w11k.slides',
  'w11k.slides.template',
  'ngSanitize'
]);

angular.module('app').config (function (slidesConfig) {
  slidesConfig.slides = [
    'title',

    'overview',
    'about-me',

    'situation/architecture',
    'situation/technologies',
    'situation/concept',

    'problems/owasp',
    'problems/owasp-asvs',
    'problems/getting-information',
    'problems/top10',

    'situation/defenses',
    'situation/defenses-headers',

    'problems/a1-injection/title',
    'problems/a1-injection/example-sql',
    'problems/a1-injection/example-html',
    'problems/a1-injection/description',
    'problems/a1-injection/defenses',
    'problems/a1-injection/defense-sql-prepared-statement',
    'problems/a1-injection/defense-html',
    'problems/a1-injection/angularjs',
    'problems/a1-injection/angularjs-example',
    'problems/a1-injection/ng-bind-html',
    'problems/a1-injection/sce',
    'problems/a1-injection/angular-interpolate',
    'problems/a1-injection/angular-ng-init',

    'problems/a2-session/title',
    'problems/a2-session/examples',
    'problems/a2-session/description-session',
    'problems/a2-session/defenses-session',
    'problems/a2-session/problems-session',
    'problems/a2-session/token-based-auth',
    'problems/a2-session/token-based-auth-advantages',
    'problems/a2-session/cookie-vs-header',
    'problems/a2-session/cookie-vs-header-cookie',
    'problems/a2-session/cookie-vs-header-header',
    'problems/a2-session/defenses-token',
    'problems/a2-session/login',
    'problems/a2-session/out-of-app',
    'problems/a2-session/in-app',

    'problems/a3-xss/title',
    'problems/a3-xss/example',
    'problems/a3-xss/description',
    'problems/a3-xss/defenses',
    'problems/a3-xss/csp',
    'problems/a3-xss/csp-angular',

    'problems/a7-function-level/title',
    'problems/a7-function-level/example',
    'problems/a7-function-level/description',
    'problems/a7-function-level/defenses',
    'problems/a7-function-level/user-roles',
    'problems/a7-function-level/user-roles-state-data',
    'problems/a7-function-level/user-roles-state-event',
    'problems/a7-function-level/user-roles-state-resolve',

    'problems/a8-xsrf/title',
    'problems/a8-xsrf/example',
    'problems/a8-xsrf/description',
    'problems/a8-xsrf/defenses',
    'problems/a8-xsrf/angularjs',


    'problems/a8-xsrf-json/title',
    'problems/a8-xsrf-json/example',
    'problems/a8-xsrf-json/description',
    'problems/a8-xsrf-json/defenses',

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

angular.module('app').controller('HtmlInjectCtrl', function ($scope, $sce) {
  $scope.handleInsecureInput = function () {
    $scope.trustedHtml = $sce.trustAsHtml($scope.searchTerm);
  };
});
