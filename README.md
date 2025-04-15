# Caching

Next.js 14 performs very aggresive caching.
Next.js 15 performs less aggresive caching as some caching behaviour and defaults were changed.

Kinds of caching :

## Request Memoization:

Next.js stores data requests with the same configuration, This avoids unnecessary duplicate data requests to a data source for a single request that's handled by the Next.js server.

## Data cache:

Data cache is about storing and reusing data that has been fetched from a data source if it hasn't changed.
This avoids unnecessary requests to the data source and speeds up the application.
The cache persists until it is revalidated (manually or after a set time).

## Full route cache:

Next.js stores the rendered HTML and React server components at build time.
This avoids unnecessary HTML render cycle and data fetches.
The cache persists until the related data cache is revalidated.

## Router cache:

Managed on the client side.
Next.js stores some React server component payloads in the memory of browser it does that so that the navigation between the pages can happen faster.

revalidated when new pages are rendered by the server or whenever we leavr the page or website and visit it again.
