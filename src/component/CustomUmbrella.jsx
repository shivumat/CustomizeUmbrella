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
        }
    }

    return <div>
        {isLoading ? <img className='loading' style={styles.loading} src={colors[colorType].loader}/> : 
        <img style={styles.umbrella} src={colors[colorType].umbrella}/>}
        {customImage && <img src={customImage} style={{width: 50, height: 50}}/>}
    </div>
}

export default CustomUmbrella;