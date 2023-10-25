import {Listing} from "@/types/listing";

export async function getListings({ pageParam = 1 }): Promise<Listing[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/listings?page=${pageParam}limit=20`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function getListingById(listingId?: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/listings/${listingId}`);
    console.log(response.url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}
