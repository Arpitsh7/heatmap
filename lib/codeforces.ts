import axios from "axios";
export async function codeforces(username:string,date:Date){
    const response=await axios.get(`https://codeforces.com/api/user.status?handle=${username}`);
    const data=response.data.result;
    const today = date.toISOString().split("T")[0];
    let count=0;
    for(const i of data){
        const submissionDate=new Date(
            data.creationTimeSeconds * 1000
        ) . toISOString().split("T")[0];
        if(submissionDate === today){
            count++;
        }
    }
    return {
        date:today,
        count:count,
        platform:"codeforces"
    }
}