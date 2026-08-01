import { useQuery } from "@tanstack/react-query";
import { problemApi } from "../api/problem";

export const useAllProblems = () => {
  return useQuery({
    queryKey: ["allProblems"],
    queryFn: problemApi.getAllProblems,
  });
};

export const useProblemById = (id) => {
  return useQuery({
    queryKey: ["problem", id],
    queryFn: () => problemApi.getProblemById(id),
    enabled: !!id,
  });
};
