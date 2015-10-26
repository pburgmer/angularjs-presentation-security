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
    'situation/defenses',
    'situation/defenses-headers',
    'situation/insufficient-defenses',


    'problems/top10',
    'problems/owasp',

    'problems/a1-injection/title',
    'problems/a1-injection/example-sql',
    'problems/a1-injection/description',
    'problems/a1-injection/test',
    'problems/a1-injection/defenses',
    'problems/a1-injection/example-sql-prepared-statement',
    'problems/a1-injection/angularjs',
    'problems/a1-injection/angularjs-example',
    'problems/a1-injection/ng-bind-html',
    'problems/a1-injection/sce',
    'problems/a1-injection/angular-interpolate',
    'problems/a1-injection/angular-ng-init',

    'problems/a2-session/title',
    'problems/a2-session/description',
    'problems/a2-session/examples',
    'problems/a2-session/defenses',
    'problems/a2-session/login',
    'problems/a2-session/out-of-app',
    'problems/a2-session/in-app',
    'problems/a2-session/stateless-backend',
    'problems/a2-session/stateful-session-id',

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
    'problems/a7-function-level/user-roles-state',

    'problems/a8-xsrf/title',
    'problems/a8-xsrf/example',
    'problems/a8-xsrf/description',
    'problems/a8-xsrf/defenses',
    'problems/a8-xsrf/angularjs',

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
