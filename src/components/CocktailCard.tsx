import { Link } from "react-router-dom";

export default function CocktailCard({ cocktail }: { cocktail: any }) {
  return (
    <li>
      <div>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <h3>
        <Link
          to={`/id/${cocktail.idDrink}/${cocktail.strDrink
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          {cocktail.strDrink}
        </Link>
      </h3>
    </li>
  );
}
