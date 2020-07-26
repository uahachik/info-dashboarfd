import React, { useState } from 'react';

import airports from '../../data/airports';
import ModalForm from '../../components/modalform/ModalForm';

const Dashboard = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [currentPort, setCurrentPort] = useState(null);

	const onOpenModal = code => {
		setIsOpenModal(true);
		setCurrentPort(code);
	}

	const closeModal = () => {
    setTimeout(() => {
        setIsOpenModal(false);
    }, 400);
  };
	return (
		<>
			<div 
				className="position-absolute h-100 d-flex flex-wrap
						justify-content-center align-items-center py-2 bg-info overflow-auto"
			>
				<h4
					className="w-100 text-center bg-light"
					style={{color: '#033C73', textTransform: 'uppercase', padding: '16px 3px'}}
					>
						10 world's airports with the heaviest air traffic
					</h4>

				{airports().slice(0, 10).map(port => {
					const { code, name, subname, logo, photo } = port;
					return (
						<table
							key={name.slice(0, 5)}
							className=" position-relative table mx-5"
							style={{width: '19em', height: 357, border: '2px ridge #DDDDFF'}}
							onClick={() => onOpenModal(code)}
						>
							<tbody >
								<tr>
									<th
										colSpan="2"
										className="text-center font-weight-bold text-info"
										style={{ backgroundColor: '#DDDDFF' }}
									>
										<div>
											{name}<br/>
											{subname} {code}
										</div>
									</th>
								</tr>
								<tr>
									<td
										colSpan="2"
										className="text-center bg-light"
									>
										<img
											alt={name}
											src={logo.src}
											width={logo.width}
										/>
									</td>
								</tr>
								<tr>
									<td
										colSpan="2"
										className="text-center bg-white"
									>
										<img
											alt={name}
											src={photo}
											width='100%'
										/>
									</td>
								</tr>
							</tbody>
						</table>
					);
				})}
			</div>

			{isOpenModal && <ModalForm closeModal={closeModal} portCode={currentPort} />}
		</>
	);
};

export default Dashboard;
