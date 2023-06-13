export const mobile=(styles /*styles  is a string  with seperated by space*/)=>{
return`@media (max-width:480){
    ${styles.split(" ").join(';')}
}`
}