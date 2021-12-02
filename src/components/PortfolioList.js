import React from 'react';

const PortfolioList = ({ myPortfolioList }) => {
	return (
		<div className="album py-5 bg-light">
			<div id="myPortfolioList" className="container">
				<div className="post-heading text-center pb-3">
					<h3 className="display-4">My Portfolio</h3>
					<hr className="w-50 mx-auto" />
				</div>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{myPortfolioList.map((portfolio) => (
						<div className="col">
							<div className="card shadow-sm">
								<img
									src={portfolio.img}
									className="card-img-top"
									width="100%"
									height="250"
									alt={portfolio.alt}
								/>
								<div className="card-body">
									<h5 className="card-title">{portfolio.name}</h5>
									<p className="card-text" style={{ height: '110px' }}>
										{portfolio.description}
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<a
												href={portfolio.view}
												className="btn btn-sm btn-outline-secondary"
												target="_blank"
												rel="noreferrer"
											>
												View
											</a>
											<a
												href={portfolio.github}
												className="btn btn-sm btn-outline-secondary"
												target="_blank"
												rel="noreferrer"
											>
												Github
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		// <section id="myPortfolioList" className="container mt-3 pb-3">
		// 	<div className="post-heading text-center pb-3">
		// 		<h3 className="display-4">My Portfolio</h3>
		// 		<hr className="w-50 mx-auto" />
		// 	</div>
		// 	<div className="row">
		// 		{myPortfolioList.map((portfolio) => (
		// 			<div className="col-lg-4 col-md-6 col-12 pb-3">
		// 				<div className="card" key={portfolio.id}>
		// 					<img
		// 						src={portfolio.img}
		// 						className="card-img-top"
		// 						alt="A screenshot of javascript quiz."
		// 					/>
		// 					<div className="card-body">
		// 						<h5 className="card-title">{portfolio.name}</h5>
		// 						<p className="card-text">{portfolio.description}</p>
		// 						<a
		// 							href={portfolio.github}
		// 							className="btn btn-primary"
		// 							target="_blank"
		// 						>
		// 							See Github
		// 						</a>
		// 						<a
		// 							href={portfolio.githubPages}
		// 							className="btn btn-primary"
		// 							target="_blank"
		// 						>
		// 							See Github Pages
		// 						</a>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		))}
		// 	</div>

		// </section>
	);
};

export default PortfolioList;
