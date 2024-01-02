import React, { useEffect, useState } from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";
import useDebounce from "../hooks/useDebounce";
import Loading from "../UI/Loading/Loading";
import RepoCard from "../components/RepoCard";

export default function HomePages() {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search, 1000);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 0 && data?.length! > 0);
  }, [debounced]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <div className="flex flex-col items-center fd-column pt-10 mx-auto min-h-screen w-screen bg-gray-200">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      <div className="relative w-[560px]">
        <form className="flex flex-col items-center">
          <input
            name="enter"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border py-2 px-4 w-4/5 h-[42px] mb-2 mx-auto active:shadow-md active:bg-gray-100 border-md sm:w-full"
            placeholder="Search for Github username . . ."
          />
        </form>
        {dropdown && (
          <ul className="mx-auto absolute top-[44px] w-4/5 left-0 right-0 max-h-[300px] overflow-y-scroll shadow-md bg-white sm:w-full">
            {isLoading && <p className="text-center">{<Loading />}</p>}
            {data?.map((user) => (
              <li
                key={user.id}
                onClick={() => {
                  clickHandler(user.login);
                }}
                className="list-none py-2 px-4 hover:bg-gray-200 hover:text-gray-600 transition-colors cursor-pointer w-[560px]"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
        <div className="container">
          {areReposLoading && (
            <p className="text-center">Repos are loading ...</p>
          )}
          {repos?.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
