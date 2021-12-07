import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import Form from "../Form";

const Home = () => {
	const [engaged, setEngaged] = useState(false);

	const startForm = () => setEngaged(true);

	const headerCurveVariants = {
		notEngaged: { y: 0 },
		engaged: {
			y: "-20vh",
			transition: {
				type: "tween",
				delay: 0.4,
				when: "afterChildren",
			},
		},
	};

	const headerSubtitleVariants = {
		notEngaged: { opacity: 1 },
		engaged: { opacity: 0 },
	};

	return (
		<>
			<motion.div
				className="home-container"
				/* initial="notEngaged" */
				animate={engaged ? "engaged" : "notEngaged"}
				variants={headerCurveVariants}
			>
				<motion.h1
					style={{
						maxWidth: "10rem",
						/* position: "sticky",
						top: "0", */
					}}
					animate={
						engaged && { marginTop: "20vh", paddingTop: "10vh" }
						// : { marginTop: "5vh" }
					}
					transition={{ type: "tween", delay: 0.2 }}
				>
					<span style={{ color: "red" }}>SOLAR</span> WIZARD
				</motion.h1>
				{!engaged && (
					<motion.h2
						style={{ fontSize: "50px" }}
						transition={{ type: "fade", delay: 0 }}
						animate={engaged ? "engaged" : "notEngaged"}
						variants={headerSubtitleVariants}
					>
						One Step Closer To Free Solar!
					</motion.h2>
				)}
			</motion.div>
			{/* <motion.div
				className="home-content"
				initial={{ x: "-100vw" }}
				transition={{ type: "tween", delay: 0.4 }}
				animate={{ x: 0 }}
			>
				<Form startForm={startForm} />
			</motion.div> */}
			<div className="home-content">
				<Form startForm={startForm} />
			</div>
		</>
	);
};

export default Home;
