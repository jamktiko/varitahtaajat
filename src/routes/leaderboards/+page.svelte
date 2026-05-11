<script lang="ts">
	import '$lib/leaderboardsstyle.css';
	const leaderboardBlocks = [
		{ id: 1, color: '#FEF001', points: 16, date: '00:00 01.06.26' },
		{ id: 2, color: '#FFCE03', points: 12, date: '00:00 02.06.26' },
		{ id: 3, color: '#FD9A01', points: 10, date: '00:00 03.06.26' },
		{ id: 4, color: '#FD6104', points: 8, date: '00:00 04.06.26' },
		{ id: 5, color: '#F00505', points: 6, date: '00:00 05.06.26' },
		{ id: 6, color: '#F31D64', points: 4, date: '00:00 06.06.26' },
		{ id: 7, color: '#A224AD', points: 2, date: '00:00 07.06.26' },
		{ id: 8, color: '#6A38B3', points: 1, date: '00:00 08.06.26' },
		{ id: 9, color: '#3C50B1', points: 1, date: '00:00 09.06.26' },
		{ id: 10, color: '#3A86FF', points: 1, date: '00:00 10.06.26' }
	];
</script>

<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<div class="leaderboard-container">
	<h1 class="leaderteksti1 jersey-10-regular">Leaderboards</h1>
	<div class="leaderboard-list">
		{#each leaderboardBlocks as block (block.id)}
			<div class="leaderboard" style:background-color={block.color}>
				<div class="leaderboard-date jersey-10-regular">{block.date}</div>
				<div class="leaderboard-number jersey-10-regular">{block.points}</div>
			</div>
		{/each}
	</div>
</div>
