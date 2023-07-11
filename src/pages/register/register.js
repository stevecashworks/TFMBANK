import styled from 'styled-components';
import logo from '../../assets/center-logo.png'
import {useState,useEffect,useRef} from 'react'
import {BsUpload}  from 'react-icons/bs';
import start_Upload from '../../upload'; 

import './register.css';
import validate_form from './Errors/validate_form';
const Nav=styled.div`
display:flex;
align-items:center;
gap:20px;

`
const CreditCard=styled.div`
background-color: rgba(0, 0, 0, 0.2); /* Set a transparent background color */
  backdrop-filter: blur(10px); /* Apply a blur effect */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  padding: 20px;
  width:250px;
  height:400px;
`
const Logo=styled.div`
display:flex;
align-items:center;
gap:20px;
`
const LogoImg=styled.img`
width:30px;
`
const Container=styled.div`
display:grid;
place-items:center;
height: calc(100vh - 70px);
position:relative;
overflow:hidden;
`
const Visa=styled.div`
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    letter-spacing:3px;
    font-size:20px;
    text-align:center;
  
  
`
const Header=styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding:20px;
box-sizing:border-box;
height:70px;


`
const LogoText=styled.p`
font-size:18px;
color:white;
letter-spacing:2px;
`
const navLinks=[
    {text:"Home", path:"/"},
    {text:"Contact", path:"#"},
    {text:"About us", path:"#"},
    {text:"Support", path:"#"},

]

const Anc=styled.a`
display:block;
color:white;
text-decoration:none;
font-size:14px;
font-weight:400;
`

const BtnsCon=styled.div`
display:flex;
gap:20px;
`
const Btn=styled.button`
color:white;
background-color:rgb(56, 92, 158);
border:none;
border-radius:10px;
opacity:${props=>props.blur?"0.3":"1"};
width:120px;
height:25px;
transition:all 0.5s ease;
cursor:pointer;
&:hover{
    opacity:1;
    
    
}
`
const SubCon=styled.div`
display:flex;
background-color:rgb(0,0,0,0.1);
position:z-index:2;
`

const FormCon=styled.div`
width:500px;
position:relative;
overflow-x:hidden;
`
const FormSubCon=styled.div`
padding-left:30px;
position:absolute;
width:100%;
transition all 1.5s ease;

`
const InputFlex=styled.div`
display:flex;
gap:40px;
`
const NameInp=styled.input`
border:0.5px solid rgb(255,255,255,0.2);
background:transparent;
display:block;
color:white;
height:30px;
width:200px;
margin-top:10px;
border-radius:7px;
outline:none;
`
const FormGroup=styled.div`
margin-bottom:20px;
`
const Label=styled.label`
font-size:14px;
margin-bottom:20px;
color:rgb(255,255,255,0.4);


`

const Next=styled.button`
font-weight:bold;
color:white;
border:none;
margin:20px auto;
background-color:rgb(56, 92, 158);
width:200px;
height:30px;
border-radius:10px;
`
const BtnsFlex=styled.div`
display:flex;
width:80%;
gap:20px;
justify-content:left;
`
// add more refs for the following;
//images required;
// Phone number;
// SSN;
// gov  id card  or drivers-license
const logVals=(arr,gov_Id,userImg)=>{
    let detailsObj={}
    arr.forEach(item=>{detailsObj[item.name]=item.refVal.current.value});
    detailsObj={...detailsObj,idImg:gov_Id,userImg}
    validate_form(detailsObj)
    
}
const uploadFile=async(file,path,fn, onUpload)=>{
    try {
        await start_Upload(file,path,onUpload)
        
        fn(file)
    } catch (error) {
        console.log(error)
    }
}

 const FormElem= ({type,placeholder,name,refr})=>{
    return(
        <FormGroup>
            <Label>{name}</Label>
        <input className='detailInp' ref={refr} type={type||"text"} placeholder={placeholder||""} name={name} id={name}/>
        </FormGroup>
    )
 }
 
 const Select=styled.select`
 color:white;
 background-color:transparent;
 height: 35px;
 width:350px;
 outline:none;
 padding-left:15px;
 border-radius:7px;
 margin: 20px 0 20px 0;
 `
 
 
 const CreditBottom=styled.div`
 background-color:white;
 `
 const ImgInpCon= styled.div`
 display:flex;
 height:100;
 width:200px;
 border-radius:10px;
 background-color:rgb(0,0,0,0.5);
 align-items:center;
 justify-content:center;
 flex-direction:column;
`
const  ImgInpCons=styled.div`
display:flex;
margin:0 auto;
gap:30px;
`

const Register=()=>{
    const  firstNameRef=useRef(null);
    const  lastNameRef=useRef(null);
    const phoneRef=useRef(null);
    const emailRef=useRef(null);
    const addressRef=useRef(null)
    const  companyAddressRef=useRef(null);
     const passwordRef=useRef(null);
     const rePasswordRef=useRef(null);
     const  SSNRef=useRef(null);
     const [id_url,set_Id_Url]=useState()
     const [user_Img_url,set_User_Img_Url]=useState()
        console.log(lastNameRef)
     const allRefs=[{name:"firstname",refVal:firstNameRef},{name:"lastname",refVal:lastNameRef},{name:"email",refVal:emailRef},
        {name:"address",refVal:addressRef},{name:"phone",refVal:phoneRef},{name:"password",refVal:passwordRef},{name:"repeatpassword",refVal:rePasswordRef},{name:"SSN",refVal:SSNRef}]
        
            const inpDetails=[
 {name:"Phone Number",placeholder:"e.g: (123-4567)",refr:phoneRef},
    {name:"Email",type:"email", placeholder:"joe@example.com" ,refr:emailRef},
    {name:"Address",placeholder:"", refr:addressRef},

 ]
 const inpDetails2=[
    {name:"Company Address ( for companies only )", placeholder:"Company's Address",refr:companyAddressRef},
    {name:"password",type:"password", placeholder:"Password",refr:passwordRef},
    {name:"Confirm password",type:"password",placeholder:"Repeat password",refr:rePasswordRef},

 ]
 const  [userImg, setUserImg]=useState()
 const [gov_Id, set_Gov_Id]=useState()

    const [activeIndex,setActiveIndex]=useState(0);
    const [countries,setCountries]= useState([{name:'United State Of America'}])
    console.log(countries)
useEffect(()=>{
    const fetchCountries=async()=>{
        try{

            const raw= await fetch("https://restcountries.com/v3.1/all?fields=name")
            const jsonData=await  raw.json();
            setCountries(jsonData)
        }
        catch(err){
            console.log(err)
        }
    }
 fetchCountries()
},[])
return(
<div className="register-con">
    <Header>
        <Logo>
 
        <LogoImg src={logo}/>
        <LogoText>TFMBank</LogoText>
        </Logo>
        <Nav>
            {navLinks.map(x=><Anc href={x.path}>{x.text}</Anc>)}

        </Nav>
        <BtnsCon>
            <Btn>Register</Btn>
            <Btn blur={true}>Login</Btn>

        </BtnsCon>
    </Header>
    <Container>
<div className="blob1"></div>
<div className="blob2"></div>
        <SubCon>

        <CreditCard>

            <Visa>Visa</Visa>
            
            <CreditBottom>

            </CreditBottom>
        
        </CreditCard>
        <FormCon>
            <FormSubCon style={{transform:activeIndex===0?"translateX(0)":"translateX(-100%)"}}>

            <InputFlex>
            <FormGroup>
                <Label htmlFor="firstName">First Name:</Label>
                <input className="nameInp" name='firstname' id='firstname' ref={firstNameRef}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="last-name">Last Name:</Label>
                <input className="nameInp" id="last-name" name="" ref={lastNameRef}/>
            </FormGroup>
            </InputFlex>
            {inpDetails.map(x=><FormElem {...x}/>)}
            <Next onClick={()=>setActiveIndex(activeIndex+1)}>Next</Next>
            </FormSubCon>
 
            <FormSubCon style={{transform:activeIndex===1?"translateX(0)":"translateX(100%)"}}>

             <Select>
                {countries.map(country=><option style={{color:"black"}}>{country.name.common}</option>)}
             </Select>
            {inpDetails2.map(x=><FormElem {...x}/>)}
            <BtnsFlex>

            <Next onClick={()=>setActiveIndex(activeIndex-1)}>Prev</Next>
            <Next onClick={()=>setActiveIndex(activeIndex+1)}>Next</Next>
            </BtnsFlex>
            </FormSubCon>
            <FormSubCon style={{transform:activeIndex===2?"translateX(0)":"translateX(100%)"}}>
                <FormGroup style={{marginTop:"20px"}}>

                <Label htmlFor="SSN">SSN:</Label>
                <input ref={SSNRef} className="detailInp" type="text" id="SSN"/>
                </FormGroup>
                <FormGroup style={{marginTop:"10px"}}>
                <h4>Upload relevant images:</h4>
                <ImgInpCons>
                
                <ImgInpCon>
                <label  className="ImgLabel" style={{backgroundColor:'white'}} htmlFor="userimg">
                    
                    {!userImg&&<BsUpload color="gray"/>}
                    {userImg&&<img className="userImg" src={URL.createObjectURL(userImg)}/>}
                   
                </label >
                <label>Headshot</label>
                <input onChange={(e)=>{uploadFile(e.target.files[0],'faces',setUserImg,set_User_Img_Url)}} className="detailInp" style={{display:"none"}}   type="file" id="userimg"/>
                </ImgInpCon>
                <ImgInpCon style={{backgroundColor:"rgb(132,132,132,0.7)"}}>
                <label  className="ImgLabel" style={{backgroundColor:'white'}} htmlFor="gov_Id">
                    
                    {!gov_Id&&<BsUpload color="gray"/>}
                    {gov_Id&&<img className="userImg" src={URL.createObjectURL(gov_Id)}/>}
                   
                </label >
                <label style={{color:"black",textAlign:"center"}}>Government approved id e.g drivers license</label>
                <input onChange={(e)=>{uploadFile(e.target.files[0],'ids',set_Gov_Id,set_Id_Url)}} className="detailInp" style={{display:"none"}}   type="file" id="gov_Id"/>
                </ImgInpCon>
                </ImgInpCons>
                
                </FormGroup>
                <p style={{fontSize:"13px",fontWeight:"700", marginLeft:"5px"}}>By clicking  finish, you agree with our <a href="#" style={{textDecoration:"none",marginLeft:"5px"}}> terms & conditions</a></p>
               
    <BtnsFlex>

            <Next onClick={()=>setActiveIndex(activeIndex-1)}>Prev</Next>
            <Next onClick={()=>{console.log("clicked");logVals(allRefs,id_url,user_Img_url)}} >Finish</Next>
            </BtnsFlex>
            </FormSubCon>

            
       </FormCon>
        </SubCon>
    </Container>
    </div>
)
}
export default Register
