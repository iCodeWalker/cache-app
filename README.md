# Caching

Next.js 14 performs very aggresive caching.
Next.js 15 performs less aggresive caching as some caching behaviour and defaults were changed.

Kinds of caching :

## Request Memoization:

Next.js stores data requests with the same configuration, This avoids unnecessary duplicate data requests to a data source for a single request that's handled by the Next.js server.

Mechanism in Next.js to avoid duplicate requests to the same data source with same request configuration, by configuration means different header in this case.

## Data cache:

Data cache is about storing and reusing data that has been fetched from a data source if it hasn't changed.
This avoids unnecessary requests to the data source and speeds up the application.
The cache persists until it is revalidated (manually or after a set time).

When fetching data from the backend what next.js does is it will store the response data fetched from there in some internally managed server-side cache, and it will keep using that data forever untill we tell next.js to not do that anymore.

We can tell data to not use the cached data anymore by calling revalidatePath() function.

Alternatively we can also configure the fetch function, and on this configuration obj we can set various settings, i.e. "cache" setting, we can do this configuration on both browser side and server side.

But on server side next.js is actually overriding the default built in function that is provided by the modern node.js and it does so that next.js can find out what cache setting we setup, as it changes the behaviour of next.js cache.

## Full route cache:

Next.js stores the rendered HTML and React server components at build time.
This avoids unnecessary HTML render cycle and data fetches.
The cache persists until the related data cache is revalidated.

## Router cache:

Managed on the client side.
Next.js stores some React server component payloads in the memory of browser it does that so that the navigation between the pages can happen faster.

revalidated when new pages are rendered by the server or whenever we leavr the page or website and visit it again.
