<script>
    import { resolve } from "$app/paths";
	import '$lib/infostyle.css';
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=anonymous>
<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back_ios" />



<div class="container">

<a href={resolve("/")} class="backbutton" data-sveltekit-reload>
    <span class="material-symbols-outlined nuoliback">
        arrow_back_ios
    </span>
</a>


    <header class="otsikko">
        <h1>INFO</h1>
   
    </header>

    <main class="laatikko">
        <section class ="sisalto">
            <h2>Tietoa sovelluksesta</h2>

            <p> Väritähtääjä peli on kouluprojektina tuotettu peli, tekijät ovat JAMK:in opiskelijoita.
                 Pelissä on kolme eri tasoa, joissa on eri tavoite. Peli sopii kaiken ikäisille. Peli on tuotettu osana opintoja. 
            </p>

        </section>

        <section class="sisalto">
            <h2>Tekijät</h2>
            <ul>
                <li> Arttu Höylä </li> 
                <li> Maria Karhu </li> 
                <li> Eemeli Latva-aho </li> 
                <li> Rayimov Elyorbek </li> 
            </ul>
        </section>

        <section class="sisalto">
            <h2>Testatut selaimet</h2>
            <ul>
                <li> Google Chrome </li>
                <li> Mozilla Firefox </li>
            </ul>
        </section>

        <section class="sisalto">
            <h3>Toteutuksessa hyödynnetyt teknologiat</h3>
            <ul>
                <li> Visual Studio Code / Svelte </li> 
                <li> TypeScript </li> 
                <li> Figma </li> 
                <li> Vercel </li>
                <li> Trello </li> 
                <li> Microsoft Teams </li> 
                <li> Microsoft PowerPoint </li> 
            </ul>
        </section>
    </main>
</div>
