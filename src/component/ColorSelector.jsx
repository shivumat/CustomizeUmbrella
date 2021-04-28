import React from 'react'
import colors from '../config/colors'

const ColorSelector = (props) => {

    const {colorKey, setColor} = props;

    const styles = {
        body: {
            display: 'flex'
        },
        dot : (color, slected) =>  {
            return {
                border: `3px solid ${slected ? color.border : color.color}`,
                backgroundColor: `${color.color}`, 
                marginRight: '5px',
            }
        }
    }

    return <div style={styles.body}>
        {Object.entries(colors)
            .map((color,i) => <div 
                                onClick={() => setColor(color[0])}
                                key={`colorDot_${i}`} 
                                className='dot' 
                                style={styles.dot(color[1], colorKey === color[0])}/>
            )}
    </div>
}

export default ColorSelector;