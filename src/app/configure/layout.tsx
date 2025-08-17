import MaxWithWrapper from "@/components/MaxWithWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWithWrapper className="flex-1 flex flex-col">{children}</MaxWithWrapper>
  );
};

export default Layout;
