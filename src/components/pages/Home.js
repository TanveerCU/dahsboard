import React from 'react'
import SalesUtil from '../utils/SalesUtil';
import GraphChart from '../utils/GraphChart';
import img1 from '../../img/user1.png';
import img2 from '../../img/user2.png';
import img3 from '../../img/user3.png';
import img4 from '../../img/user4.png';
import img5 from '../../img/user5.jpg';
import UserCard from '../utils/UserCard';
import TableUtils from '../utils/TableUtils';
import {useTransaction} from '../../data/allData';

const userData = [
    {
        name: 'jordan',
        email: 'nikita@mail.com',
        pic: img1
    },
    {
        name: 'joe',
        email: 'joe@mail.com',
        pic: img2
    },
    {
        name: 'ronaldo',
        email: 'ronaldo@mail.com',
        pic: img3
    },
    {
        name: 'messi',
        email: 'messi@mail.com',
        pic: img4
    },
    {
        name: 'zidan',
        email: 'zidan@mail.com',
        pic: img5
    },
]



const props = [
    {
        title: 'Revenue',
        value: '10,00',
        percent: -15.5,
        color: "red"
    },
    {
        title: 'Sales',
        value: '4,000',
        percent: -7.9,
        color: "red"
    },
    {
        title: 'Cost',
        value: '9,000',
        percent: 2.5,
        color: "green"
    },

]




function Home() {
    const data = useTransaction();
    return (
        <div className="ml-14 mt-12 pt-8 flex flex-col items-center justify-center  sm:ml-48 sm:mt-16 sm:items-start " >


            {/* Revanue Section */}

           <section className='mx-auto flex justify-center flex-wrap '>
               {
               props.map((prop)=>{
                   return <SalesUtil {...prop} key={prop.title}/>
               })
               
               }
            </section>



            {/* Sales Chart */}

            <section className="mt-8 mb-8 shadow-md">
            <span className="pl-8 pb-5 block text-lg font-bold  text-blue-900 ">Revenue Analitycs</span>
                <GraphChart />
            </section>


            {/* Recent Add Users */}
            <div className="flex flex-wrap justify-center mt-12 w-full md:space-x-10">

            <section className="flex flex-col space-y-8 mb-8 shadow-md p-8 sm:ml-6">
            <span className="block text-lg font-bold  text-blue-900 ">Recently Added users</span>
                {
                    userData.map((data)=>{
                        return (<UserCard {...data} /> )
                    })
                }

            </section>
           
           <span className="flex-auto shadow-xl mb-8">
            <TableUtils data={data} text="Recent Transaction" />
           </span>

            </div>
         

        </div>
    )
}

export default Home
