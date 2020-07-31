import React from "react";
import PropTypes from "prop-types";

const RenderItem = ({ icon, label, value, color }) => {
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

RenderItem.propTypes = {
	icon  : PropTypes.object.isRequired,
	label : PropTypes.string.isRequired,
	value : PropTypes.number.isRequired,
	color : PropTypes.string.isRequired,
};

export default RenderItem;
