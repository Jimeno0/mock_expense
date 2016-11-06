class RecordForm extends React.Component {
	constructor(){
		super();
		this.state = {
			title: '',
      date: '',
      amount: ''	
		}
	
		this.handleChange = (evt) =>{
			name = evt.target.name;
			this.setState({[name]: evt.target.value})
		}

		this.valid = () =>{
			return this.state.title && this.state.date && this.state.amount
		}
	}


	render(){
		return(
			<div>	
				<h2>Create record</h2>
				<form className="form">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<input type="number" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange}/>
					</div>
					<button className="btn btn-primary"type="submit" disabled={!this.valid()}>Create record</button>
				</form>
			</div>
		);
	}

}
