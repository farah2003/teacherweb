import React, { Component } from 'react';
import { Menu,Icon, Typography,Button,Card } from 'antd';
import { Select } from 'antd';
import * as firebase from 'firebase'



const { Text, } = Typography;
const { Option } = Select;

class SHome extends Component{

   state={
       sub:"",
       grade:"",
       location:'',
       list:[]

   }


  componentWillMount(){
  
  const db = firebase.firestore();
   
  let newList =[]
  db.collection("teacher").get().then((userSnapshot) => {


    
    userSnapshot.docs.map(doc =>{
    
    let x= doc.data()
console.log('item',x)
    x.id=doc.id
    newList.push(x)    
       } );
  console.log('list',newList)
    this.setState({
      list:newList
    })
    
})
  
  }
  onChange1=(value)=> {
    console.log(`selected ${value}`);
    this.setState({
        location:value
    })
  }
  
  
onSearch1=(val)=> {
    console.log('search:', val);
    
  }
  onChange2=(value)=> {
    console.log(`selected ${value}`);
    this.setState({
        grade:value
    })
  }
  
  
onSearch2=(val)=> {
    console.log('search:', val);
  }
 onChange3=(value)=> {
    console.log(`selected ${value}`);
    this.setState({
        sub:value
    })
    }
  
onSearch3=(val)=> {
    console.log('search:', val);

  }
  filter=()=>{
    console.log('fff')
      const {sub}=this.state
      const {grade}=this.state
      const {location}=this.state
   
      const db = firebase.firestore();
   
      let newList =[]
      db.collection("teacher").where('sub','==',sub).where('city','==',location).where('grade','==',grade).get().then((userSnapshot) => {
  
    
        
        userSnapshot.docs.map(doc =>{
       console.log("map",doc)
        let x= doc.data()
    console.log(x)
        x.id=doc.id
        newList.push(x)    
           } );
      
        this.setState({
          list:newList
        })
        
    })

  }

    move1=()=>{
      let  user = firebase.auth().currentUser;
      console.log(user)
       
       }
  render(){
    const {list}=this.state
    console.log('list',list)
    return( 
     <div >
           <div style={{height:60,width:"100%",marginTop:0,backgroundColor:"#001a33",marginBottom:240}}>
        <div style={{paddingTop:18,float:"right",marginRight:70}}>
        <Icon  type="home" 
         onClick={this.move1}
         style={{ color: 'white',fontSize: '28px',paddingTop:0,marginRight:36 }} />
         
         <Icon  type="message" 
         onClick={this.move1}
         style={{ color: 'white',fontSize: '28px',paddingTop:0,marginRight:36 }} />
         <Icon  type="user" 
         onClick={this.move1}
         style={{ color: 'white',fontSize: '28px',paddingTop:0,marginRight:36 }} />

         <Icon  type="setting" style={{fontSize: '27px', color: 'white' }} />
          </div>
          <div>
          <label className="Label" style={{marginLeft:120 ,paddingTop:60,color:'white',fontFamily: 'Satisfy',fontSize:30}}>Dent Guide</label>
          </div>
        
        </div>

<div>
{/*<Header style={{ background: ' rgb(0, 151, 221)',marginTop: 0,position:"fixed",width:'100%' }}>
            <Icon 
              className="trigger"
              type="user" 
              onClick={this.move1}
              style={{ fontSize: '30px', color: 'black' ,width:100 }}
            
            />
          </Header>
          <nav >
              <img alt="img" style={{marginLeft:0,marginTop:63,width:400,height:320,position:'fixed',marginBottom:500}}src={require("../den1.jpg")} />

       
       
    */}
       </div>  
          <div style={{borderTop:"1px solid #f2f2f2"}}></div>

          <div>
          <Menu
           
            mode="horizontal"
            id="navbar"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '80px',backgroundColor:"green" ,display:'flex',justifyContent:'space-around',alignItems:'center'}}
          >
           
          <Text >filter by</Text>
       
         
                  <Select
   size="large"
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={this.onChange1}
 
    onSearch={this.onSearch1}
    
  >
    <Option value="Gaza">Gaza</Option>
    <Option value="Rafah">Rafah</Option>
    <Option value="NorthGaza">NorthGaza</Option>
  </Select>
  <Select
   size="large"
    showSearch
    style={{ width: 200 }}
    placeholder="Select a grade"
    optionFilterProp="children"
    onChange={this.onChange2}
 
    onSearch={this.onSearch2}
   
  >
    <Option value="tenth">tenth</Option>
    <Option value="eleventh">eleventh</Option>
    <Option value="twelfth">twelfth</Option>
  </Select>
  <Select
   size="large"
    showSearch
    style={{ width: 200 }}
    placeholder="Select subject"
    optionFilterProp="children"
    onChange={this.onChange3}
 
    onSearch={this.onSearch3}
  
  >
    <Option value="Math">Math</Option>
    <Option value="physics">physics</Option>
    <Option value="piology">piology</Option>
    <Option value="chemistry">chemistry</Option>
  </Select>
  <Button type="primary" onClick={this.filter} style={{width:150,height:45}}>
          filter
        </Button>
  </Menu>
                 
      
          </div>

   
          <div style={{backgroundColor:"#e6e6fa"}}>
              {list.map((item,index)=>{
  
       
        return(

          <div style={{paddingTop:100,backgroundColor:'#e6e6fa'}}> 
       
          <div  style={{backgroundColor:"#e6e6fa"}}>
      
        
          <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30,textAlign:"right"}}>{item.Name}</h4> }  style={{ width: 800,height:230 ,marginLeft:220,marginBottom:0, paddingTop:0}}>
                   <div style={{textAlign:"right",display:"flex",height: 200}}>
                   <div style={{float:"right",height: 200,marginLeft:50}}> 
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Name</label>:{item.name} </h3>
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> subject</label>:{item.sub} </h3>
                
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}>grade</label>:{item.grade}</h3>
                
                    <div style={{marginTop:0}}>
          
        </div>
                    </div> 
                    <div style={{float:"left",height: 200,marginLeft:160}}>
                 
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> city  :</label> {item.city}</h3>
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}>Notes :</label>{item.Notes}</h3>
                 
                   
                    
      
          </div>
          
        
          </div>
                    
        
                    </Card>
                 
                     
                    {/* <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>{item.Name}</h4> }  style={{ width: 900,height:200 ,marginLeft:220,marginBottom:40, marginTop:10}}>
                   
                   
                    <label>{item.age}</label><h4>:االعمر</h4><label>16</label>
                    <label>{item.id}</label><h4>:االعمر</h4><label>16</label>
                    
                    
                    <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={()=>this.confirm(item.id)}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
                    <Button  > select this  </Button>
          </Popconfirm>
                    
                    
        </Card>*/}
        
                  </div>
                  </div>
                    )}

                )}   
</div>



  </div>




      
      
  
    )
  }
}

export default SHome;
