import Link from "next/link"

async function GetRepoCode() {
  const response = await fetch(
    "https://api.github.com/repos/4dave/next13/contents/app/page.js"
  )
  const data = await response.json()
  return data
}

async function GetRepo() {
  const response = await fetch("https://api.github.com/repos/4dave/next13")
  const repo = await response.json()
  return repo
}

export default async function Code() {
  const data = await GetRepoCode()
  const repo = await GetRepo()
  return (
    <div className="code">
      <p>
        <Link href={repo.html_url}>Github Repo</Link>
      </p>
      <pre>
        <code>{Buffer.from(data.content, "base64").toString("ascii")}</code>
      </pre>
    </div>
  )
}
