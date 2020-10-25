var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    //this.option('babel'); // This method adds support for a `--babel` flag
  }


  async initPackage () {
    this.answers = await this.prompt([  //This.prompt 提示用户输入的对象
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      // {
      //   type: "confirm",
      //   name: "cool",
      //   message: "Would you like to enable the Cool feature?"
      // }
    ]);

    const pkgJson = {
      "name": this.answers.name,
      "version": "1.0.0",
      "description": "",
      "main": "generators/app/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.npmInstall(['vue'], { 'save-dev': false });
    // this.npmInstall(['webpack', 'vue-loader', 'vue-template-compiler', 'vue-style-loader',
    //   'css-loader', 'copy-webpack-plugin','webpack@4.4.2','webpack-cli'], { 'save-dev': true });

    this.npmInstall(['webpack', 'vue-loader', 'vue-template-compiler', 'vue-style-loader',
    'css-loader', 'copy-webpack-plugin','webpack-cli'], { 'save-dev': true });
  }

  copeFiles () {
    this.fs.copyTpl(
      this.templatePath('HelloWold.vue'),
      this.destinationPath('src/HelloWold.vue'),
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
    );
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js'),
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      { title: this.answers.name }
    );
  }

  // writing () {
  //   this.fs.copyTpl(
  //     this.templatePath('t.html'),
  //     this.destinationPath('public/index.html'),
  //     { title: 'Templating with Yeoman' }
  //   );
  // }
  // installPackage () {
  //   const pkgJson = {
  //     devDependencies: {
  //       eslint: '^3.15.0'
  //     },
  //     dependencies: {
  //       react: '^16.2.0'
  //     }
  //   };

  //   // Extend or create package.json file in destination path
  //   this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  // }
  // install () {
  //   this.npmInstall();
  // }


};