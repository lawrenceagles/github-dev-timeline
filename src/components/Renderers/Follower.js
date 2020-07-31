import React from "react";
import PropTypes from "prop-types";

const Follower = ({ avatar_url: img, html_url, login }) => {
	return (
		<article>
			<img src={img} alt={login} />
			<div>
				<h4>{login}</h4>
				<a href={html_url}>{html_url}</a>
			</div>
		</article>
	);
};

Follower.propTypes = {
	avatar_url : PropTypes.string.isRequired,
	html_url   : PropTypes.string.isRequired,
	login      : PropTypes.string.isRequired,
};

export default Follower;
