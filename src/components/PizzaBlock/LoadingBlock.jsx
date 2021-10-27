import React from 'react'

import ContentLoader from "react-content-loader"


function LoadingBlock() {
    return (
        <ContentLoader
        className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="135" cy="132" r="123" />
            <rect x="0" y="269" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="304" rx="6" ry="6" width="280" height="84" />
            <rect x="2" y="408" rx="6" ry="6" width="74" height="27" />
            <rect x="139" y="403" rx="25" ry="25" width="138" height="47" />
        </ContentLoader>
    )
}

export default LoadingBlock
