<script>
	import { resolve } from "$app/paths";

 </script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=anonymous>
<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back_ios_new" />


<main class="valikko">

    <a href={resolve("/")} class="pallo">
      <span class="material-symbols-outlined nuoli">
        arrow_back_ios_new
      </span>
    </a>


    <a href={resolve("/muistipeli")} class="button muistipeli">
        <span class="teksti">Muistipeli</span>
    </a>
    
    <a href={resolve("/savypeli")} class="button savypeli">
        <span class="teksti">Sävypeli</span>
    </a>

    <a href={resolve("/kolmiopeli")} class="button kolmiopeli">
        <span class="teksti">Kolmiopeli</span>
    </a>
    
</main>

<style>
  .valikko {
    width: 100%;
    max-width: 403px;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly ;
    padding: 20px;
    margin: 0 auto;
  }

  .button:active {
    transform: translateY(4px);
    filter: drop-shadow(5px 2px 2px #0000006c);
  }

  .button {
    width: 100%;
    padding-top: 70px;
    padding-bottom: 70px;
    border-radius: 25px;
    filter: drop-shadow(10px 5px 3px #0000006c);
    border: 3px solid #0B0B0B;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .muistipeli {
    background-color:#8338EC ;
  }

    .savypeli {
    background-color:#FFBE0B ;
  }

    .kolmiopeli {
    background-color:#FF006E ;
  }

  .teksti {
  font-family: "Jersey 10", sans-serif;
  font-weight: 400;
  font-style: bold;
  font-size: 50px;
  text-align: center;
  justify-content: center;
  }

  .pallo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    padding: 8px;
    border-radius: 100px;
    background-color: black;
  }

  .nuoli {
    color:white;
    font-size: 25px;
    user-select: none;
    margin-right: 4px;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }

/* Työpöytäversio */
@media (min-width: 1024px) {
  .valikko {
    margin-top: 50px;
    flex-direction: row;
    max-width: 1400px;
    gap: 30px;
    height: 800px;
  }

  .pallo {
    position: absolute;
    top: 10px;
    left: 25px;
  } 
}
 </style>