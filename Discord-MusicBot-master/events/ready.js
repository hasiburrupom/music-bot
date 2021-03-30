module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Aurora_Ar🕊", {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
