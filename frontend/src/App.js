import React, { Component } from 'react';
import axios from 'axios';
import Offer from './components/offer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}

		this.toggleProperty = (arr, id, propName) => {
			const idx = arr.findIndex((el) => el._id === id)
			const newItem = { ...arr[idx], [propName]: !arr[idx][propName] }

			const before = arr.slice(0, idx)
			const after = arr.slice(idx + 1)

			const newData = [...before, newItem, ...after]
			return newData
		}

		this.updateProperty = (id, apiUrl, property) => {
			axios.post('http://127.0.0.1:4000/' + apiUrl + id)
				.then((res, err) => {
					if (err) {
						console.log(err);
					} else {
						console.log(res);
					}
				})
			this.setState(({ data }) => {
				return {
					data: this.toggleProperty(data, id, property)
				}
			});
		}
	}
	

	componentDidMount() {
		axios.get('http://127.0.0.1:4000/offers')
			.then((res, err) => {
				this.setState({ data: res.data });
			})
		console.log(this.state.data);
	}

	render() {
		return (
			<div className="App container">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Pizza Name</th>
							<th scope="col">Size (sm)</th>
							<th scope="col">Address</th>
							<th scope="col" colspan="3"></th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((item) => (
							<Offer
								key={item._id}
								{...item}
								confirmOffer={() => this.updateProperty(item._id, "confirm/", "confirmed")}
								declineOffer={() => this.updateProperty(item._id, "decline/", "declined")}
								deliverOffer={() => this.updateProperty(item._id, "deliver/", "delivered")}
							/>
						))}
					</tbody>
				</table>

			</div>
		);
	}
}

export default App;
