class Record extends React.Component {
	render(){
		return(
			<tr>
				<td>{this.props.date}</td>
    		<td>{this.props.title}</td>
    		<td>{String(this.props.amount)}</td> 
  		</tr>
		);
	}
}