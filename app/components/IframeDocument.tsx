import { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

export const IframeDocument = (props: Props) => (
  <div className="container">
    <h1 className="text-2xl font-extrabold py-3">
      The IframeDocument component
    </h1>

    <div>{props.children}</div>
  </div>
);
