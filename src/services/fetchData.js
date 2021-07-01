const getArticles = async (searchingFor) => {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${searchingFor}&token=${process.env.REACT_APP_GNEWS_TOKEN}&lang=en&max=9`
    );
    const data = await res.json();

    console.log(res);
    return data;
  } catch (err) {
    console.error('getArticles error:', err);
  }
};

export default getArticles;
