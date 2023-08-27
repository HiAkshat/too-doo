"use client"
import { useSession } from "next-auth/react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());

export const GetUserNotes = () => {
  const session = useSession()

  const apiEndpoint = session.status === 'authenticated' ? `http://localhost:5000/api/v1/notes/user/${session.data.user.email}?sort=-createdAt&api_key=thisisthekey` : null;
  const { data, error, isLoading } = useSWR(apiEndpoint, fetcher, {
    revalidateOnFocus: true, // Revalidate when the tab/window is focused
    revalidateOnReconnect: true, // Revalidate when the network reconnects
    refreshInterval: 3000, // Set your desired interval in milliseconds
  });

  return {data, error, isLoading}
}