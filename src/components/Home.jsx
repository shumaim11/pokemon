import { PokemonList } from "./PokemonList";

export const Home = () => {
	return (
		<main>
			<div className="container mt-3">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center">Pokemons</h1>
						<div>
							<PokemonList />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};