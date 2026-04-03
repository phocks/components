import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { poweredBy } from "hono/powered-by";
import { logger } from "hono/logger";
import { Fragment } from "hono/jsx";

const app = new Hono();

app.use(poweredBy());
app.use(logger());

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  );
};

app.use("*", async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html>
        <head></head>
        <body>{content}</body>
      </html>,
    );
  });
  await next();
});

app.get("/page", (c) => {
  return c.html(<View />);
});

app.get("/api/hello", (c) => {
  return c.json({
    ok: true,
    message: "Hello Hono!",
  });
});

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Fragment>
      <p>Hello World!!</p>
    </Fragment>
  );
};

app.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

Deno.serve(app.fetch);
