import Messages from "@/components/messages";

export default async function MessagesPage() {
  const response = await fetch(
    "http://localhost:8080/messages"
    // ######### Request memoization ##########
    // If we removed the header that is different in both the cases than we only get single response form the next.js server
    // {
    //   headers: {
    //     'X-ID': 'page',
    //   },
    // }
  );
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
