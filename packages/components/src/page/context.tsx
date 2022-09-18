import { createContext, useContext } from "react";

export interface IPageContext {
  pages: {
    path: string;
    label: string;
  }[];
  onNavigate: (path: string) => void;
}

export const PageContext = createContext<IPageContext>({
  pages: [],
  onNavigate: () => {},
});

export const usePageContext = () => {
  return useContext(PageContext);
};
