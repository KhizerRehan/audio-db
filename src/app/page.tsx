"use client"

import { Route } from "@/components/shared/sidebar/route"


const App = () => {
  return (
    <main className="h-full w-full]">
      <ul>
        <li>
          <a href={Route.artistRoute}>Artist</a>
        </li>
        <li>
          <a href={Route.albumRoute}>Album</a>
        </li>
      </ul>
    </main>
  )
}

export default App
