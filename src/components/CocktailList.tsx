import { useCocktails } from "../hooks/useCocktails";
import CocktailCard from "./CocktailCard";

interface Cocktail {
  idDrink: string;
}

export default function CocktailList() {
  const { data, error } = useCocktails();

  if (error) return <p>Failed to load cocktails.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul className="products">
      {data.drinks.map((cocktail: Cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </ul>
  );
}
