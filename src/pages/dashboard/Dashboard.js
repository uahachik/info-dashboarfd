import React from 'react';

import airports from '../../data/airports';

const Dashboard = () => {
	return (
		<div className="vh-100 d-flex flex-wrap justify-content-center align-items-center my-2">
			{airports().map(port => {
				return (
					<table
						key={port.name.slice(0, 5)}
						className="table mx-4"
						style={{width: '19em', minHeight: 357, border: '2px ridge #DDDDFF'}}
					>
						<tbody>
							<tr>
								<th
									colSpan="2"
									className="text-center font-weight-bold text-info"
									style={{ backgroundColor: '#DDDDFF' }}
								>
									<div>
										{port.name}<br/>
										{port.subname}
									</div>
								</th>
							</tr>
							<tr>
								<td
									colSpan="2"
									className="text-center"
								>
									<img
										alt={port.name}
										src={port.logo.src}
										width={port.logo.width}
									/>
								</td>
							</tr>
							<tr>
								<td
									colSpan="2"
									className="text-center"
								>
									<img
										alt={port.name}
										src={port.photo}
										width='100%'
									/>
								</td>
							</tr>
						</tbody>
					</table>
				);
			})}
		</div>
	);
};

export default Dashboard;
