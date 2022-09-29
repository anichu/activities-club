import React from "react";
import "./blog.css";

const Blog = () => {
	return (
		<div className="blog-container">
			<div className="blogs">
				<div className="blog">
					<h1>How does react work?</h1>
					<p>
						React is a declarative, efficient, and flexible JavaScript library
						for building user interfaces. ‘V’ denotes the view in MVC. ReactJS
						is an open-source, component-based front end library responsible
						only for the view layer of the application. It is maintained by
						Facebook.
					</p>
					<p>
						React uses a declarative paradigm that makes it easier to reason
						about your application and aims to be both efficient and flexible.
						It designs simple views for each state in your application, and
						React will efficiently update and render just the right component
						when your data changes.
					</p>
					<p>
						While building client-side apps, a team of Facebook developers
						realized that the DOM is slow (The Document Object Model (DOM) is an
						application programming interface (API) for HTML and XML documents.
						It defines the logical structure of documents and the way a document
						is accessed and manipulated.). So, to make it faster, React
						implements a virtual DOM that is basically a DOM tree representation
						in JavaScript. So when it needs to read or write to the DOM, it will
						use the virtual representation of it. Then the virtual DOM will try
						to find the most efficient way to update the browser’s DOM. Unlike
						browser DOM elements, React elements are plain objects and are cheap
						to create. React DOM takes care of updating the DOM to match the
						React elements. The reason for this is that JavaScript is very fast
						and it’s worth keeping a DOM tree in it to speed up its
						manipulation.
					</p>
				</div>
				<div className="blog">
					<h1>What are the differences between props and state ?</h1>
					<p>
						{" "}
						<strong>Props: </strong> Props are known as properties it can be
						used to pass data from one component to another. Props cannot be
						modified, read-only, and Immutable.{" "}
					</p>
					<p>
						<strong>State: </strong>
						The state represents parts of an Application that can change. Each
						component can have its State. The state is Mutable and It is local
						to the component only.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
