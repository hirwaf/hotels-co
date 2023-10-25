"use client"

import MotionDiv from "@/components/motion-div";
import SectionVoid from "@/components/section-void";
import ClientListing from "@/components/listing/client.listing";
import {getListingById} from "@/actions/listing.action";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ listingId }: IParams ) => {
  const listing = await getListingById(listingId);

  if (!listing) {
    return (
      <MotionDiv>
        <SectionVoid />
      </MotionDiv>
    );
  }

  return (
    <MotionDiv>
      <ClientListing
        listing={listing}
      />
    </MotionDiv>
  );
};

export default ListingPage;