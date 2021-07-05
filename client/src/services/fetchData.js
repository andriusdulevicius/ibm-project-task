export const getArticles = async (searchingFor) => {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${searchingFor}&token=${process.env.REACT_APP_GNEWS_TOKEN}&lang=en&max=9`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('getArticles error:', err);
  }
};

const loggerApiUrl =
  process.env.NODE_ENV === 'production'
    ? `https://ibm-project-user-actions.herokuapp.com/api`
    : 'http://localhost:5000/api';
const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const getAllLogData = async () => {
  try {
    const res = await fetch(loggerApiUrl, reqOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('getAllLogData errror', err);
  }
};

export const logSearch = async (value) => {
  try {
    await fetch(`${loggerApiUrl}/logSearch`, {
      method: 'POST',
      body: JSON.stringify(value),
      ...reqOptions,
    });
  } catch (error) {
    console.log('Error occured: ', error);
  }
};

export const logArticle = async (value) => {
  try {
    await fetch(`${loggerApiUrl}/logArticle`, {
      method: 'POST',
      body: JSON.stringify(value),
      ...reqOptions,
    });
  } catch (error) {
    console.log('Error occured: ', error);
  }
};
