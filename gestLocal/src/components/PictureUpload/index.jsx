import React, { useState } from 'react'
import Input from '../Input'
import BtnPrimary from '../ButtonPrimary'
import { addPicture } from '../../services/pictureServices'
import { useAuth } from '../../auth/AuthProvider'
import { useTranslation } from 'react-i18next'
function PictureUpload({ onSuccess }) {
    const { user } = useAuth();
    const [file, setFile] = useState(null)

    const { t } = useTranslation("common");
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', file); // 👈 Doit correspondre à upload.single('file') dans le backend
        data.append('userId', user._id);
        addPicture(data).then((result) => {
            alert("✅ Property uploaded successfully")
            onSuccess()
        }).catch((err) => {
            alert("😵", err);
        })
    }
    const handleChange = (e) => {
        const { files } = e.target;
        setFile(files[0]);
    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)} onChange={(e) => { handleChange(e) }}>
                <Input type="file" name="file" placeholder="choisir une image" />
                <BtnPrimary text={t('submit')} />
            </form>
        </div>
    )
}

export default PictureUpload