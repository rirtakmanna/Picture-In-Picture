<!-- All batches -->
[![GitHub package.json version][GitHub-version]]()
[![GitHub last commit][commit]]()
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Netlify Status](https://api.netlify.com/api/v1/badges/655616dc-c99a-4f94-a460-9fb77196e954/deploy-status)](https://app.netlify.com/sites/rm-picture-in-picture/deploys)


<!-- PROJECT LOGO -->
<br>
<p align="center">
  <a href="https://github.com/rirtakmanna/Picture-In-Picture">
  <img src="./src/assets/logo.svg" alt="Logo" width="120" height="120">
</a>
<h2 align="center">Picture In Picture</h2>
<p align="center">
  A website which help to Display Video in Desktop in Picture in Picture mode
  <br />
  <a href="https://github.com/rirtakmanna/Picture-In-Picture/blob/master/README.md"><strong>Explore the docs »</strong></a>
  <br />
  <br />
  <a href="https://rm-picture-in-picture.netlify.app" target="_blank">View Demo</a>
  ·
  <a href="https://github.com/rirtakmanna/Picture-In-Picture/issues">Report Bug</a>
  ·
  <a href="https://github.com/rirtakmanna/Picture-In-Picture/issues">Request Feature</a>
</p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [:clipboard: Built With](#clipboard-built-with)
- [:open_file_folder: Picture In Picture Structure](#open_file_folder-picture-in-picture-structure)
- [:checkered_flag: Getting Started](#checkered_flag-getting-started)
- [Prerequisites](#prerequisites)
- [:sparkles: Installation](#sparkles-installation)
- [Usage](#usage)
- [:round_pushpin: Roadmap](#round_pushpin-roadmap)
- [:v: Contributing](#v-contributing)
- [:memo: License](#memo-license)
- [Author](#author)

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://rm-picture-in-picture.netlify.app)

Picture in picture allows you to use any video run in a small window that can above any tab and any website. I'm using screen capture API for this to capture (https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API) the video screen and display it in picture in picture mode. for more information about the picture in picture mode refer css-tricks.com (https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api)

### :clipboard: Built With
>I build This project with this framwork:

* [Parcel](https://parceljs.org/)
* [Babel](https://babeljs.io/)
* [SASS](https://sass-lang.com/)
* [PostCSS](https://postcss.org/)
## :open_file_folder: Picture In Picture Structure
>You will have a very simple folder structure:

  ```
  Picture In Picture
  ├── README.md
  ├── postcss.config.js
  ├── package.json
  ├── LICENSE.md
  ├── cssnano.config.js
  ├── .gitignore
  ├── .babelrc
  ├── src
  │   └── assets (all Assets here)
  │   └── js
  │   │   └── app.js
  │   └── sass
  │   │   └── _mixins.scss
  │   │   └── main.scss
  │   └── index.html
  ├── build (File for production)
  ```


<!-- GETTING STARTED -->
## :checkered_flag: Getting Started
>To get a local copy up and running follow these simple example steps.
### Prerequisites
* npm
```sh
npm install npm@latest -g
```
### :sparkles: Installation
1. Clone the repo
```sh
git clone https://github.com/rirtakmanna/Picture-In-Picture.git
```
2. Install NPM packages
```sh
npm install
```
<!-- USAGE EXAMPLES -->
## Usage


<!-- ROADMAP -->
## :round_pushpin: Roadmap
See the [open issues](https://github.com/rirtakmanna/Picture-In-Picture/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## :v: Contributing
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## :memo: License

Copyright © 2020 [Rirtak Manna](https://github.com/rirtakmanna).<br />
This project is [MIT](https://github.com/rirtakmanna/Picture-In-Picture/blob/master/LICENSE.md) licensed.

## Author

👤 **Rirtak Manna**

- Website: http://rirtakmanna.com
- Twitter: [@manna_rirtak](https://twitter.com/manna_rirtak)
- Github: [@rirtakmanna](https://github.com/rirtakmanna)

<!-- All links  -->
[GitHub-version]: https://img.shields.io/github/package-json/v/rirtakmanna/Picture-In-Picture
[commit]: https://img.shields.io/github/last-commit/rirtakmanna/Picture-In-Picture?color=green
[issues-shield]: https://img.shields.io/github/issues/rirtakmanna/Picture-In-Picture
[issues-url]: https://github.com/rirtakmanna/Picture-In-Picture/issues
[license-shield]: https://img.shields.io/badge/license-MIT-red
[license-url]: https://github.com/rirtakmanna/Picture-In-Picture/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/twitter/follow/manna_rirtak?label=Twitter
[linkedin-url]: https://linkedin.com/in/manna_rirtak
[product-screenshot]: ./src/assets/webpage.gif

