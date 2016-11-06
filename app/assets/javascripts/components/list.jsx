class List extends React.Component {
	render(){
		return(
			<table className="table">
				<thead>
					<tr>
				    <th>Date</th>
				    <th>Title</th> 
				    <th>Amount</th>
				  </tr>
				</thead>
				<tbody>
					{
						this.props.records.map(function(record,index){
						return (
							<Record key={index} title={record.title} date={record.date} amount={record.amount}/>
							)
					})}
				</tbody>
			</table>
		);
	}
}