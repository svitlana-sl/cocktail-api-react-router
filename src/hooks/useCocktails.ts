import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCocktails() {
  return useSWR(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon",
    fetcher
  );
}

export function useCocktailDetails(id: string) {
  return useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );
}
