const getChartData = (repoData) => {
	let chartData = repoData.reduce((total, current) => {
		const { language } = current;
		if (!language) return total;
		if (!total[language]) {
			total[language] = { label: language, value: 1 };
		} else {
			total[language] = { ...total[language], value: total[language].value + 1 };
		}
		return total;
	}, {});

	chartData = Object.values(chartData)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0 - 5);
	return chartData;
};

export default getChartData;
