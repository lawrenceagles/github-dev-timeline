import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

// Utils
import { getLanguagesAndStars, getStarsAndForks } from "../Utils/chartData";

const Repos = () => {
	const { githubRepos } = useContext(GithubContext);
	let { stack, stars } = getLanguagesAndStars(githubRepos);
	let { repoStars, forks } = getStarsAndForks(githubRepos);

	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<Pie3D data={stack} />
				<Doughnut2D data={repoStars} />
				<Column3D data={stars} />
				<Bar3D data={forks} />
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
