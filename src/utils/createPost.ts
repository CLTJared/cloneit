import { useState } from "react";
import { UserArticle } from "../models/models";
import { generateFakeArticle } from "./helpers";

export default function makeArticles(amt: number) {
    const fakeArticles: UserArticle[] = Array(amt).fill(null).map(() => generateFakeArticle())

    const [articles] = useState<UserArticle[]>([...fakeArticles])

    return {articles};
}