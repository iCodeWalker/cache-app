# Caching

Next.js 14 performs very aggresive caching.
Next.js 15 performs less aggresive caching as some caching behaviour and defaults were changed.

Kinds of caching :

## Request Memoization:

Next.js stores data requests with the same configuration, This avoids unnecessary duplicate data requests to a data source for a single request that's handled by the Next.js server.

IMP : Mechanism in Next.js to avoid duplicate requests to the same data source with same request configuration, by configuration means different header in this case.

We don't have to do any extra configurations to have Request Memoization.

Next.js avoids unnecessary requests and instead just sends one request and reuses the response.

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

Full Route cache is created and initialized at the build time.
Next.js pre-renders all the pages that it's able to pre-render (except pages with dynamic values and routes).

export const dynamic = "force-dynamic";

also helps in full route cache.

We should revalidatePath() instead of this "dynamic" const.

revalidatePath() only re validates some piece of the cache.

## Router cache:

Managed on the client side.
Next.js stores some React server component payloads in the memory of browser it does that so that the navigation between the pages can happen faster.

revalidated when new pages are rendered by the server or whenever we leavr the page or website and visit it again.

## We can setup the configuration for Data caching for the whole file

    export const revalidate = 5;

1.  serves the same purpose as revalidate setting on the fetch function.
2.  must be named revalidate as next.js will look for this named variable.
3.  Now we don't have to pass revalidate in the fetch function.
4.  same as next: { revalidate: 5 } in fetch request.

    export const dynamic = "force-dynamic";

5.  default value is auto
6.  same as cache: "no-store"
7.  "force-dynamic" : Always re-fetch all data needed in the file. No data is cached
8.  "force-static" : To force caching, will never fetch any data
9.  unstable_noStore(); same as "force-dynamic" recommends using this over = export const dynamic = "force-dynamic";
10. If we have multiple components in the same page and want to cache data in some components but not in all componentst than we can use this function to disable caching for one specific component.

## On demand caching

1. revalidatePath() // nested path and routes will not have there cache deleted or revalidated, unless we pass 2nd arg , "layout". revalidatePath("/messages", "layout")

if 2nd arg is 'page' than only that page will get revalidated.

To clear cache of all the pages of the site revalidatePath("/", "layout")

2. revalidateTag('msg')

We can assign tags to requests that fetch data that will be cached.

const response = await fetch("http://localhost:8080/messages",{ next: { tags : ['msg'] // These tags are connected to cached data},})

can be used on multiple pages that uses same tags.
