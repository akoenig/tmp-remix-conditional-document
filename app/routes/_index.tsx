import type { V2_MetaFunction } from "@remix-run/node";

import { Document } from "~/components/Document";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Utilizes the Document Component" }];
};

export default function Index() {
  return <Document>Hello, Document</Document>;
}
