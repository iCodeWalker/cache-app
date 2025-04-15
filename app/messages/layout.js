export default async function MessagesLayout({ children }) {
  const response = await fetch(
    "http://localhost:8080/messages"
    // ######### Request memoization ##########
    // If we removed the header that is different in both the cases than we only get single response form the next.js server
    // {
    //   headers: {
    //     'X-ID': 'layout',
    //   },
    // }
  );
  const messages = await response.json();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
