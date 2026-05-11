<script>
	import '$lib/kolmiopelistyles/kolmiopeliohje.css';
</script>

<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<link
	href="https://fonts.googleapis.com/css2?family=Inclusive+Sans:ital,wght@0,300..700;1,300..700&family=Jersey+10&display=swap"
	rel="stylesheet"
/>
<div class="pagekolmioohje">
	<div class="contentkolmioohje">
		<div class="ohjetekstit">
			<h1 class="ohjeteksti1 jersey-10-regular">How to play KolmioPeli</h1>
			<div class="ohjeteksti2 inclusive-sans-regular">
				<p>In KolmioPeli, your goal is to guess a color using RGB numbers.</p>

				<p>RGB means:</p>
				<p>R = <span style="color: red;">Red</span></p>
				<p>G = <span style="color: green;">Green</span></p>
				<p>B = <span style="color: blue;">Blue</span></p>

				<p>
					Every color on a screen is made by mixing these three colors. Each RGB number can be from
					0 to 255.
				</p>

				<p>0 means there is no color. 255 means the color is very strong.</p>

				<p>For example:</p>

				<p>rgb(255, 0, 0) = strong <span style="color: #FF0000;">Red</span></p>
				<p>rgb(0, 255, 0) = strong <span style="color: #00FF85;">Green</span></p>
				<p>rgb(0, 0, 255) = strong <span style="color: #0000FF;">Blue</span></p>
				<p>
					rgb(255, 255, 255) = <span class="white-text-black-border">White</span>
				</p>
				<p>rgb(0, 0, 0) = <span style="font-weight: bold; color: #000000;">Black</span></p>
			</div>
			<h1 class="ohjeteksti1 jersey-10-regular">Your Task</h1>
			<div class="ohjeteksti2 inclusive-sans-regular">
				<p>You will see a target color.</p>
				<p>You need to fill three fields:</p>
				<p><span style="color: #FF0000;">Red</span>: choose a number from 0 to 255</p>
				<p><span style="color: #00FF85;">Green</span>: choose a number from 0 to 255</p>
				<p><span style="color: #0000FF;">Blue</span>: choose a number from 0 to 255</p>
				<p>
					After that, the game will compare your RGB code with the correct color. Then it will show
					how close your answer was in percentages.
				</p>
				<p>For example:</p>
				<p>
					<span style="font-weight: bold; color: #000000;">85%</span> close means your guess was very
					near the correct color.
				</p>
				<p>
					<span style="font-weight: bold; color: #000000;">30%</span> close means your guess was quite
					different.
				</p>
			</div>
			<h1 class="ohjeteksti1 jersey-10-regular">Tips</h1>
			<div class="ohjeteksti2 inclusive-sans-regular">
				<p>
					If the color looks very <span style="color: #FF0000;">red</span>, make the Red number
					high. Example: rgb(220, 40, 40)
				</p>
				<p>
					If the color looks very <span style="color: #00FF85;">green</span>, make the Green number
					high. rgb(40, 220, 80)
				</p>
				<p>
					If the color looks very <span style="color: #0000FF;">blue</span>, make the Blue number
					high. Example: rgb(40, 80, 220)
				</p>
				<p>
					If the color is <span style="color: #FFF275;">light</span>, all numbers are usually
					higher. Example: rgb(220, 220, 180)
				</p>
				<p>
					If the color is <span style="color: #111827; font-weight: bold">dark</span>, all numbers
					are usually lower. Example: rgb(40, 30, 50)
				</p>
			</div>
		</div>
		<button class="fixed-kolmiopelibutton jersey-10-regular"> Start </button>
	</div>
</div>
