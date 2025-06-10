"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
  
const watch = require("gulp-watch");
const uglifyjs = require("uglify-js");
const uglify = require("gulp-uglify");
const composer = require("gulp-uglify/composer");
const pump = require("pump");
const minify = composer(uglifyjs, console);
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

const { src, dest, lastRun, series, parallel } = require("gulp");

/* ==============================
    static server
============================== */
function browser_sync() {
  browserSync.init(["./public/*"], {
    files: [
      "./*",
      "./**/*",
      "./**/**/*",
      "/public/js/src/*",
      "/public/js/dist/*",
      "/public/articles/*",
      "/public/portfolio/*",
      "/public/css/scss/stylesheet.scss",
    ],
    server: {
      baseDir: "./public",
    },
  });
  gulp.watch("*").on("change", browserSync.reload);
}

/* ==============================
    minify js
============================== */
function compress() {
  return gulp
    .src("./public/js/src/*")
      .pipe(uglify())
      .pipe(gulp.dest("./public/js/dist"))
      .pipe(browserSync.reload({ stream: true }));
}

/* ==============================
    sass sync watch
============================== */
function sass_watch() {
  return gulp
    .src("./public/css/scss/*.scss")
      .pipe(sass.sync().on("error", sass.logError))
      .pipe(gulp.dest("./public/css/src"));
}

/* ==============================
    css autoprefixer -> tmp to dist
============================== */
function prefix_css() {
  return gulp
    .src("./public/css/src/*.css", { ignoreInitial: false })
      .pipe(autoprefixer({ cascade: false }))
      .pipe(gulp.dest("./public/css/tmp"));
}

/* ==============================
    css minify
============================== */
function mincss() {
  return gulp
    .src("./public/css/src/*.css")
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(gulp.dest("./public/css/dist"))
      .pipe(browserSync.reload({ stream: true }));
}

// exports
exports.default = series( 
  compress,
  sass_watch,
  prefix_css,
  mincss,
  browser_sync
);
