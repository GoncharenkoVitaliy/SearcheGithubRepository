import React, { useState } from "react";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export default function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    setIsFav(true);

    addFavourite(repo.html_url);
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    setIsFav(false);

    removeFavourite(repo.html_url);
  };

  return (
    <div className="flex items-center border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name.substring(repo.full_name.lastIndexOf('/') + 1)}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Wotchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {isFav ? (
          <button
            onClick={removeFromFavourite}
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          >
            Удалить
          </button>
        ) : (
          <button
            onClick={addToFavourite}
            className="mr-2 py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          >
            Добавить
          </button>
        )}
      </a>
    </div>
  );
}
