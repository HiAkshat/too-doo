"use client"
import { useSession } from "next-auth/react"
import useSWR from "swr"

const fetcher = (url) => fetch(url, {
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_AUTH_KEY
  }
}).then((res) => res.json());

export const GetUserNotes = () => {
  const session = useSession()

  const apiEndpoint = session.status === 'authenticated' ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes/user/${session.data.user.email}?sort=-createdAt&api_key=thisisthekey` : null;
  const { data, error, isLoading } = useSWR(apiEndpoint, fetcher, {
    revalidateOnFocus: true, // Revalidate when the tab/window is focused
    revalidateOnReconnect: true, // Revalidate when the network reconnects
    refreshInterval: 3000, // Set your desired interval in milliseconds
  });

  return {data, error, isLoading}
}