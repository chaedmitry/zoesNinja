import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function LadyPic() {
    return (
        <StaticImage 
            className="author-illustration"
            src="../../static/zoe-new.webp"
            alt="Illustration of Zoe"
            placeholder="blurred"	
            quality="100"
            style={{
                display: "block",
            }}
        />
    )
}