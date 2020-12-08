import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);
	return (
		<>
			<nav className="navbar navbar-light">
				<div className="row w-100">
					<div className="col-2">
						<a className="navbar-logo" href="#">
							<img
								src="http://topnotchmarketingsolutionsllc.com/wp-content/uploads/2018/11/Full_straight-copy-80x80.png"
								width="60"
								height="60"
								alt=""
								loading="lazy"
							/>
						</a>
					</div>
					<div className="col-8 text-center">
						<a className="navbar-brand mx-auto" href="#">
							Click the lights!
						</a>
					</div>
					<div className="col-2" />
				</div>
			</nav>
			<div className="wrapper card d-flex flex-column align-items-center justify-content-center" />

			<div>
				<div className="topStick mx-auto" />
				<div className="stopLight mx-auto d-flex flex-column align-items-center justify-content-center">
					<div
						className={
							color === "red" ? "red selected light" : "red light"
						}
						onClick={() => setColor("red")}
					/>
					<div
						className={
							color === "yellow"
								? "yellow selected light"
								: "yellow light"
						}
						onClick={() => setColor("yellow")}
					/>
					<div
						className={
							color === "green"
								? "green selected light"
								: "green light"
						}
						onClick={() => setColor("green")}
					/>
				</div>
			</div>
			<footer className="footer fixed-bottom w-100">
				<p>
					Made with the power of <i className="fas fa-coffee" /> by
					Chris Angelos
				</p>
			</footer>
		</>
	);
}
