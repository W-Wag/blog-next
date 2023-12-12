export const countAllPosts = async (query = '') => {
  const url = `${process.env.POSTS_URL}/count?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.log(res.status);
  }
  return res.json();
};
