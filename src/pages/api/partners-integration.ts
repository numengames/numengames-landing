import axios from 'axios';

const baseURL = 'https://integrations-api.numinia.xyz/api/v1';

export async function createConversation(params) {
  const url = `${baseURL}/conversation/`;

  try {
    await send({ url, bodyParams: params });
  } catch (error) {
    console.error('Error creating conversation:', error);
  }
};

export async function handleAssistantMessage(conversation_id, message) {
  const params = {
    message,
    role: 'user',
  };

  const url = `${baseURL}/openai/conversation/assistant/text/${conversation_id}`;

  try {
    const response = await send({ url, bodyParams: params });
    return response;
  } catch (error) {
    console.error('Error handling message:', error);
  }
};

const send = async ({ url, method = 'POST', bodyParams = {} }) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios({ url, method, headers, data: bodyParams });
    return response.data;
  } catch (error) {
    console.error('Error sending request:', error);
    throw error;
  }
};

export default {};
