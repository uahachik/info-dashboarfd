import React, { useState } from 'react';
import './Dashboard.css';

import airports from '../../data/airports';
import PortModal from '../../components/portmodal/PortModal';
import MobilePortModal from '../../components/mobileportmodal/MobilePortModal';

const Dashboard = () => {
	const [isOpenPortModal, setIsOpenPortModal] = useState(false);
	const [currentPort, setCurrentPort] = useState(null);

	const onOpenModal = code => {
		setIsOpenPortModal(true);
		setCurrentPort(code);
	}

	const closeModal = () => {
    setTimeout(() => {
        setIsOpenPortModal(false);
    }, 400);
	};
	
	return (
		<>
			<div className="dashboard bg-info">
				<h4
					className="dashboard_header bg-light"
					style={{color: '#033C73'}}
				>
					10 world's airports with the heaviest air traffic
				</h4>

				{airports().slice(0, 10).map(port => {
					const { code, name, subname, logo, photo } = port;
					return (
						<table
							key={name.slice(0, 5)}
							className=" position-relative table mx-5"
							style={{height: 357, width: '19em', border: '2px ridge #DDDDFF'}}
							onClick={() => onOpenModal(code)}
						>
							<tbody>
								<tr>
									<th
										colSpan="2"
										className="text-center font-weight-bold bg-light text-info"
										style={{height: 50, backgroundColor: '#e3ebff'}}
									>
										{name}<br/>
										{subname}
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

			{isOpenPortModal && (
				window.innerWidth > 768
					? <PortModal closeModal={closeModal} portCode={currentPort} />
					: <MobilePortModal closeModal={closeModal} portCode={currentPort} />
			)}
		</>
	);
};

export default Dashboard;
