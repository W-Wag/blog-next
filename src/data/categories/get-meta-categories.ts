export const getMetaCategories = async (slug: string | string[]) => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${process.env.API_URL}/categories?populate=deep&filters[name][$eqi]=${slugString}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.log(res.status);
  }
  const response = res.json();
  return response;
};
