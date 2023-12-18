export type CategoryAttributesData = {
  name: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CategoryData = {
  id: number;
  attributes: CategoryAttributesData;
};

export type GetCategoriesData = {
  data: CategoryData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
