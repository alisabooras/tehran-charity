import {useState, useEffect} from 'react'
import bc from './bc.mp4'
import './Contribution.css'
import Lists from './list/Lists'
import Form from './form/Form'
import Footer from '../../components/footer/Footer'
import contribution1 from './contribution-1.png'
import contribution2 from './contribution-2.png'




const Contribution = () => {

    // delete btn
    const deleteBtn = async (id) => {
        await fetch(`http://localhost:8000/tasks/${id}` , {
            method: "DELETE",
        })

       setTasks(tasks.filter((task) => task.id !== id))
    }
    
    // Add task
    const onAddTask = async (task) => {
        const res = await fetch ('http://localhost:8000/tasks' ,{
            method : "POST",

            headers:{
                "Content-type" : "application/json" 
            },

            body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks , data])
    }


    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:8000/tasks')
        .then(res => {
            if(!res.ok) {
                throw Error ("!دیتا مورد نظر یافت نشد")
            }
            return res.json()
        })

        .then(data => {
            setTasks(data)
            setLoading(false)
            setError(null)

        })

        .catch((err) => {
            setError(err.message)
            setLoading(false)
        })

    }, [])
    
    
    return (
        <>
            <video id="video-bk" autoPlay muted loop controlsList="nodownload">
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

                    {loading &&  <h1  id="fa-spinner"><i className="fas fa-spinner fa-spin"></i></h1>}
                    {error && <h3 className="text-danger text-center" style={{marginTop: '200px'}}>{error}</h3>}
                   {tasks.length > 0 ? <Lists tasks={tasks}  deleteBtn={deleteBtn}  /> : <h4 className="empty-list">لیستی وجود ندارد <i className="fas fa-clipboard-list text-danger "></i></h4> }

                </div>
            </section>
      
            <Footer />
        </>
    )
}

export default Contribution
