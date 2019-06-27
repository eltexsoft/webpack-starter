## Build Setup:

``` bash
# Download repository:
git clone https://github.com/eltexsoft/webpack-starter.git

# Go to the app:
cd webpack-starter

# Install dependencies:
yarn install

# Server with hot reload at http://localhost:8080/
yarn run dev

# Output will be at dist/ folder
yarn run build
```

## Project Structure:

* `src/index.html` - main app HTML
* `styles/scss` - put custom app SCSS styles here. Don't forget to import `src/styles/styles.scss` in `index.js`
* `src/images` - put images here.
* `src/js` - put custom app scripts here
* `src/index.js` - main app file where you include/import all required libs and init app

## Import Another libs:
1. Install libs
2. Import libs in `./index.js`
``` js
// Bootstrap example
import bootstrap from 'bootstrap'
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import only SASS or CSS libs:
1. Install libs
2. Go to `/styles/base/libs.scss`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import '../../node_modules/spinners/stylesheets/spinners';
// CSS librarys example:
@import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
```

## Import js files:
1. Create another js module in `./js/` folder
2. Import modules in `./index.js` file
``` js
// another js file for example
import './js/common.js'
```


## Add Fonts:
Add @font-face in `/styles/base/fonts.scss`:

``` scss
// Example with Helvetica
@font-face {
  font-family: "Helvetica-Base";
  src: url('../fonts/Helvetica/Base/Helvetica-Base.eot'); /* IE9 Compat Modes */
  src: url('../fonts/Helvetica/Base/Helvetica-Base.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/Helvetica/Base/Helvetica-Base.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/Helvetica/Base/Helvetica-Base.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('../fonts/Helvetica/Base/Helvetica-Base.svg') format('svg'); /* Legacy iOS */
}
```

Add vars for font in `/styles/base/vars.scss`:

``` scss
$mySecontFont : 'Helvetica-Base', Arial, sans-serif;
```
