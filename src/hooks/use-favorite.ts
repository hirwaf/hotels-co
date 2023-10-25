import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

type Props = {
  listingId: string;
};

function useFavorite({ listingId }: Props) {
  const router = useRouter();

  const hasFavorite = useMemo(() => {
    const list: string | string[] = [];

    return list.includes(listingId);
  }, [listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      try {
        router.refresh();
        toast.success("Success");
      } catch (error: any) {
        toast.error("Something Went Wrong");
      }
    },
    [hasFavorite, listingId]
  );

  return {
    hasFavorite,
    toggleFavorite,
  };
}

export default useFavorite;
