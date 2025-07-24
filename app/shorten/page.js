"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6">
        <h1 className="font-bold text-3xl text-purple-700 text-center">
          ✂️ URL Shortener
        </h1>

        <p className="text-center text-gray-600">
          Paste your long URL and enter a custom short text to generate a short
          and shareable link.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={url}
            placeholder="Enter your long URL"
            onChange={(e) => seturl(e.target.value)}
            className="px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            value={shorturl}
            placeholder="Enter custom short path (e.g., mylink)"
            onChange={(e) => setshorturl(e.target.value)}
            className="px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={generate}
            className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Generate Short URL
          </button>
        </div>

        {generated && (
          <div className="mt-4 text-center">
            <span className="font-semibold text-purple-700">Your Link: </span>
            <code className="text-blue-600 underline break-words">
              <Link href={generated} target="_blank">
                {generated}
              </Link>
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
