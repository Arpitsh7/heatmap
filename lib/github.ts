import axios from "axios";
export async function githubActivity(username:String,date:Date){
    const response=await axios.get(
        `https://api.github.com/users/${username}/events`
    ); 
    const event=response.data;
    const today = date.toISOString().split("T")[0];
    let count=0;
    let tasks=[];
    for(const i of event){
        const eventDate=i.created_at.split("T")[0];
        if(eventDate==today){
            count++;
        }
    }
    return{
        date:today,
        value:count,
        platform:"github",
    };
}