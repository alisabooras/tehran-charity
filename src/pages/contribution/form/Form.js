import './Form.css'
import { useState } from 'react'

const Form = ({onAddTask}) => {
        const [fullname , setFullname] = useState('')
        const [sum , setSum] = useState('')
        const [select , setSelect] = useState('')


        const onSubmit = (e) => {
            e.preventDefault();
            
            if(!fullname) {
                alert('لطفا نام خود را وارد کنید')
            }

            onAddTask({fullname, sum, select})
            setFullname('');
            setSum('');
            setSelect('');
        }
    return (
        <div>
            <form onSubmit={onSubmit} id="todo-form">
                <div className="my-3" dir="rtl">
                    <label htmlFor="fname">نام و نام خانوادگی</label> <br />
                    <input type="text" required id="fname" value={fullname} onChange={(e) => setFullname(e.target.value)} /> 
                </div>
                <div className="my-3" dir="rtl">
                    <label htmlFor="sum">مبلغ</label> <br />
                    <input type="number" required id="sum" value={sum} onChange={(e) => setSum(e.target.value)}  placeholder="100 تومان"   /> 
                </div>

                <div className="my-3" dir="rtl">
                    <label htmlFor="select">کمک به:</label> <br />
                    <select id="select" required value={select} onChange={(e) => setSelect(e.currentTarget.value)} > 
                        <option value="" disabled defaultValue hidden>--انتخاب کنید--</option>
                        <option value="کودکان کار">کودکان کار</option>
                        <option value="بیماران کرونایی">بیماران کرونایی</option>
                        <option value="بیماران دارای بیماری های نادر">بیماران دارای بیماری نادر</option>
                        <option value="افراد نیازمند">افراد نیازمند</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success w-100 my-2">پست درخواست</button>
            </form>
        </div>
    )
}

export default Form
