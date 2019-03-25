import React, { Component, Fragment } from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Affichage.css';
import jadore from '../jadore.png';
import verre from '../verre.jpeg'



class Affichage extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  addJaime(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render(){
    return(
          <div className="card-group row">
          {
            this.props.users.map(user => (
          <div key = {user.id} className="col-md-4">
            <Fragment>
                <div className="card" id="produit">
                    <img src={verre} class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text" id="point">{user.detail}</p>
                                <p className="card-text" id="number">{user.username}Ar</p>
                                
                                
                              <div className="card-footer">
                                <tr id="coms">
                                    <td><p className="text-muted">{this.state.count}<span onClick={() => this.addJaime()}><img src={jadore} width="20" height="20" alt="jaime"/></span></p></td>
                                    <td><spam onClick={
                                      ()=>{
                                        confirmAlert({
                                          customUI: ({onClose}) => {
                                              return (
                                                  <form id='ID'>
                                                  <div class="sss">
                                                 
                                                     <textarea></textarea>
                              
                                      <p id="sss" class="r"></p>
                                                  </div>
                                                  </form>
                                              )
                              
                                          }
                              
                                      })
                                      }
                                    }>Comment</spam></td>
                                </tr>
                              </div>
                    </div>
                </div>
              
              </Fragment>
            </div>
                            
            )
                    )}
                    
      
      </div>
    )
  }
   
}




export default Affichage;