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
	const githubProps = { githubUser, githubRepos, githubFollowers };
	return <GithubContext.Provider value={{ ...githubProps }}>{children}</GithubContext.Provider>;
};

export { GithubContext, GithubProvider };
