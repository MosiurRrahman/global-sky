import {   DM_Sans,Outfit,Rubik,Satisfy ,Jost} from "next/font/google";


export const dm_sans = DM_Sans({
    weight:["400","500","600","700","800","900"],
    subsets:["latin"],
    display:"swap",
    variable:"--font-dm-sans",
    style:["normal"]
})
export const outfit = Outfit({
    weight:["400","500","600","700","800"],
    subsets:["latin"],
    display:"swap",
    style:["normal"],
    variable:"--font-outfit"
})
export const rubik = Rubik({
    weight:["400","500","600","700","800"],
    subsets:["latin"],
    display:"swap",
    style:["normal"],
    variable:"--font-rubik"
})
export const jost = Jost({
    weight:["400","500","600","700","800"],
    subsets:["latin"],
    display:"swap",
    style:["normal"],
    variable:"--font-jost"
})
export const satisfy = Satisfy({
    weight:["400"],
    subsets:["latin"],
    display:"swap",
    style:["normal"],
    variable:"--font-satisfy"
})