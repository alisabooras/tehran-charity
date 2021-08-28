import './List.css'
import { useState } from 'react';


const List = ({task, dbtn}) => {
    const [show, setShow] = useState(true);


    return (
        <div>
            <ul className="list-group" id="list-todos"> 
                <li className="list-group-item shadow" dir="rtl">
                     <i onClick={() => setShow(!show)} id="circle-show" className={`fas fa-arrow-${show ? 'circle-up text-success' : 'circle-down text-danger'}`}></i> 
                       {show ? '' : <span id="hidden-name">{task.fullname}</span> }
                     {show &&
                      <>
                        <i className="fas fa-times" dir="ltr" onClick={() => dbtn(task.id)}></i>
                        <span>اهدا کننده: </span> <span className="text-primary help-data">{task.fullname}</span> <br />
                        <span>اهدا به: </span> <span className="text-danger help-data">{task.select}</span>
                        <p>مبلغ اهدایی: </p> <span className="text-success help-data">{task.sum} تومان</span>
                      </>
                     }
                </li>
            </ul> 
        </div>
    )
}

export default List
