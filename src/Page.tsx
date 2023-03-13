import React from "react";
import { Link } from "react-router-dom";

class Page extends React.PureComponent {
	public render(): React.ReactNode {
		return (
			<div>
				<h1 className="header">
					<p>Page navigation</p>
				</h1>
				<Link to="/">Go to welcome page</Link>
			</div>
		);
	}
}

export default Page;
