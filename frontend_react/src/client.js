import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token: "skmwlaJztPZf7qoG0SOymwpZMgmYnyxULQFuyzdgFQuw4bpiSf0dYEBMjAoBAAUwns00CppPyaMjkjXhAjVlndUfMZ1bXJUj2WkuFtE5woRYRkWWGKXnxkHlRbt5KnI61eBCpYIUqZu4PViHka82auP4KYq95NgJ0srazMha4taZI6qkrgcg",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);