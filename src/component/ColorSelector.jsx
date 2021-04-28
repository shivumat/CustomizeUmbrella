import React from 'react'
import colors from '../config/colors'

const ColorSelector = (props) => {

    const {colorKey, setColor, style, setIsLoading} = props;

    const styles = {
        body: {
            ...style,
            display: 'flex'
        },
        dot : (color, slected) =>  {
            return {
                border: `3px solid ${slected ? color.border : color.color}`,
                backgroundColor: `${color.color}`, 
                marginRight: '5px',
                cursor : 'pointer'
            }
        }
    }

    const changeColor = (color) => {
        setIsLoading(false)
        setColor(color)
    }

    const onColorClick = (color) => {
        if(color !== colorKey){
            setIsLoading(true)
            setTimeout(function(){ changeColor(color) }, 1000);
        }
    }

    return <div style={styles.body}>
        {Object.entries(colors)
            .map((color,i) => <div 
                                onClick={() => onColorClick(color[0])}
                                key={`colorDot_${i}`} 
                                className='dot' 
                                style={styles.dot(color[1], colorKey === color[0])}/>
            )}
    </div>
}

export default ColorSelector;