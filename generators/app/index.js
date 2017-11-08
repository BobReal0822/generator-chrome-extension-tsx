/**
 * generator-ts-lib 
 */

var path = require('path'),
    chalk = require('chalk'),
    yeoman = require('yeoman-generator'),
    // yosay = require('yosay'),
    fs = require('fs'),
    path = require('path'),
    templatesPath = path.join(__dirname, 'templates');

function copyFilesOfDir(dirPath) {
    var self = this;

    fs.readdir(dirPath, function(err, files) {
        if (err) {
            return;
        }

        files.map(function (file) {
            var newPath = path.join(dirPath, file);

            if (fs.lstatSync(newPath).isDirectory()) {
                self.directory(newPath, file);
            } else {
                self.copy(newPath, file);
            }
        });
    });
}

var TsLibPackage = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'Generating generator now: '
        ));
    },

    generateBasic: function() {
        copyFilesOfDir.call(this, templatesPath);
    },

    generateClient: function() {
        this.sourceRoot(templatesPath);
        this.destinationPath('./');
    },

    install: function() {
        var self = this;

        this.log(chalk.green(
            '\nBegin installing dependencies'
        ));
        this.installDependencies({
            npm: true,
            skipMessage: true,
            callback: function () {
                self.log(chalk.green(
                    'Finish installing dependencies!'
                ));

                self.end();
            }
        });
    },

    end: function() {
        this.log(chalk.yellow(
            '\nYour generator has been created successfully!\n'
        ));
    }
});

module.exports = TsLibPackage;