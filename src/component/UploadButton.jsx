import React, { useRef } from 'react'

const uploadSVG = require('../assets/img/upload_icon.svg').default

const UploadButton = (props) => {

    const { fileName, setFileTypeError, validFileTypes, setImageName, setImage} = props
    const hiddenFileInput = useRef(null);
	const handleUploadClick = () => hiddenFileInput.current.click();

    const styles = {
        body : {
            width : '65%',
            backgroundColor : 'cornflowerblue',
            height : '35px',
            cursor : 'pointer',
            color : 'white',
            textAlign : 'center',
            paddingTop : '12px',
            fontSize : '17px',
        },
        name : {
            width : 130,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginLeft : '35%',
            textAlign : 'center',
        },
        upload : {
            height : 15,
            float : 'left',
            marginLeft : '5%',
            marginTop : '1%',
        }
    }

    const uploadImage = (e) => {
		if (e.target.files.length) {
			if(!validFileTypes.includes(e.target.files[0].type)){
                setFileTypeError(true)
                setImageName(null)
                setImage(null)
            }else{
                setFileTypeError(false)
                const [file] = e.target.files;
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setImageName(file.name)
                        setImage(e.target.result)
                        console.log(e.target, file)
                    }
                    reader.readAsDataURL(file);
                  }
            }
		}
	};

    return <div style={styles.body} onClick={handleUploadClick}>
                <img style={styles.upload} className='white-svg' src={uploadSVG}/>
                <div style={styles.name}>{fileName || 'UPLOAD LOGO'}</div>
                <input
					ref={hiddenFileInput}
					style={{ display: 'none' }}
					onChange={uploadImage}
					type="file"
				/>
            </div>
}

export default UploadButton;