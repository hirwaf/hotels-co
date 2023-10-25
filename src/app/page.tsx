"use client"

import MotionDiv from "@/components/motion-div";
import Container from "@/components/container";
import {getListings} from "@/actions/listing.action";
import CardListing from "@/components/listing/card.listing";
import {useEffect, useState} from "react";
import {Listing} from "@/types/listing";

interface HomeProps {
  searchParams: {};
}
export default async function Home({}: HomeProps) {
  const [data, setData] = useState<Listing[]|null>(null);

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        const data_ = await getListings({ pageParam: 1});
        setData(data_);
      }
      fetchData();
    }
  }, [data]);

  return (
    <MotionDiv>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {
            data?.map((listing) => (
              <CardListing
                key={listing.id}
                data={listing}
              />
            ))
          }
        </div>
      </Container>
    </MotionDiv>
  )
}
