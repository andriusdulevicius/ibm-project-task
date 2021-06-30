const getArticles = async (searchingFor) => {
  try {
    const res = await fetch(`https://gnews.io/api/v4/search?q=${searchingFor}&token=f849fde8c575faf29d7d92da12636ee0`);
    const data = await res.json();

    console.log(res);
    return data;
  } catch (err) {
    console.error('getArticles error:', err);
  }
};

export default getArticles;
