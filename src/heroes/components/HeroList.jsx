import { HeroCard } from "./";
import { getHeroesByPusblisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(()=>getHeroesByPusblisher(publisher),[publisher]);

  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
