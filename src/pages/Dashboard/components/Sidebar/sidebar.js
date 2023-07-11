import styled from 'styled-components';
const Container=styled.div`
flex:1;
height:100%;
box-shadow: 0px 12px rgb(0,0,0,0.2);
background-color:rgb(10, 13, 20);
color:white;
display:flex;
flex-direction:column;
padding-top:60px;
padding-left:40px;
gap:20px;
align-items:center;



`
const GroupTitle=styled.h3`
 font-weight:600;
 font-size:14px;
 text-align:center;
`
 const Group=styled.div`
 display: flex;
 flex-direction:column;
 gap:5px;
 padding-left:40px;
 justify-content:center;
 align-items:flex-start;
 width:100%;
 padding-left:50px;
`
 const Anc= styled.a`
text-decoration:none;
color:white;
display:block;
transition:all 0.5 ease;
font-size:14px;
opacity:0.5;
 &:hover{
    transform:scale(1.1);
 }
 `
 const LinkData=[
    {title:"Pages", links:[ {text:"Home", path:"/"},{text:"Contact Us",path:"#"}, {text:"About Us",path:"#"}]},
    {title:"Actions", links:[ {text:"Deposit",path:"#"},{text:"Query",path:"#"}, {text:"Withdraw"},{text:"Transfer"},{text:"Change Pin"},{text:"Create a New Account"}]},
    {title:"Accounts", links:[{text:"Logout"},{text:"Switch Account"}, {text:"About Us"}]},

 ]
const SideBar=()=>{
    return(
        <Container>
            {LinkData.map(item=>{
                return(
                    <Group>
                        <GroupTitle>{item.title}</GroupTitle>
                        {item.links.map(x=><Anc href={x.path||"#"}>{x.text}</Anc>)}
                    </Group>
                )
            })}

        </Container>
    )
}
export default SideBar