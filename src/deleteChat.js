async function deleteChat(phoneNumber, client) {
  try {
    const chat = await client.getChatById(phoneNumber);
    const deleteRes = await chat.delete();
    if (deleteRes) {
      return `successfully deleted`;
    } else {
      throw new Error("something went wrong");
    }
  } catch (err) {
    if (err.message.includes("Cannot read property 'serialize' of undefined")) {
      throw new Error(`do not have chat history`);
    }
    // Handle other errors
    throw err;
  }
}

module.exports = deleteChat;
