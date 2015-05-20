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
    'concept/user-roles',
    'concept/user-roles-resolve',
    'concept/user-roles-service',

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
    'problems/session/description',
    'problems/session/examples',
    'problems/session/defenses',
    'problems/session/stateless-backend',
    'problems/session/stateful-session-id',

    'problems/xss/title',
    'problems/xss/example',
    'problems/xss/description',
    'problems/xss/defenses',
    'problems/xss/angularjs',
    'problems/xss/angularjs-example',

    'problems/xsrf/title',
    'problems/xsrf/example',
    'problems/xsrf/description',
    'problems/xsrf/defenses',
    'problems/xsrf/angularjs',

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
