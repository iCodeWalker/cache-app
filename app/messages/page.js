import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

import { unstable_noStore } from "next/cache";

// ############# We can setup the configuration for Data caching for the whole file ################
// export const revalidate = 5;
// serves the same purpose as revalidate setting on the fetch function.
// must be named revalidate as next.js will look for this named variable.
// Now we don't have to pass revalidate in the fetch function

// export const dynamic = "force-dynamic"; // Always re-fetch all data needed in the file. No data is cached
// "force-static" To force caching, will never fetch any data

export default async function MessagesPage() {
  // unstable_noStore(); same as "force-dynamic"
  // const response = await fetch(
  //   "http://localhost:8080/messages",
  //   // ######## Data cache ##########
  //   {
  //     // cache: "force-cache", // default with next.js 14, most aggresive caching
  //     // cache: "no-store", // default with next.js 15, has multiple req hitting the backend
  //     // cache: "no-store",

  //     // #### next key configurration can only be used in Next.js ####
  //     next: {
  //       revalidate: 5, // number of seconds next.js will reuse the cache data, untill it will revalidate, and throw away the cache.

  //       // ############## On demand cache ################
  //       tags: ["msg"],
  //     },
  //   }
  //   // ######### Request memoization ##########
  //   // If we removed the header that is different in both the cases than we only get single response from the next.js server
  //   // {
  //   //   headers: {
  //   //     'X-ID': 'page',
  //   //   },
  //   // }
  // );

  // const messages = await response.json();

  // ########## Rquest Memoization : For Using custom Database  ##########
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
