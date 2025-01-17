"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form className="w-full sm:[w-580px]" onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition"
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </form>
  );
}
