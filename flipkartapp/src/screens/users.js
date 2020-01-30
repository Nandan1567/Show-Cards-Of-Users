import React from 'react';
import axios from 'axios';
import { Button, Card, CardGroup } from 'react-bootstrap';


class User extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            users : []    
        }
        this.refreshList=this.refreshList.bind(this);
        this.delete=this.delete.bind(this);
    }
    refreshList() {
        axios.get("https://gorest.co.in/public-api/users?_format=json&access-token=https://gorest.co.in/public-api/users?_format=json&access-token=xDh01oCQWdEBwF2Zuk5naGiNyi1tw2B1OvtK")
            .then(response => response.data)
            .then(data => {
                this.setState({
                    users: data.result
                }); console.log(this.state.users);
            });
    }
    componentDidMount()
    {
      this.refreshList();
    }
    delete(index){
        const users = this.state.users.filter(i => i.id !== index.id)
        this.setState({users});
        console.log(this.state.index);
      }
    

    alldata(){
        return this.state.users.map((item,index) => (  
            <div key={index}>
            <CardGroup style={{paddingTop:20, paddingLeft:10, paddingRight:10, }}>
                <Card style={{paddingLeft:20, paddingRight:20, paddingTop:20}}>
                    <Card.Img variant="top" style={{width: 200, height: 200}} src={item._links.avatar.href} />
                    <Card.Body>
                        <Card.Title style={{ flexWrap : "nowrap", width: 200}} >{item.first_name}  {item.last_name} </Card.Title>
    
                        <Card.Text style={{ flexWrap: "nowrap", width: 200}} > gender : {item.gender}  </Card.Text>
                        <Card.Text style={{ flexWrap: "nowrap", width: 200}} > dob : {item.dob}  </Card.Text>
                        <Card.Text style={{ flexWrap: "nowrap", width: 200}} > email : {item.email}  </Card.Text>


                        <Card.Text>
                            <Button onClick={() => this.delete(item,index)}variant="info">  <a style={{textDecoration: 'none', color: 'white'}}>Delete</a></Button>                                </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>    
        </div>           
            
            )            
        )
    }


    render(){
        console.log('checking....')
        const x = this.state.users; 
        console.log(x)       
        return(
            <div>
                <div>
                    <h1> Users </h1>
                </div>
                 <div style={{display: 'flex',justifyContent:'flex-start',flexDirection:'row', flexWrap: "wrap"}}>
                        {this.alldata()}
                    </div>  
                 
                 
            </div>
        )
    };
}

export default User;