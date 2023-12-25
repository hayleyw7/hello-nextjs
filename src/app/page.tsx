import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { Links } from './components/links';
import Image from 'next/image';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const GET_KITTEN_IMAGES = gql`
  query GetRandomKittenImages {
    getRandomKittenImages {
      url
    }
  }
`;

function KittenImages() {
  const { loading, error, data } = useQuery(GET_KITTEN_IMAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.getRandomKittenImages.map((image: string | { url: string }, index: number) => (
        <Image
          src={(typeof image === 'string') ? `https://placekitten.com/g/200/${index}` : image.url}
          alt={`Kitten ${index}`} // Provide a descriptive alt text here
          key={index}
        />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Links />
        <h1>Home</h1>
        <div>
          <KittenImages />
        </div>
      </div>
    </ApolloProvider>
  );
}
