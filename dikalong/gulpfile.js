var gulp = require("gulp");
var sass = require("gulp-sass")

// var sass = require("gulp-sass");
gulp.task("datejs-copy",async function(){
    gulp.src("./src/datejs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\datejs"));
})   
gulp.task("imgs-copy",async function(){
    gulp.src("./src/imgs/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\imgs"))
})
gulp.task("php-copy",async function(){
    gulp.src("./src/phps/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\phps"))
})
gulp.task("css-copy",async function(){
    gulp.src("./src/projectcss/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectcss"))
})
gulp.task("projectjs-copy",async function(){
    gulp.src("./src/projectjs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectjs"))
})
gulp.task("html-copy",async function(){
    gulp.src("./src/*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"))
})
gulp.task("json-copy",async function(){
    gulp.src("./src/*.json").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"))
})
gulp.task("sass-copy",async function(){
    gulp.src("./src/mainsass/goodlist.scss").pipe(sass()).pipe(gulp.dest("./src/newprojectcss"))
})

gulp.task("watchall",async function(){
    gulp.src("./src/datejs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\datejs"));
    gulp.src("./src/imgs/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\imgs"));
    gulp.src("./src/phps/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\phps"));
    gulp.src("./src/projectcss/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectcss"));
    gulp.src("./src/projectjs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectjs"));
    gulp.src("./src/*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"));
    gulp.src("./src/*.json").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"));

    gulp.watch("./src/datejs/*.js",async function(){
        gulp.src("./src/datejs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\datejs"));
    })
    // gulp.src("./src/datejs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\datejs"));
    gulp.watch("./src/imgs/**/*",async function(){
        gulp.src("./src/imgs/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\imgs"))
    })
    // gulp.src("./src/imgs/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\imgs"))
    gulp.watch("./src/phps/*.php",async function(){
        gulp.src("./src/phps/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\phps"))
    })
    // gulp.src("./src/phps/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\phps"))
    gulp.watch("./src/projectcss/*.css",async function(){
        gulp.src("./src/projectcss/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectcss"))
    })
    // gulp.src("./src/projectcss/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectcss"))
    gulp.watch("./src/projectjs/*.js",async function(){
        gulp.src("./src/projectjs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectjs"))
    })
    // gulp.src("./src/projectjs/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject\\projectjs"))
    gulp.watch("./src/*.html",async function(){
        gulp.src("./src/*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"))
    })
    // gulp.src("./src/*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"))
    gulp.watch("./src/*.json",async function(){
        gulp.src("./src/*.json").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"))
    })
    // gulp.src("./src/*.json").pipe(gulp.dest("D:\\phpStudy\\WWW\\dikalonproject"))
    gulp.watch("./src/mainsass/*.scss",async function(){
        gulp.src("./src/mainsass/*.scss").pipe(sass()).pipe(gulp.dest("./src/newprojectcss"))
    
    })
    

})