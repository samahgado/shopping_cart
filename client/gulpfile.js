const gulp = require("gulp")
const gulpSass = require("gulp-sass")
const sass = gulpSass(require("sass"))

gulp.task("sass",async function(){
    gulp.src("src/component/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"))
})
 //gulp.task("watch",()=>{
  //g//ulp.watch('src/component/**/*.scss', ()=>{
//gulp.src('src/component/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
//
  //  })
//})
