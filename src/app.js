'use strict';

angular.module('app', [
  'app.templates',
  'w11k.slides',
  'w11k.slides.template'
]);

angular.module('app').config (function (slidesConfig) {
  slidesConfig.slides = [
    'title',
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
