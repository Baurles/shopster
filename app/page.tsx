"use client";
import Background from "@/components/Background";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import ItemsLayout from "@/components/ui/ItemsLayout";

export default function Home() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const fetchData = () => {
    //   fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
    //     .then((res) => res.json())
    //     .then((json) => {
    //       setData(json);
    //       console.log(json);
    //     });
    // };

    // return () => fetchData();
    setIsLoading(true);
    const fetchData: () => Promise<void> = async () => {
      let res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${offset}`
      );
      let responseData = await res.json();
      setIsLoading(false);
      console.log(responseData.products);
      setData((prev) => {
        return [...prev, ...responseData.products];
      });
    };
    fetchData();
  }, [offset]);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        setOffset(offset + 20);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div className="container  h-full w-full relative flex flex-col justify-start items-center bg-gray-200">
      <Header />
      {data && <ItemsLayout data={data} />}
      {isLoading && (
        <div className="m-auto text-lg font-extrabold">Loading....</div>
      )}
    </div>
  );
}
