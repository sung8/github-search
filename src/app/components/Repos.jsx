"use client";
import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Repos = ({ reposUrl }) => {
  const toast = useToast();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  console.log("repos here", repos);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(reposUrl);
        const data = await res.json();
        if (data.message) throw new Error(data.message);
        setRepos(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true
        });
      }

      fetchRepos();
    };

    fetchRepos();
  }, [reposUrl, toast]);
  return <div>Repos</div>;
};

export default Repos;
