

class Records extends React.Component {

	render(){
		return(
			<div className="records container">
      	<h2 className="title"> Records </h2>
      	<List records={this.props.data}/>
      	<RecordForm />
    	</div>
		)
	}
}