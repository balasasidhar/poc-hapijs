require("dotenv").config();
const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const path = require("path");

const template = require("./templates");
const { Logger } = require("./utils");

import React from "react";
import { renderToString } from "react-dom/server";
import Counter from "./src/components/Counter";

// import Counter from "./src/components";

process.on("unhandledRejection", err => {
  Logger.error(err);
  process.exit(1);
});

(async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000
  });

  await server.register(Inert);

  server.route({
    method: "GET",
    path: "/{path*}",
    handler: (_request, reply) => {
      return template({
        title: "SSR | HapiJS",
        content: renderToString(<Counter />)
      });
    }
  });

  server.route({
    method: "GET",
    path: "/assets/{path*}",
    handler: {
      directory: {
        path: path.join(__dirname, "public")
      }
    }
  });

  await server.start();
  Logger.info(`Server running on ${server.info.uri}`);
})();
