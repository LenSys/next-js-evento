import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const buttonStyles =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm";

type PaginationControlsProps = {
  previousPagePath: string;
  nextPagePath: string;
};

export default function PaginationControls({
  previousPagePath,
  nextPagePath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPagePath && (
        <Link href={previousPagePath} className={buttonStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      )}
      {nextPagePath && (
        <Link href={nextPagePath} className={`ml-auto ${buttonStyles}`}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
