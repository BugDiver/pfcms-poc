import React from "react"
import renderer from "react-test-renderer"
import Header from "../Header/header"

describe("Header", function () {
  it("should render heading", function () {
    const tree = renderer
      .create(
        <Header
          data={{ site: { siteMetadata: { title: "a", description: "b" } } }}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
