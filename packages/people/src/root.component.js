import React from "react";
import { Refine } from "@pankod/refine-core";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { Layout } from "@pankod/refine-antd";

export default function Root(props) {
  return (
    <Refine
      routerProvider={routerProvider}
      Layout={Layout}
      resources={[{ name: "posts" }]}
      dataProvider={dataProvider}
    />
  );
}
