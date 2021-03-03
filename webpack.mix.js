let mix = require('laravel-mix');
mix.sass('scss/app.scss', 'dist/')
.options({ processCssUrls: false });

let cors = require("cors");
app.use(cors());
