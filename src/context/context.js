import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [ githubUser, setGithubUser ] = useState(mockUser);
	const [ githubRepos, setGithubRepos ] = useState(mockRepos);
	const [ githubFollowers, setGithubFollowers ] = useState(mockFollowers);
	const [ requests, setRequests ] = useState(0);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState({ show: false, message: "" });
	const githubProps = { githubUser, githubRepos, githubFollowers, requests, error, isLoading };

	const searchGithubUser = async (user) => {
		try {
			setError({ show: false, message: "" });
			setIsLoading(true);
			const { data } = await axios.get(`${rootUrl}/users/${user}`);
			const { login, followers_url, repo_url } = data;
			setGithubUser(data);
			const response = await Promise.allSettled([
				axios.get(`${repo_url}${login}/repos?per_page=100`),
				axios.get(`${followers_url}?per_page=100`),
			]);
			const [ repos, followers ] = response;
			const status = "fulfilled";
			if (repos.status === status) setGithubRepos(repos.value.data);
			if (followers.status === status) setGithubFollowers(followers.value.data);
			setIsLoading(false);
		} catch (error) {
			if (error.response.status === 404) setError({ show: true, message: "There is no user with that username" });
			console.log("error", error.response);
		}
	};

	const checkRquests = async () => {
		try {
			const { data: { rate: { remaining } } } = await axios.get(`${rootUrl}/rate_limit`);
			setRequests(remaining);
			if (remaining === 0) setError({ show: true, message: "Sorry you have exceeded your hourly limit!" });
		} catch (error) {
			console.log(error.response);
		}
	};
	useEffect(() => {
		checkRquests();
	}, []);
	return <GithubContext.Provider value={{ ...githubProps, searchGithubUser }}>{children}</GithubContext.Provider>;
};

export { GithubContext, GithubProvider };
