import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const { shorturl } = await params

    const client = await clientPromise
    const db = client.db("Quicklinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl })
    console.log(doc)

    if (doc) {
        redirect(doc.url)
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
}
