import React from 'react'
import colors from '../config/colors'

const CustomUmbrella = (props) => {

    const {customImage, colorType, isLoading} = props;

    const styles = {
        umbrella : {
            width : '60%',
            marginLeft : '12%',
        },
        loading : {
            width : 60,
            marginLeft : '45%',
            marginTop : '15%',
        },
        customImage : {
            width: 50, 
            right: '33%',
            bottom: '25px',
            position: 'relative'
        }
    }

    return <div>
        {isLoading ? <img className='loading' style={styles.loading} src={colors[colorType].loader}/> : 
        <>
        <img style={styles.umbrella} src={colors[colorType].umbrella}/>
        {customImage && <img src={customImage} style={styles.customImage}/>}
        </>
}
    </div>
}

export default CustomUmbrella;