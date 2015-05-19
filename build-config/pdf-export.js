'use strict';

var grunt = require('grunt');
var pdf = require('pdfcrowd');
var pkg = grunt.file.readJSON('./package.json');

module.exports = {
  getExportTasksConfig: function (fabsConfig) {
    var fabsBuildConfig = fabsConfig.getBuildConfig();
    var fabsGruntConfig = fabsConfig.getGruntConfig();

    var exportPDFPath = 'etc/export/';
    var exportPDFFile = pkg.description + ' - ' + pkg.version + '.pdf';
    var exportPDFOutput = exportPDFPath + exportPDFFile;

    var gruntConfig = {
      clean: {
        export: exportPDFPath + '*'
      },
      gitadd: {
        export: {
          files: [
            {
              src: [ '*.pdf' ],
              expand: true,
              cwd: exportPDFPath
            }
          ]
        }
      },
      gitcommit: {
        export: {
          options: {
            message: 'chore(export): add PDF export for ' + pkg.version
          },
          files: [
            {
              src: [ '*.pdf' ],
              expand: true,
              cwd: exportPDFPath
            }
          ]
        }
      }
    };

    grunt.registerTask('checkPDFCrowdConfig', 'Check build configuration for export settings', function () {
      if(fabsBuildConfig.export.pdfCrowd.user === undefined || fabsBuildConfig.export.pdfCrowd.apiKey === undefined) {
        throw new Error('Please provide user and apiKey for PDFCrowd.com via project.config.js or developer.config.js!');
      }
    });

    grunt.registerTask('exportPDFWithPDFCrowd', 'Export the slides as PDF using PDFCrowd.com', function () {
      var done = this.async();

      var pdfcrowd = new pdf.Pdfcrowd(
        fabsBuildConfig.export.pdfCrowd.user,
        fabsBuildConfig.export.pdfCrowd.apiKey
      );

      var archive = fabsGruntConfig.compress.dist_app.options.archive;

      var callbacks = pdf.saveToFile(exportPDFOutput);
      callbacks.end = done;

      var options = {
        width: "29.7cm",
        height: "21cm",
        margin_top: "0cm",
        margin_right: "0cm",
        margin_bottom: "0cm",
        margin_left: "0cm"
      };

      pdfcrowd.convertFile(archive, callbacks, options);
    });

    grunt.loadNpmTasks('grunt-git');

    var exportTasks = [
      'build',
      'test',
      'checkPDFCrowdConfig',
      'clean:export',
      'exportPDFWithPDFCrowd',
      'gitadd:export',
      'gitcommit:export'
    ];

    grunt.registerTask('export', exportTasks);

    return gruntConfig;
  }
};
