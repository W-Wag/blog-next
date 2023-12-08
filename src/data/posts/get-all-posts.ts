export const getAllPosts = async () => {
  const res = await fetch(`${process.env.POSTS_URL}`);
  if (!res.ok) {
    console.log(res.status);
  }
  return res.json();
};
