const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
// const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
    const files = await imagemin(
        ['static/social_icons/*.png'], {
        destination: 'output/social_icons',
        plugins: [
            imageminPngquant({quality: [0.5,0.7]})
            // imageminMozjpeg({quality: 70})
        ]
    });
 
    console.log(files);
})();