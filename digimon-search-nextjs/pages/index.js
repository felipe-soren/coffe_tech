import React, { useState } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "../components/_layouts/Default";
import { Input } from "antd";

const { Search } = Input;

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function searchDigimon(inputText) {
    if (inputText === "") return;
    try {
      setLoading(true);
      await fetch(
        `https://digimon-api.vercel.app/api/digimon/name/${inputText.toLowerCase()}`
      );
      router.push(`/digimon/${inputText.toLowerCase()}`);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DefaultLayout>
      <Search
        placeholder="input search text"
        enterButton
        loading={loading}
        onSearch={searchDigimon}
      />
    </DefaultLayout>
  );
}
