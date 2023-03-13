import React from "react";
import { Link } from "react-router-dom";

class Welcome extends React.PureComponent {
	public render(): React.ReactNode {
		console.log("process info", process);
		return (
			<div>
				<h1 className="header">
					<p>
						We are using node {process.versions.node}, Chrome{" "}
						{process.versions.chrome}, and Electron{" "}
						{process.versions.electron}{" "}
					</p>
				</h1>

				<Link to="/page">Go to Page</Link>
			</div>
		);
	}
}

export default Welcome;
