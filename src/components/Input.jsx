import React, { useEffect, useState } from "react";
import {doc,addDoc,collection,updateDoc,deleteDoc,getDocs} from 'firebase/firestore';
import {db} from '../firebase';

function Input()
{
    const [desc,setDesc]=useState();
    const[expense,setExpense]=useState();
    const[fetchData,setFetchData]=useState([]);
    function Description(event)
    {setDesc(event.target.value);}
    function Expense(event)
    {setExpense(event.target.value);
}

    //database linking

    const dbref=collection(db,"ExpenseTracker");

    // Adding into Database
    const Add=async()=>{
        const addData=await addDoc(dbref,{Description:desc,Expense:expense});
        window.location.reload(false);
       
    }

   //Fetching from Database

   const fetch= async()=>
    {
        const snapshot=await getDocs(dbref);
        const fetchdata=snapshot.docs.map((doc=>({id:doc.id, ...doc.data()})));
        setFetchData(fetchdata); 
    }
   useEffect(()=>{fetch()},[]);

   //deleting from database
   const del=async(id)=>
    {
        const delref=doc(dbref,id);
        try{
            await deleteDoc(delref);
            window.location.reload(false);
        }
        catch{
            alert("error");
        }
    }
    
    return  (<div>
    <h2 className='poppins-thin'>Expense description</h2>
    <input className='input-box'type='text' onChange={Description}/>
    <h2 className='poppins-thin'>Amount Spent</h2>
    <input className='input-box'onChange={Expense} type='number'/>
    <div>
    <button className="btn" onClick={Add}>ADD</button>
    </div>
    
    <div className="grid-container-element">
        {
            fetchData.map(data=>
                {
                    return <div className="grid-child-element purple" onClick={()=>del(data.id)} >
                        <h3 className="data">{data.Description}: {data.Expense}</h3>
                    </div>;
                        
                        
                }
            )
        }
    </div>
    </div>);
    
}

export default Input;
