import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'

import Home from '../../components/Home'
import Stuff from '../../components/Stuff'
import Contact from '../../components/Contact'

import css from './design.css'

class App extends Component {
	render() {
		return(
			<div className={css.appWrapper}>
				<h1>Simple SPA</h1>
				<ul className={css.header}>
					<li><IndexLink to="/" activeClassName={css.active}>Home</IndexLink></li>
					<li><Link to="/stuff" activeClassName={css.active}>Stuff</Link></li>
					<li><Link to="/contact" activeClassName={css.active}>Contact</Link></li>
				</ul>
				<div className={css.content}>
					{this.props.children}
				</div>
			</div>
		)
	}	
}

var appContainer = document.querySelector("#app");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="stuff" component={Stuff} />
			<Route path="contact" component={Contact} />
		</Route>
	</Router>,
	appContainer
);
