import Head from 'next/head';
import { GetStaticProps } from 'next';

import { VehicleProvider } from '../contexts/VehicleContext';
import { api } from '../services/api';

import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { VehiclesList } from '../components/VehiclesList';
import { VehiclesDetails } from '../components/VehiclesDetails';

import { Container } from '../styles/pages/Home';
import { ModalVehicleIU } from '../components/ModalVehicleIU';

interface Vehicle {
	id: string;
	vehicle: string;
	brand: string;
	year: number;
	sold: boolean;
	description: string;
}

interface HomeProps {
	vehicles: Vehicle[];
}

export default function Home({ vehicles }: HomeProps) {
	return (
		<>
			<Head>
				<title>Fullstack</title>
			</Head>
			<VehicleProvider staticVehicles={vehicles}>
				<Container>
					<Header />
					<main>
						<PageTitle title="Veículo" />
						<div>
							<VehiclesList />
							<VehiclesDetails />
						</div>
					</main>
				</Container>

				<ModalVehicleIU />
			</VehicleProvider>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await api.get('veiculos');
	const { vehicles } = response.data;

	return {
		props: {
			vehicles,
		},
		revalidate: 5,
	};
};
