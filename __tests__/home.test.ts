import { render, screen } from '@testing-library/react';
import Home from "@/app/page";

// Mocking the `useInfiniteQuery` from `@tanstack/react-query`
jest.mock('@tanstack/react-query', () => ({
  useInfiniteQuery: () => ({
    data: {
      pages: [
        [
          {
            id: '1',
            title: 'Listing 1',
            description: 'Description 1',
            imageSrc: "https://loremflickr.com/640/480/city",
            createdAt: 1698267441,
            category: "category 1",
            roomCount: 25,
            bathroomCount: 71,
            guestCount: 97,
            locationValue: "Bahamas",
            userId: "Green",
            price: "166.00"
          },
          {
            id: "2",
            title: "Listing 2",
            description: "3441 Fiona Gardens",
            imageSrc: "https://loremflickr.com/640/480/city",
            createdAt: 1698267381,
            category: "category 2",
            roomCount: 33,
            bathroomCount: 68,
            guestCount: 34,
            locationValue: "Lithuania",
            userId: "May",
            price: "965.00",
          },
        ],
      ],
    },
    error: null,
    isLoading: false,
    fetchNextPage: jest.fn(),
    hasNextPage: false,
  }),
}));

describe('Home Page', () => {
  it('should display a list of properties', async () => {
    render(<Home />);

    const listing1 = await screen.findByText('Listing 1');
    expect(listing1).toBeInTheDocument();

    const listing2 = await screen.findByText('Listing 2');
    expect(listing2).toBeInTheDocument();
  });
});
