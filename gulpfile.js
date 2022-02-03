const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const styles = () => {
    return src('src/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
};

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/styles/**/*.scss', styles);
watch('dist/index.html').on('change', browserSync.reload);
watch('dist/main.css').on('change', browserSync.reload);

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.default = series(styles, watchFiles);