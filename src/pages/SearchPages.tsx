import React, { useEffect, useState } from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";
import useDebounce from "../hooks/useDebounce";
import Loading from "../UI/Loading/Loading";
import RepoCard from "../components/RepoCard";

export default function SearchPages() {
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
    <div className="flex flex-col items-center fd-column pt-10 mx-auto h-full w-screen bg-gray-200">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      <div className="relative">
        <form className="flex flex-col ">
          <input
            name="enter"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border py-2 px-4 h-[42px] mb-2 mx-auto active:shadow-md active:bg-gray-100 border-md w-full max-[570px]:w-11/12"
            placeholder="Search for Github username . . ."
          />
        </form>
        {dropdown && (
          <ul className="mx-0 px-0 absolute top-[44px] max-h-[300px] overflow-y-scroll mx-auto shadow-md bg-white w-full max-[570px]:w-11/12:ml-5">
            {isLoading && <p className="text-center">{<Loading />}</p>}
            {data?.map((user) => (
              <li
                key={user.id}
                onClick={() => {
                  clickHandler(user.login);
                }}
                className="list-none py-2 px-4  hover:bg-gray-200 hover:text-gray-600 transition-colors cursor-pointer"
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
