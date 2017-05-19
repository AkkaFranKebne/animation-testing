//npm install
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require("gulp-sass");

gulp.task("sass", function (){
    return gulp.src("scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole:true,
        outputStyle: "expanded",
        sourceComments: "map"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
});

gulp.task("sass-1", function (){
    return gulp.src("scss/1-page.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole:true,
        outputStyle: "expanded",
        sourceComments: "map"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
});

gulp.task("sass-main", function (){
    return gulp.src("scss/main-page.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole:true,
        outputStyle: "expanded",
        sourceComments: "map"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
});


gulp.task("watch", function(){
    gulp.watch(['scss/**/*.scss' ], ['sass']); 
});


