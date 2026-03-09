import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const links = [
  { label: "Writing", href: "/posts/" },
  { label: "Reviews", href: "/books/" },
  { label: "Now", href: "/now" },
]

const SiteNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <nav class="site-nav">
      {links.map((link) => (
        <a href={`${baseDir}${link.href.replace(/^\//, "")}`}>{link.label}</a>
      ))}
    </nav>
  )
}

export default (() => SiteNav) satisfies QuartzComponentConstructor
