import { useParams } from "react-router-dom";
import { useCocktailDetails } from "../hooks/useCocktails";

export default function CocktailPage() {
  const { id } = useParams();
  const { data, error } = useCocktailDetails(id || "");

  if (error) return <p>Failed to load cocktail details.</p>;
  if (!data) return <p>Loading...</p>;

  const cocktail = data.drinks[0];

  return (
    <main className="product-detail">
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
    </main>
  );
}
