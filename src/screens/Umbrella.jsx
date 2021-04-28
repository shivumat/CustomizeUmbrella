import React, { useEffect, useState } from 'react'
import ColorSelector from '../component/ColorSelector'
import colors from '../config/colors'

const Umbrella = () => {

    const [color , setColor] = useState('PINK')

    const styles = {
        body : {
            backgroundColor: `rgb(${colors[color].rgb},0.3)`
        },
        container : {
            margin : 'auto'
        }
    }

    return <div style={styles.body} className="Umbrella">
                <div style={styles.container}>
                    <ColorSelector colorKey={color} setColor={setColor}/>
                </div>
        </div>
}

export default Umbrella;