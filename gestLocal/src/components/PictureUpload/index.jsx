import React, { useState } from 'react'
import Input from '../Input'
import BtnPrimary from '../ButtonPrimary'
import { addPicture } from '../../services/pictureServices'
import { useAuth } from '../../auth/AuthProvider'
function PictureUpload({ onSuccess }) {
    const { user } = useAuth();
    const [file, setFile] = useState(null)
    const data = new FormData();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file)
        const data = new FormData();
        data.append('file', file); // 👈 Doit correspondre à upload.single('file') dans le backend
        data.append('userId', user._id);
        console.log("data", data.getAll("file"))
        addPicture(data).then((result) => {
            onSuccess()
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleChange = (e) => {
        console.log("efeefefe");
        const { files } = e.target;
        setFile(files[0]);
    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)} onChange={(e) => { handleChange(e) }}>
                <Input type="file" name="file" placeholder="choisir une image" />
                <BtnPrimary text="Soumettre" />
            </form>
        </div>
    )
}

export default PictureUpload