import React from "react";
import PropTypes from "prop-types";

const RenderItem = (props) => {
	const { icon, label, value, color } = props;
	return (
		<article className='item'>
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</article>
	);
};

RenderItem.propTypes = {};

export default RenderItem;
