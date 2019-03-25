import React, { useState } from 'react';
import './Forme.css';

var Form = props => {
	const initialFormState = { id: null, name: '', username: '', detail: '', fich:''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

        setUser({ ...user, [name]: value })
        
	}


	return (
	<div className="container" id="formul">
        <div id="form" >
            <form 
                onSubmit={event => {
                    event.preventDefault()
                    if (!user.name || !user.username || !user.detail || !user.fich) return
                    if (isNaN(user.username)){
						document.getElementById("erreur").innerHTML="Entrer un nombre"
					}else{
						document.getElementById("erreur").innerHTML=""
						props.addUser(user)
						props.setCount(props.count +1)
						setUser(initialFormState)
					}
                }}
                >
                
                <table id='za'>
                <tr>
                    <td><label id="l1" for="inputEmail3" class="col-sm-2 col-form-label">Produit</label></td>
                    <td><input type="text" name="name" value={user.name} onChange={handleInputChange} /></td><br></br>
                </tr>
                <tr>
                    <td><label className="deplacer" for="inputEmail3" class="col-sm-2 col-form-label" id='laza'>Prix</label></td>
                    <td><input id="gras" type="text" name="username" value={user.username} onChange={handleInputChange} /></td>
                </tr>
                <tr id="erer">
                    <td><p id="erreur"></p></td>
                </tr>
                <tr>
                    <td><label className="deplacer" for="inputEmail3" class="col-sm-4 col-form-label" id="li">Description</label></td>
                    <td><textarea  type="textarea" name="detail" value={user.detail} onChange={handleInputChange} ></textarea></td><br></br>
                </tr>
                </table>
                <tr>
                    <td><span class="btn btn-secondary btn-file">File <input type="file" name="fich" value={user.fich} onChange={handleInputChange}/></span></td>
                </tr>
                <tr id="ajout">
                    <td><button className ="btn btn-info deplacer" id="ajout">Ajouter</button></td>
                </tr>
            </form>
        </div>
	</div>
	)
}



export default Form