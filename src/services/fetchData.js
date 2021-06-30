const getArticles = async () => {
  try {
    const res = await fetch('');
    const data = await res.json();
    console.log(res);

    return data;
  } catch (err) {
    console.error('getArticles error:', err);
  }
};

export default getArticles;
