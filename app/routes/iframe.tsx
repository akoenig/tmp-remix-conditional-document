import type { V2_MetaFunction } from "@remix-run/node";

import { IframeDocument } from "~/components/IframeDocument";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Utilizes the IframeDocument Component" }];
};

export default function Index() {
  return <IframeDocument>Hello, IframeDocument</IframeDocument>;
}
