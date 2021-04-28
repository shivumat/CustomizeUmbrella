import React, { useEffect, useState } from 'react'
import ColorSelector from '../component/ColorSelector'
import CustomUmbrella from '../component/CustomUmbrella'
import UploadButton from '../component/UploadButton'
import colors from '../config/colors'

const Umbrella = () => {

    const [color , setColor] = useState('PINK')
    const [customImage , setCustomImage] = useState(null)
    const [customImageName , setCustomImageName] = useState(null)
    const [fileTypeError , setFileTypeError] = useState(false)
    const [isLoading , setIsLoading] = useState(false)

    const validFileTypes = ['image/png', 'image/jpeg'];
    const fileSizeLimit = 5;

    const styles = {
        body : {
            backgroundColor: `rgb(${colors[color].rgb},0.3)`
        },
        container : {
            top: '30%',
            height: '70%',
            position: 'relative'
        },
        content : {
            display : 'flex'
        },
        left : {
            float: 'left',
            width: '60%',
        },
        right : {
            float: 'right',
            width: '40%',
        },
        h1 : {
            fontWeight: '600',
            fontSize : '40px',
            marginBottom : '40px'
        },
        h2 :{
            fontWeight: '500',
            fontSize : '18px',
            marginBottom : '10px'
        },
        h3 :{
            fontWeight: '400',
            fontSize : '15px',
            marginBottom : '10px'
        },
        h4 :{
            fontWeight: 'lighter',
            fontSize : '15px',
            marginBottom : '15px',
            color : `${fileTypeError ? 'red' : 'black'}`
        },
        colors : {
            marginBottom : '40px'
        }
    }

    return <div style={styles.body} className="Umbrella">
                <div style={styles.container}>
                    <div style={styles.content}>
                        <div style={styles.left}>
                            <CustomUmbrella 
                                isLoading={isLoading} 
                                colorType={color} 
                                customImage={customImage} />
                        </div>
                        <div style={styles.right}>
                            <div style={styles.h1}>Custom Umbrella</div>
                            <ColorSelector 
                                setIsLoading={setIsLoading} 
                                style={styles.colors} 
                                colorKey={color} 
                                setColor={setColor}/>
                            <div style={styles.h2}>Customise your Umbrella</div>
                            <div style={styles.h3}>Upload a logo for instant preview.</div>
                            <div style={styles.h4}>.png and .jpg files only. Max file size is 5Mb.</div>
                            <UploadButton 
                                setFileTypeError={setFileTypeError}
                                setIsLoading={setIsLoading}
                                validFileTypes={validFileTypes}
                                fileName={customImageName}
                                setImageName={setCustomImageName}
                                setImage={setCustomImage}
                                fileSizeLimit={fileSizeLimit}/>
                        </div>
                    </div>
                </div>
        </div>
}

export default Umbrella;