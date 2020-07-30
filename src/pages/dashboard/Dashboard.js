import React, { useState } from 'react';

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
	
	const headerStyle = {top: 0, zIndex: 1, color: '#033C73', textTransform: 'uppercase', padding: '16px 3px'};
	return (
		<>
			<div 
				className="position-absolute h-100 w-100 d-flex flex-wrap
						justify-content-center align-items-center pb-2 bg-info overflow-auto"
			>
				<h4
					className="position-sticky w-100 text-center bg-light"
					style={window.innerWidth > 576 ? headerStyle : {...headerStyle, fontSize: '3vh', opacity: 0.95}}
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
							<tbody>
								<tr>
									<th
										colSpan="2"
										className="text-center font-weight-bold bg-light text-info"
										style={{backgroundColor: '#e3ebff'}}
									>
										<div>
											{name}<br/>
											{subname}
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

			{isOpenPortModal && (
				window.innerWidth > 768
					? <PortModal closeModal={closeModal} portCode={currentPort} />
					: <MobilePortModal closeModal={closeModal} portCode={currentPort} />
			)}
		</>
	);
};

export default Dashboard;
