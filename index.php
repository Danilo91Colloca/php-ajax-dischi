<?php

require_once 'database/database.php';




?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="images/spotify-favicon.png" type="image/x-icon" size="32x32" >
    <title>Milestone1-dischi-DC</title>
    <link rel="stylesheet" href="dist/app.css">
  </head>
  <body>
    <div id="app">
      <div class="page-wrapper">
        <div class="side left">
        </div>
        <div class="side right">
        </div>
        <header>
          <nav>
            <div class="logo-box">
              <img src="images/spotify-logo.png" alt="">
            </div>
          </nav>
        </header>
        <main>
          <div class="main-centerPage">
            <?php 
              foreach($data as  $key => $item){
              
            ?>

            <!--ALBUM CARDS LAYOUT-->
            <div class="albumCard-box">
              <div class="album-img">
                <img src="<?php echo $item['imgFront']?>" alt="">
              </div>
              <div class="album-title">
                <span><?php echo $item['title'] ?> </span>
              </div>
              <div class="artist">
                <span><?php echo $item['artist'] ?></span>
              </div>
              <div class="year">
                <span><?php echo $item['year']?></span>
              </div>
            </div>
            <!--ALBUM CARDS LAYOUT-->
            <?php 
              }
            ?>

          </div>
          
        </main>
        <footer>
        </footer>
      </div>
    </div>
    
  </body>
</html>