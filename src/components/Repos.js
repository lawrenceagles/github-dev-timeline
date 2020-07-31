import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

// Utils
import getChartData from "../Utils/chartData";

const Repos = () => {
	const { githubRepos } = useContext(GithubContext);
	let { stack, stars } = getChartData(githubRepos);

	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<Pie3D data={stack} />
				<Column3D data={stars} />
				<Doughnut2D data={stack} />
				<Bar3D data={stars} />
			</Wrapper>
		</section>
	);
};

const Wrapper = styled.div`
	display: grid;
	justify-items: center;
	gap: 2rem;
	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1200px) {
		grid-template-columns: 2fr 3fr;
	}

	div {
		width: 100% !important;
	}
	.fusioncharts-container {
		width: 100% !important;
	}
	svg {
		width: 100% !important;
		border-radius: var(--radius) !important;
	}
`;

export default Repos;
