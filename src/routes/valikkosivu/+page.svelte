<script>
	import { resolve } from "$app/paths";
  import '$lib/valikkostyle.css';

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