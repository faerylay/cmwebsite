import React from 'react';

const TableContainer = ({ filterdData, deleteList, editList }) => {
	return (
		<table className="table-container">
			<thead>
				<tr>
					<th>No.</th>
					<th>name</th>
					<th>age</th>
					<th>city</th>
					<th>occupation</th>
					<th>action</th>
				</tr>
			</thead>

			<tbody>
				{filterdData.map((item, index) => {
					return (
						<tr key={index}>
							<td>
								<span>{index + 1}</span>
							</td>
							<td onClick={() => {}}>
								<span>{item?.name}</span>
							</td>
							<td>
								<span>{item?.age}</span>
							</td>
							<td>
								<span>{item?.city}</span>
							</td>
							<td>
								<span>{item?.occupation}</span>
							</td>
							<td>
								<button onClick={() => deleteList(item?._id)}>Delete</button>
								<button onClick={() => editList(item, item?._id)}>Update</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TableContainer;
