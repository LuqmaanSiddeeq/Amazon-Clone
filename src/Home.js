import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="4903850"
						title="The Lean Startup"
						price={249.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
					/>
					<Product
						id="4903852"
						title="Kenwood kMix Stand Mixer"
						price={26.97}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81O+GNdkzKL._AC_SX450_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4903855"
						title="FitBit band"
						price={19.74}
						rating={1}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="4903857"
						title="Amazon Echo "
						price={23.99}
						rating={4}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
					<Product
						id="4903859"
						title="New Apple iPad Pro"
						price={79.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="49038661"
						title="Samsung LED Monitor"
						price={15.74}
						rating={2}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
