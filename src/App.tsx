import React from "react";
import { Button } from "@BarrelComponents"

export default function App() {
  return (
    <>
      <div>Hello React {process.env.APP_ENV}</div>
      <Button>Click</Button>
    </>
  )
}
