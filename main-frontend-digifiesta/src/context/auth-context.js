import { createContext } from "react";

export const AuthContext=createContext({
    islogin:false,
    userid:null,
    login:()=>{},
    logout:()=>{},
    token:null
})