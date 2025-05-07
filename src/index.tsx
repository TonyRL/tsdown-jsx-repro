import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

const app = new Hono();

app.use(
  jsxRenderer(({ children }) => <>{children}</>, {
    docType: '<?xml version="1.0" encoding="UTF-8"?>',
    stream: {},
  })
);

app.get("/", (c) => {
  return c.render(<foo:bar/>);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
