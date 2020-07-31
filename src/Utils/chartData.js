const getChartData = (repoData) => {
	let chartData = repoData.reduce((total, current) => {
		const { language, stargazers_count } = current;
		if (!language) return total;
		if (!total[language]) {
			total[language] = { label: language, value: 1, stars: stargazers_count };
		} else {
			total[language] = {
				...total[language],
				value : total[language].value + 1,
				stars : total[language].stars + stargazers_count,
			};
		}
		return total;
	}, {});

	const stack = Object.values(chartData)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0 - 5);

	const stars = Object.values(chartData)
		.sort((a, b) => {
			return b.stars - a.stars;
		})
		.map((star) => ({ ...star, value: star.stars }))
		.slice(0, 5);

	return { stack, stars };
};

export default getChartData;
