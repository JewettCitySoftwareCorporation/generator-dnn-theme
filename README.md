# generator-dnn-theme [![Build Status](https://travis-ci.org/OctoD/generator-dnn-theme.svg?branch=master)](https://travis-ci.org/octod/generator-dnn-theme)

## Getting Started

### What the hell is this?

This is a Yeoman generator and this will help you to scaffold your DNNSoftware themes quickly.

### installing yeoman and the generator

First of all, you need to install nodejs

* [installing nodejs](https://nodejs.org/en/download/)

Then, copy and paste the script below in your terminal

```bash
npm install -g yo generator-dnn-theme
```

Finally, mkdir and cd to a folder (your theme folder) and initiate the generator:

```bash
yo dnn-theme
```

You will be asked to enter your theme name.

You've done!

### Available generators

###### menu

This generator will add a dnn razor menu in your `dist/` folder

```bash
yo dnn-theme:menu
```

You will be asked by Yeo for the name.

###### skin

This generator will add a dnn [skinName].ascx in your `dist/` folder

```bash
yo dnn-theme:skin
```

###### task-less

This task will add less building task and will install bootstrap

```bash
yo dnn-theme:task-less
```

###### task-jade

This task will add jade building task for a faster and easier skin development

```bash
yo dnn-theme:task-jade
```

###### task-stylus

This task will add stylus building task and will install nostrap and ride-css

```bash
yo dnn-theme:task-stylus
```

Every contribution is really welcome.

## License

The MIT License (MIT)

Copyright (c) 2015 Paolo Roth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
