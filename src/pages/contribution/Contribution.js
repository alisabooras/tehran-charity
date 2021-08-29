import {useState, useEffect} from 'react'
import bc from './bc.mp4'
import './Contribution.css'
import Lists from './list/Lists'
import Form from './form/Form'
import Footer from '../../components/footer/Footer'
import contribution1 from './contribution-1.png'
import contribution2 from './contribution-2.png'
import alter from './alter.jpg'



const Contribution = () => {

    // delete btn
    const deleteBtn =  (id) => {
       setTasks(tasks.filter((task) => task.id !== id))
    }
    
    // Add task
    const onAddTask =  (task) => {
        const id = Math.floor(Math.random() * 1000 ) +1 ;
        const newTask = {id, ...task} 
        setTasks([...tasks, newTask])
    }

    // tasks
    const [tasks, setTasks] = useState([
            {
                "id": 0,
                "fullname": "علی صبور",
                "select": "افراد نیازمند",
                "sum": 100
            }
        
        ]);


    
    return (
        <>
            <video id="video-bk" autoPlay muted loop controlsList="nodownload" poster={alter}>
                <source src={bc}  />
            </video>
            <section id="todos" >
                <div className="todo-board">
                    <div className="todo-head">
                        <img src={contribution1} alt="help" />
                        <h4 className="">اهدا کردن</h4>
                        <img src={contribution2} alt="help" />
                    </div>
                    <Form onAddTask={onAddTask} />

                   {tasks.length > 0 ? <Lists tasks={tasks}  deleteBtn={deleteBtn}  /> : <h4 className="empty-list">لیستی وجود ندارد <i className="fas fa-clipboard-list text-danger "></i></h4> }
                </div>
            </section>
      
            <Footer />
        </>
    )
}

export default Contribution
