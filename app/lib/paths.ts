export const pathnames = {
  home() {
    return "/";
  },
  topic(slug: string) {
    return `/topics/${slug}`;
  },
  topicCreation() {
    return `/topics/create`;
  },
  post(slug: string, id: string) {
    return `/topics/${slug}/posts/${id}`;
  },
  postCreation(slug: string) {
    return `/topics/${slug}/posts/create`;
  },
  search(query: string) {
    return `/search/?q=${query}`;
  },
};
