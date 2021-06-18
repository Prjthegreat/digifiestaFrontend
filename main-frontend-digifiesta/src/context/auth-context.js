import { createContext } from "react";

export const AuthContext=createContext({
    token:null,
    islogin:false,
    userid:null,
    login:()=>{},
    logout:()=>{},
   
})