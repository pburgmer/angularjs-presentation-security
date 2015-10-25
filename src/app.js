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

    'concept/overview',
    'concept/login',
    'concept/out-of-app',
    'concept/in-app',
    'concept/user-roles',
    'concept/user-roles-state',

    'problems/top10',
    'problems/owasp',
    'problems/defenses',
    'problems/insufficient-defenses',

    'problems/a1-injection/title',
    'problems/a1-injection/example-sql',
    'problems/a1-injection/description',
    'problems/a1-injection/test',
    'problems/a1-injection/defenses',
    'problems/a1-injection/example-sql-prepared-statement',

    'problems/a2-session/title',
    'problems/a2-session/description',
    'problems/a2-session/examples',
    'problems/a2-session/defenses',
    'problems/a2-session/stateless-backend',
    'problems/a2-session/stateful-session-id',

    'problems/a3-xss/title',
    'problems/a3-xss/example',
    'problems/a3-xss/description',
    'problems/a3-xss/defenses',
    'problems/a3-xss/angularjs',
    'problems/a3-xss/angularjs-example',
    'problems/a3-xss/ng-bind-html',
    'problems/a3-xss/sce',

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
