import React from "react"

export const Image = props => {
	return (
		<div>
			<img className='image' alt='img' src={props.value} style={{ alignContent: "center" }} />
		</div>
	)
}
