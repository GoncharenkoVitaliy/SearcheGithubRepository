import { useAppSelector } from "../hooks/redux";

export default function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-full bg-gray-300">
      <ul className="list-none">
        {favourites.map((f, index) => (
          <li
            key={f}
            className="shadow-md hover:shadow-lg hover:shadow-white hover:bg-slate-200 bg-slate-300 w-auto mb-4 rounded"
          >
            <a href={f} target="_blank" className="block py-5 px-5 w-auto mb-4 max-[501px]:text-sm max-[436px]:text-xs">
              {index + 1}. {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
