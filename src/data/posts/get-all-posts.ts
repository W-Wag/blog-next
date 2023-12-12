export const getAllPosts = async (query = '') => {
  const url = `${process.env.POSTS_URL}?populate=deep&${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.log(res.status);
  }
  return res.json();
};
